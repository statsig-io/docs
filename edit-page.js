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

  function refreshPageEnhancements() {
    addEditPageLink();
    monitorSearchInputs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshPageEnhancements);
  } else {
    refreshPageEnhancements();
  }

  let debounceTimer;
  const observer = new MutationObserver(function(mutations) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(refreshPageEnhancements, 100);
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
  const COMMAND_PALETTE_INPUT_SELECTORS = [
    'input[data-commandk-input]',
    'input[data-cmdk-input]',
    '.cmdk input[type="text"]',
    '.kbar input[type="text"]',
    '.MintlifySearch input[type="text"]',
    'input[placeholder*="Search"]',
  ];
  const COMMAND_PALETTE_INPUT_SELECTOR = COMMAND_PALETTE_INPUT_SELECTORS.join(', ');
  const ASK_AI_MIN_QUERY_LENGTH = 3;
  const searchInputEnhancements = new WeakMap();

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

  function monitorSearchInputs() {
    const candidates = document.querySelectorAll(COMMAND_PALETTE_INPUT_SELECTOR);

    if (!candidates.length) {
      return;
    }

    candidates.forEach(function(input) {
      if (!(input instanceof HTMLInputElement)) {
        return;
      }

      if (!isCommandPaletteInput(input)) {
        return;
      }

      if (!searchInputEnhancements.has(input)) {
        attachAskAiSuggestion(input);
      } else {
        updateAskAiSuggestion(input);
      }
    });
  }

  function isCommandPaletteInput(input) {
    if (!input || input.tagName !== 'INPUT') {
      return false;
    }

    return Boolean(
      input.closest('[data-commandk-root]') ||
        input.closest('[data-cmdk-root]') ||
        input.closest('.cmdk') ||
        input.closest('.kbar') ||
        input.closest('[class*="mintlify"]')
    );
  }

  function attachAskAiSuggestion(input) {
    const anchor =
      input.closest('[data-commandk-input-wrapper]') ||
      input.closest('[data-cmdk-input-wrapper]') ||
      input.parentElement ||
      input;

    if (!anchor || searchInputEnhancements.has(input)) {
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'statsig-ask-ai-cta';
    wrapper.style.display = 'none';
    wrapper.style.marginTop = '0.75rem';
    wrapper.style.padding = '0 0.5rem';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'statsig-ask-ai-cta__button';
    button.style.width = '100%';
    button.style.borderRadius = '10px';
    button.style.border = '1px solid var(--mint-border-color, rgba(0, 0, 0, 0.12))';
    button.style.padding = '0.65rem 0.9rem';
    button.style.fontSize = '0.95rem';
    button.style.fontWeight = '500';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'space-between';
    button.style.gap = '0.5rem';
    button.style.background = 'var(--mint-surface-color, rgba(255, 255, 255, 0.04))';
    button.style.color = 'inherit';
    button.style.cursor = 'pointer';

    const label = document.createElement('span');
    label.textContent = 'Ask AI +';
    label.style.fontWeight = '600';

    const querySpan = document.createElement('span');
    querySpan.className = 'statsig-ask-ai-cta__query';
    querySpan.style.overflow = 'hidden';
    querySpan.style.textOverflow = 'ellipsis';
    querySpan.style.whiteSpace = 'nowrap';
    querySpan.style.flexGrow = '1';
    querySpan.style.textAlign = 'right';

    button.appendChild(label);
    button.appendChild(querySpan);

    button.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      const query = (input.value || '').trim();
      if (query.length > ASK_AI_MIN_QUERY_LENGTH) {
        openAskAiWithQuery(query);
      }
    });

    wrapper.appendChild(button);

    if (anchor.parentElement) {
      anchor.parentElement.insertBefore(wrapper, anchor.nextSibling);
    } else {
      anchor.insertAdjacentElement('afterend', wrapper);
    }

    const updateHandler = function() {
      updateAskAiSuggestion(input);
    };

    input.addEventListener('input', updateHandler);
    input.addEventListener('change', updateHandler);

    searchInputEnhancements.set(input, {
      wrapper: wrapper,
      querySpan: querySpan,
      button: button
    });

    updateAskAiSuggestion(input);
  }

  function updateAskAiSuggestion(input) {
    const enhancement = searchInputEnhancements.get(input);

    if (!enhancement) {
      return;
    }

    const query = (input.value || '').trim();
    const shouldShow = query.length > ASK_AI_MIN_QUERY_LENGTH;

    enhancement.wrapper.style.display = shouldShow ? 'block' : 'none';
    enhancement.wrapper.hidden = !shouldShow;

    if (shouldShow) {
      enhancement.querySpan.textContent = query;
      enhancement.button.title = 'Ask AI + ' + query;
    } else {
      enhancement.querySpan.textContent = '';
      enhancement.button.removeAttribute('title');
    }
  }

  function openAskAiWithQuery(query) {
    if (!query) {
      return;
    }

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    if (
      window.StatsigDocs &&
      typeof window.StatsigDocs.openKapa === 'function'
    ) {
      window.StatsigDocs.openKapa({ query: trimmedQuery });
      return;
    }

    if (typeof window.__statsigOpenKapa === 'function') {
      window.__statsigOpenKapa({ query: trimmedQuery });
      return;
    }

    if (window.Kapa && typeof window.Kapa.open === 'function') {
      window.Kapa.open();
    }
  }
})();
