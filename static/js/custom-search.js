/**
 * Statsig Search Customization
 * 
 * This script customizes the Algolia search functionality in the Statsig docs site
 * to scope search results based on the current navigation section.
 */
(function() {
  console.log('[Statsig Search] Script loaded');

  const originalXHR = window.XMLHttpRequest;
  const originalFetch = window.fetch;
  
  let isSearchRequest = false;

  function getCurrentSection() {
    const currentPageLink = document.querySelector('nav a[aria-current="page"]').id || "docs";
    console.log('[Statsig Search] Current section:', currentPageLink);
    return currentPageLink;
  }
  
  function addSectionIndicator(section) {
    console.log('[Statsig Search] Adding section indicator for', section);
    
    const checkForSearchModal = setInterval(() => {
      const searchForm = document.querySelector('.DocSearch-Form');
      if (!searchForm) return;
      
      clearInterval(checkForSearchModal);
      
      let indicator = document.querySelector('#statsig-section-indicator');
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'statsig-section-indicator';
        indicator.style.position = 'absolute';
        indicator.style.right = '50px';
        indicator.style.top = '12px';
        indicator.style.fontSize = '12px';
        indicator.style.fontWeight = 'bold';
        indicator.style.zIndex = '100';
        indicator.style.padding = '2px 6px';
        indicator.style.borderRadius = '4px';
        searchForm.appendChild(indicator);
      }
      
      if (section === 'api') {
        indicator.textContent = 'Searching in: SDKs & APIs';
        indicator.style.backgroundColor = '#e6f7ff';
        indicator.style.color = '#0066cc';
      } else if (section === 'warehouse') {
        indicator.textContent = 'Searching in: Warehouse Native';
        indicator.style.backgroundColor = '#e6ffe6';
        indicator.style.color = '#006600';
      } else {
        indicator.textContent = 'Searching in: Product Docs';
        indicator.style.backgroundColor = '#f0f0f0';
        indicator.style.color = '#666666';
      }
      
      console.log('[Statsig Search] Section indicator added');
    }, 100);
  }

  function applyFiltersToRequest(request, section) {
    // Apply filter as a top-level property in the request object
    // instead of encoding it in the params string
    request.filters = `section:${section}`;
    return request;
  }

  window.XMLHttpRequest = function() {
    const xhr = new originalXHR();
    const originalOpen = xhr.open;
    const originalSend = xhr.send;
    
    xhr.open = function() {
      const url = arguments[1];
      
      if (url && typeof url === 'string' && url.includes('algolia.net')) {
        isSearchRequest = true;
        console.log('[Statsig Search] Detected Algolia XHR request');
      }
      
      return originalOpen.apply(this, arguments);
    };
    
    xhr.send = function(body) {
      if (isSearchRequest && body) {
        try {
          const section = getCurrentSection();
          const data = JSON.parse(body);
          
          if (Array.isArray(data.requests)) {
            data.requests = data.requests.map(request => applyFiltersToRequest(request, section));
          }
          
          body = JSON.stringify(data);
        } catch (e) {
          console.error('[Statsig Search] Error modifying Algolia XHR request:', e);
        }
        
        isSearchRequest = false;
      }
      
      return originalSend.call(this, body);
    };
    
    return xhr;
  };

  window.fetch = function(resource, init) {
    const isAlgoliaRequest = 
      (typeof resource === 'string' && resource.includes('algolia.net')) ||
      (resource instanceof Request && resource.url.includes('algolia.net'));
    
    if (isAlgoliaRequest && init && init.body) {
      try {
        const section = getCurrentSection();
        const data = JSON.parse(init.body);
        
        if (Array.isArray(data.requests)) {
          data.requests = data.requests.map(request => applyFiltersToRequest(request, section));
        }
        
        init.body = JSON.stringify(data);
      } catch (e) {
        console.error('[Statsig Search] Error intercepting Algolia fetch request:', e);
      }
    }
    
    return originalFetch.call(window, resource, init);
  };

  // Initialize the search customization
  function initialize() {
    console.log('[Statsig Search] Initializing search customization');
    
    document.addEventListener('click', function(event) {
      if (event.target.closest('.DocSearch-Button')) {
        console.log('[Statsig Search] Search button clicked');
        addSectionIndicator(getCurrentSection());
      }
    }, true);
    
    document.addEventListener('keydown', function(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        console.log('[Statsig Search] Keyboard shortcut detected');
        addSectionIndicator(getCurrentSection());
      }
    });
    
    console.log('[Statsig Search] Search customization initialized');
  }
  
  // Initialize when the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
