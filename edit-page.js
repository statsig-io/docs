(function() {
  'use strict';

  let lastProcessedPath = '';

  function addEditPageLink() {
    const currentPath = window.location.pathname;
    
    if (currentPath === lastProcessedPath) {
      return;
    }
    
    lastProcessedPath = currentPath;

    let cleanPath = currentPath.replace(/^\//, '').replace(/\/$/, '');
    
    if (cleanPath === '' || cleanPath === '/') {
      cleanPath = 'welcome';
    }
    
    const githubEditUrl = `https://github.com/statsig-io/docs/blob/main/${cleanPath}.mdx`;
    
    const footer = document.querySelector('footer');
    if (!footer) {
      setTimeout(addEditPageLink, 500);
      return;
    }

    const poweredByMintlify = Array.from(footer.querySelectorAll('a')).find(
      link => link.textContent && (link.textContent.includes('Powered by Mintlify') || link.href.includes('mintlify.com'))
    );

    if (poweredByMintlify) {
      poweredByMintlify.href = githubEditUrl;
      poweredByMintlify.textContent = 'Edit this page';
      poweredByMintlify.target = '_blank';
      poweredByMintlify.rel = 'noopener noreferrer';
    } else {
      const existingEditLink = footer.querySelector('a[href*="github.com/statsig-io/docs"]');
      if (!existingEditLink) {
        const editLink = document.createElement('a');
        editLink.href = githubEditUrl;
        editLink.textContent = 'Edit this page';
        editLink.target = '_blank';
        editLink.rel = 'noopener noreferrer';
        editLink.style.cssText = 'color: inherit; text-decoration: none;';
        
        footer.appendChild(editLink);
      } else {
        existingEditLink.href = githubEditUrl;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addEditPageLink);
  } else {
    addEditPageLink();
  }

  let debounceTimer;
  const observer = new MutationObserver(function(mutations) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(addEditPageLink, 100);
  });

  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
})();
