/**
 * Statsig Search Customization
 * 
 * This script customizes the Algolia search functionality in the Statsig docs site
 * to scope search results based on the current navigation section.
 */
(function() {
  console.log('[Statsig Search] Script loaded');

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

  function patchXMLHttpRequest() {
    console.log('[Statsig Search] Patching XMLHttpRequest');
    
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
      this._statsigUrl = url;
      return originalOpen.call(this, method, url, ...args);
    };
    
    XMLHttpRequest.prototype.send = function(body) {
      if (this._statsigUrl && this._statsigUrl.includes('algolia.net/1/indexes/')) {
        try {
          const section = getCurrentSection();
          console.log('[Statsig Search] Intercepted Algolia request for section:', section);
          
          if (body) {
            const data = JSON.parse(body);
            console.log('[Statsig Search] Original request data:', data);
            
            if (section === 'api') {
              data.facetFilters = ['docusaurus_tag:default'];
              data.filters = 'path:/client/ OR path:/server/ OR path:/console-api/ OR path:/http-api/ OR path:/sdks/ OR path:/sdk/';
            } else if (section === 'warehouse') {
              data.facetFilters = ['docusaurus_tag:default'];
              data.filters = 'path:/statsig-warehouse-native/';
            } else {
              data.facetFilters = ['docusaurus_tag:default'];
              data.filters = 'NOT path:/client/ AND NOT path:/server/ AND NOT path:/console-api/ AND NOT path:/http-api/ AND NOT path:/sdks/ AND NOT path:/sdk/ AND NOT path:/statsig-warehouse-native/';
            }
            
            console.log('[Statsig Search] Modified request data:', data);
            body = JSON.stringify(data);
          }
        } catch (e) {
          console.error('[Statsig Search] Error modifying Algolia request:', e);
        }
      }
      
      return originalSend.call(this, body);
    };
    
    console.log('[Statsig Search] XMLHttpRequest patched successfully');
  }

  function patchFetch() {
    console.log('[Statsig Search] Patching fetch API');
    
    const originalFetch = window.fetch;
    
    window.fetch = function(resource, init) {
      if (resource && typeof resource === 'string' && resource.includes('algolia.net/1/indexes/')) {
        try {
          const section = getCurrentSection();
          console.log('[Statsig Search] Intercepted Algolia fetch request for section:', section);
          
          if (init && init.body) {
            const data = JSON.parse(init.body);
            console.log('[Statsig Search] Original fetch request data:', data);
            
            if (section === 'api') {
              data.facetFilters = ['docusaurus_tag:default'];
              data.filters = 'path:/client/ OR path:/server/ OR path:/console-api/ OR path:/http-api/ OR path:/sdks/ OR path:/sdk/';
            } else if (section === 'warehouse') {
              data.facetFilters = ['docusaurus_tag:default'];
              data.filters = 'path:/statsig-warehouse-native/';
            } else {
              data.facetFilters = ['docusaurus_tag:default'];
              data.filters = 'NOT path:/client/ AND NOT path:/server/ AND NOT path:/console-api/ AND NOT path:/http-api/ AND NOT path:/sdks/ AND NOT path:/sdk/ AND NOT path:/statsig-warehouse-native/';
            }
            
            console.log('[Statsig Search] Modified fetch request data:', data);
            init.body = JSON.stringify(data);
          }
        } catch (e) {
          console.error('[Statsig Search] Error modifying Algolia fetch request:', e);
        }
      }
      
      return originalFetch.call(window, resource, init);
    };
    
    console.log('[Statsig Search] fetch API patched successfully');
  }

  // Initialize the search customization
  function initialize() {
    console.log('[Statsig Search] Initializing search customization');
    
    patchXMLHttpRequest();
    patchFetch();
    
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
    
    window.addEventListener('popstate', function() {
      console.log('[Statsig Search] Navigation detected');
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
