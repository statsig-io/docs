#!/usr/bin/env python3
import os
import subprocess
import re
import sys

# Debug flag to enable verbose logging
DEBUG = True

IGNORED_COMMIT = 'b9132ef396ac5b8f088d7ea6555e13549c5e85b5'


def debug(message):
    if DEBUG:
        print(f"DEBUG: {message}")


def get_git_last_updated_date(filepath):
    """
    Runs git log on the given file and returns the date of the most recent commit that is not the ignored commit.
    """
    try:
        # Run git log for the file, with commit hash and commit date separated by ';'
        result = subprocess.run(
            ['git', 'log', '--format=%H;%ci', '--', filepath],
            capture_output=True, text=True, check=True
        )
        lines = result.stdout.strip().splitlines()
        debug(f"Git log for {filepath}: {lines}")
        for line in lines:
            if not line.strip():
                continue
            parts = line.split(';', 1)
            if len(parts) != 2:
                continue
            commit_hash, commit_date = parts[0].strip(), parts[1].strip()
            if commit_hash == IGNORED_COMMIT:
                debug(f"Skipping ignored commit {IGNORED_COMMIT} for file {filepath}")
                continue
            return commit_date
        return 'No valid commit found'
    except subprocess.CalledProcessError as e:
        print(f"Error running git log for {filepath}: {e}", file=sys.stderr)
        return 'Error'


def find_doc_files(root='.'):
    """
    Recursively finds documentation files (with .md or .mdx extensions) starting from the given root directory.
    """
    doc_files = []
    for dirpath, dirnames, filenames in os.walk(root):
        for filename in filenames:
            if filename.endswith('.md') or filename.endswith('.mdx'):
                full_path = os.path.join(dirpath, filename)
                doc_files.append(full_path)
    return doc_files


def update_frontmatter(filepath, last_update):
    """Updates the YAML frontmatter in the file to set or update the last_update field."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading file {filepath}: {e}", file=sys.stderr)
        return

    if not lines or lines[0].strip() != '---':
        print(f"File {filepath} does not have a valid frontmatter block. Skipping update.", file=sys.stderr)
        return

    # Find the end of the frontmatter (next line that is just '---')
    frontmatter_end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            frontmatter_end = i
            break
    if frontmatter_end is None:
        print(f"File {filepath} does not have a closing frontmatter delimiter. Skipping update.", file=sys.stderr)
        return

    # Look for an existing last_update line within the frontmatter
    last_update_line_index = None
    for i in range(1, frontmatter_end):
        if lines[i].strip().startswith('last_update:'):
            last_update_line_index = i
            break

    new_line = f"last_update: {last_update}\n"
    if last_update_line_index is not None:
        lines[last_update_line_index] = new_line
    else:
        # Insert before the closing '---'
        lines.insert(frontmatter_end, new_line)

    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        debug(f"Updated frontmatter in {filepath} with last_update: {last_update}")
    except Exception as e:
        print(f"Error writing file {filepath}: {e}", file=sys.stderr)


def main():
    print('Searching for documentation files with an owner keyword...')
    doc_files = find_doc_files('.')
    owner_pattern = re.compile(r'owner:\s*([^\s]+)', re.IGNORECASE)
    results = []

    for file in doc_files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
            # Only consider files that have 'keywords:' and an owner entry
            if 'keywords:' in content and 'owner:' in content:
                match = owner_pattern.search(content)
                if match:
                    owner = match.group(1).strip()
                    # Capitalize the owner's name (e.g., 'brock' -> 'Brock')
                    owner = owner.title()
                    last_updated = get_git_last_updated_date(file)
                    results.append((file, owner, last_updated))
                    print(f"File: {file}\n  Owner: {owner}\n  Last Updated: {last_updated}\n")
                    update_frontmatter(file, last_updated)
        except Exception as e:
            print(f"Error processing {file}: {e}", file=sys.stderr)

    print('Done processing files.')

    # Save results to CSV using pandas
    try:
        import pandas as pd
        df = pd.DataFrame(results, columns=['file', 'owner', 'last_updated'])
        df.to_csv('doc_updates.csv', index=False)
        print('CSV saved to doc_updates.csv')
    except ImportError as e:
        print('Pandas is not installed. CSV file not saved.', file=sys.stderr)


if __name__ == '__main__':
    main() 