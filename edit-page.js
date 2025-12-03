(function() {
  'use strict';

  let lastProcessedPath = '';
  let retryCount = 0;
  const MAX_RETRIES = 10;

  function addEditPageLink() {
    const currentPath = window.location.pathname;
    
    if (currentPath === lastProcessedPath) {
      return;
    }
    
    lastProcessedPath = currentPath;
    retryCount = 0;

    let cleanPath = currentPath.replace(/^\//, '').replace(/\/$/, '');
    
    if (cleanPath === '' || cleanPath === '/') {
      cleanPath = 'welcome';
    }
    
    const githubEditUrl = `https://github.com/statsig-io/docs/blob/main/${cleanPath}.mdx`;
    
    const footer = document.querySelector('footer');
    if (!footer) {
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(addEditPageLink, 500);
      }
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

  const SEARCH_TRIGGER_SELECTORS = [
    'button[aria-label*="Search"]',
    '[data-commandk-trigger]',
    '[data-cmdk-trigger]',
    '.DocSearch-Button',
    'button[class*="search"]',
  ];

  function isEditableElement(element) {
    if (!element) {
      return false;
    }

    const tagName = element.tagName;
    return (
      element.isContentEditable ||
      tagName === 'INPUT' ||
      tagName === 'TEXTAREA' ||
      element.getAttribute('role') === 'textbox'
    );
  }

  function triggerSearchPalette() {
    const syntheticEvent = new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      ctrlKey: true,
      metaKey: true,
      bubbles: true,
      cancelable: true
    });

    window.dispatchEvent(syntheticEvent);

    for (const selector of SEARCH_TRIGGER_SELECTORS) {
      const candidate = document.querySelector(selector);
      if (candidate) {
        candidate.click();
        return;
      }
    }
  }

  window.addEventListener(
    'keydown',
    function(event) {
      if (
        event.defaultPrevented ||
        event.repeat ||
        event.key !== '/' ||
        event.altKey ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        isEditableElement(event.target)
      ) {
        return;
      }

      event.preventDefault();
      triggerSearchPalette();
    },
    true
  );
})();
