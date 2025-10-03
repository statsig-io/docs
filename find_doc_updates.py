#!/usr/bin/env python3
import os
import subprocess
import re
import sys
from datetime import datetime

# Debug flag to enable verbose logging
DEBUG = os.environ.get('DEBUG_DOC_UPDATES', 'false').lower() == 'true'
BUILD_MODE = os.environ.get('BUILD_MODE', 'false').lower() == 'true'

IGNORED_COMMITS = [
    'b9132ef396ac5b8f088d7ea6555e13549c5e85b5',
    'a915fe6215b5844508ea920e2c02e6da460480f9',
    'bce6952c5227c51852bbb3b77df1bc3b38dd4972'
]


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
            if commit_hash in IGNORED_COMMITS:
                debug(f"Skipping ignored commit {commit_hash} for file {filepath}")
                continue
                
            # Format the date as yyyy-mm-dd
            try:
                # Parse the git date format (typically like "2023-04-15 12:34:56 -0700")
                dt = datetime.strptime(commit_date, "%Y-%m-%d %H:%M:%S %z")
                # Format as yyyy-mm-dd
                formatted_date = dt.strftime("%Y-%m-%d")
                return formatted_date
            except ValueError:
                debug(f"Could not parse date '{commit_date}', returning as is")
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

    # Look for an existing last_update line or block within the frontmatter
    last_update_start_index = None
    last_update_end_index = None
    in_last_update_block = False
    
    for i in range(1, frontmatter_end):
        line = lines[i].strip()
        if line.startswith('last_update:'):
            # Found the start of a last_update entry
            last_update_start_index = i
            
            # Check if it's a simple key-value or the start of a block
            if line == 'last_update:' or line.endswith(':'):
                in_last_update_block = True
                # Find the end of the block (next line with same or less indentation)
                indent_level = len(lines[i]) - len(lines[i].lstrip())
                for j in range(i + 1, frontmatter_end):
                    if not lines[j].strip() or lines[j].strip().startswith('#'):
                        continue  # Skip empty lines or comments
                    if len(lines[j]) - len(lines[j].lstrip()) <= indent_level:
                        last_update_end_index = j - 1
                        break
                if last_update_end_index is None:
                    last_update_end_index = frontmatter_end - 1
            else:
                # It's a simple key-value, not a block
                last_update_end_index = i
            break

    # Format the new last_update block
    new_last_update_lines = [
        "last_update:\n",
        f"  date: {last_update}\n"
    ]

    if last_update_start_index is not None:
        # Replace existing last_update entry
        end_index = last_update_end_index + 1 if last_update_end_index is not None else last_update_start_index + 1
        lines[last_update_start_index:end_index] = new_last_update_lines
    else:
        # Insert before the closing '---'
        lines.insert(frontmatter_end, "\n")  # Add a blank line for readability
        for line in reversed(new_last_update_lines):
            lines.insert(frontmatter_end, line)

    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        debug(f"Updated frontmatter in {filepath} with last_update: {last_update}")
    except Exception as e:
        print(f"Error writing file {filepath}: {e}", file=sys.stderr)


def main():
    if not BUILD_MODE:
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
                    if not BUILD_MODE:
                        print(f"File: {file}\n  Owner: {owner}\n  Last Updated: {last_updated}\n")
                    update_frontmatter(file, last_updated)
        except Exception as e:
            print(f"Error processing {file}: {e}", file=sys.stderr)

    if not BUILD_MODE:
        print('Done processing files.')

        # Save results to CSV using pandas (only in non-build mode)
        try:
            import pandas as pd
            df = pd.DataFrame(results, columns=['file', 'owner', 'last_updated'])
            df.to_csv('doc_updates.csv', index=False)
            print('CSV saved to doc_updates.csv')
        except ImportError as e:
            print('Pandas is not installed. CSV file not saved.', file=sys.stderr)


if __name__ == '__main__':
    main()  