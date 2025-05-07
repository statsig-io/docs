# To run this script:
# python3 -m venv venv            
# source venv/bin/activate
# pip install requests pyyaml

import os
import re
import csv
import yaml
import requests
from datetime import datetime
import concurrent.futures
from urllib.parse import urlparse

MARKDOWN_IMAGE_PATTERN = r'!\[.*?\]\((https?://[^)]+)\)'
HTML_IMG_PATTERN = r'<img.*?src=["\'](https?://[^"\']+)["\']'
GITHUB_EMBED_PATTERN = r'<GitHubEmbed.*?url=["\'](https?://[^"\']+)["\']'
OWNER_PATTERN = r'owner:\s*([^\s]+)'

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

def extract_frontmatter(file_path):
    """
    Extracts the frontmatter from a markdown file.
    Returns the frontmatter as a string.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            if content.startswith('---'):
                end_index = content.find('---', 3)
                if end_index != -1:
                    return content[3:end_index].strip()
            
            return ""
    except Exception as e:
        print(f"Error extracting frontmatter from {file_path}: {e}")
        return ""

def extract_owner(frontmatter):
    """
    Extracts the owner from the frontmatter.
    Returns the owner as a string or None if not found.
    """
    try:
        try:
            data = yaml.safe_load(frontmatter)
            if data and 'keywords' in data:
                for keyword in data['keywords']:
                    if isinstance(keyword, str) and keyword.startswith('owner:'):
                        return keyword.split(':', 1)[1].strip()
        except Exception:
            pass
        
        match = re.search(OWNER_PATTERN, frontmatter)
        if match:
            return match.group(1).strip()
        
        return None
    except Exception as e:
        print(f"Error extracting owner: {e}")
        return None

def extract_image_urls_and_owner(file_path):
    """
    Extracts image URLs and owner from a markdown or MDX file.
    Returns a list of tuples (file_path, image_url, owner).
    """
    results = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            frontmatter = extract_frontmatter(file_path)
            owner = extract_owner(frontmatter)
            
            for match in re.finditer(MARKDOWN_IMAGE_PATTERN, content):
                image_url = match.group(1)
                results.append((file_path, image_url, owner))
            
            for match in re.finditer(HTML_IMG_PATTERN, content):
                image_url = match.group(1)
                results.append((file_path, image_url, owner))
            
            for match in re.finditer(GITHUB_EMBED_PATTERN, content):
                image_url = match.group(1)
                results.append((file_path, image_url, owner))
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    
    return results

def is_github_cdn_link(url):
    """
    Checks if a URL is a GitHub CDN link.
    """
    parsed_url = urlparse(url)
    return (parsed_url.netloc.endswith('githubusercontent.com') or 
            parsed_url.netloc.endswith('github.com') or
            'user-attachments' in url)

def get_last_modified(url):
    """
    Makes an HTTP request to get the Last-Modified header for a URL.
    Follows redirects if necessary.
    Returns the Last-Modified date as a string or None if not available.
    """
    try:
        if not is_github_cdn_link(url):
            return "Not a GitHub CDN link"
        
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        
        response = requests.get(url, headers=headers, timeout=10, allow_redirects=True, stream=True)
        
        response.close()
        
        if response.status_code == 200:
            last_modified = response.headers.get('Last-Modified')
            if last_modified:
                try:
                    dt = datetime.strptime(last_modified, "%a, %d %b %Y %H:%M:%S %Z")
                    return dt.strftime("%Y-%m-%d %H:%M:%S")
                except ValueError:
                    return last_modified
            else:
                return "No Last-Modified header"
        else:
            return f"HTTP Error: {response.status_code}"
    except Exception as e:
        return f"Error: {str(e)}"

def process_file(file_path):
    """
    Process a single file to extract image URLs, owner, and get their Last-Modified dates.
    Returns a list of tuples (image_url, file_path, last_modified, owner).
    """
    results = []
    image_urls_and_owner = extract_image_urls_and_owner(file_path)
    
    for file_path, image_url, owner in image_urls_and_owner:
        last_modified = get_last_modified(image_url)
        results.append((image_url, file_path, last_modified, owner))
    
    return results

def main():
    print('Searching for documentation files with image references...')
    if os.path.exists('../docs'):
        docs_path = '../docs'
    elif os.path.exists('./docs'):
        docs_path = './docs'
    else:
        print("Error: Could not find docs directory. Make sure you're running this script from the repository root or tasks directory.")
        return
    
    print(f"Using docs path: {docs_path}")
    doc_files = find_doc_files(docs_path)
    results = []
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        future_to_file = {executor.submit(process_file, file_path): file_path for file_path in doc_files}
        
        for future in concurrent.futures.as_completed(future_to_file):
            file_path = future_to_file[future]
            try:
                file_results = future.result()
                results.extend(file_results)
                print(f"Processed {file_path}, found {len(file_results)} images")
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
    
    github_cdn_results = [(url, path, last_modified, owner) for url, path, last_modified, owner in results 
                          if is_github_cdn_link(url) and not last_modified.startswith("HTTP Error") and not last_modified.startswith("Error")]
    
    csv_path = 'github_image_metadata_with_owner.csv'
    with open(csv_path, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Image URL', 'Docs Page', 'Last Modified', 'Owner'])
        writer.writerows(github_cdn_results)
    
    all_csv_path = 'all_image_metadata_with_owner.csv'
    with open(all_csv_path, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Image URL', 'Docs Page', 'Last Modified', 'Owner'])
        writer.writerows(results)
    
    print(f'Found {len(results)} total images in {len(doc_files)} documentation files')
    print(f'Filtered to {len(github_cdn_results)} GitHub CDN images with valid Last-Modified dates')
    print(f'GitHub CDN images with owner saved to {csv_path}')
    print(f'All images with owner saved to {all_csv_path}')

if __name__ == '__main__':
    main()
