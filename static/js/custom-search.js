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
    const path = window.location.pathname;
    console.log('[Statsig Search] Current path:', path);
    
    if (path.match(/\/(sdks|client|server|console-api|http-api|sdk)\//)) {
      return 'api';
    } else if (path.match(/\/statsig-warehouse-native\//)) {
      return 'warehouse';
    }
    
    const navItems = document.querySelectorAll('.navbar__item');
    for (const item of navItems) {
      if (item.classList.contains('navbar__item--active')) {
        const label = item.textContent.trim();
        if (label.includes('SDKs') || label.includes('APIs')) {
          return 'api';
        } else if (label.includes('Warehouse')) {
          return 'warehouse';
        }
      }
    }
    
    return 'docs';
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

  window.XMLHttpRequest = function() {
    const xhr = new originalXHR();
    const originalOpen = xhr.open;
    const originalSend = xhr.send;
    
    xhr.open = function() {
      const method = arguments[0];
      const url = arguments[1];
      
      if (url && typeof url === 'string' && url.includes('algolia.net')) {
        isSearchRequest = true;
        console.log('[Statsig Search] Detected Algolia XHR request:', url);
      }
      
      return originalOpen.apply(this, arguments);
    };
    
    xhr.send = function(body) {
      if (isSearchRequest && body) {
        try {
          const section = getCurrentSection();
          const data = JSON.parse(body);
          
          console.log('[Statsig Search] Original Algolia XHR request:', data);
          
          if (Array.isArray(data.requests)) {
            data.requests.forEach(request => {
              if (!request.params) {
                request.params = {};
              }
              
              const params = new URLSearchParams(request.params);
              const existingFacetFilters = params.get('facetFilters');
              let facetFilters = existingFacetFilters ? JSON.parse(existingFacetFilters) : [];
              
              if (!Array.isArray(facetFilters)) {
                facetFilters = [facetFilters];
              }
              
              if (section === 'api') {
                params.set('facetFilters', JSON.stringify([
                  'docusaurus_tag:default',
                  ['lvl0:SDKs & APIs', 'lvl1:Client SDKs', 'lvl1:Server SDKs', 'lvl1:Console API', 'lvl1:HTTP API']
                ]));
              } else if (section === 'warehouse') {
                params.set('facetFilters', JSON.stringify([
                  'docusaurus_tag:default',
                  ['lvl0:Warehouse Native']
                ]));
              } else {
                params.set('facetFilters', JSON.stringify([
                  'docusaurus_tag:default',
                  ['NOT lvl0:SDKs & APIs', 'NOT lvl0:Warehouse Native']
                ]));
              }
              
              request.params = params.toString();
            });
          }
          
          console.log('[Statsig Search] Modified Algolia XHR request:', data);
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
    if (resource && typeof resource === 'string' && resource.includes('algolia.net')) {
      try {
        const section = getCurrentSection();
        
        if (init && init.body) {
          const data = JSON.parse(init.body);
          console.log('[Statsig Search] Original Algolia fetch request:', data);
          
          if (Array.isArray(data.requests)) {
            data.requests.forEach(request => {
              if (!request.params) {
                request.params = {};
              }
              
              const params = new URLSearchParams(request.params);
              
              if (section === 'api') {
                params.set('facetFilters', JSON.stringify([
                  'docusaurus_tag:default',
                  ['lvl0:SDKs & APIs', 'lvl1:Client SDKs', 'lvl1:Server SDKs', 'lvl1:Console API', 'lvl1:HTTP API']
                ]));
              } else if (section === 'warehouse') {
                params.set('facetFilters', JSON.stringify([
                  'docusaurus_tag:default',
                  ['lvl0:Warehouse Native']
                ]));
              } else {
                params.set('facetFilters', JSON.stringify([
                  'docusaurus_tag:default',
                  ['NOT lvl0:SDKs & APIs', 'NOT lvl0:Warehouse Native']
                ]));
              }
              
              request.params = params.toString();
            });
          }
          
          console.log('[Statsig Search] Modified Algolia fetch request:', data);
          init.body = JSON.stringify(data);
        }
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
