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
  let currentSection = null;

  function getCurrentSection() {
    if (currentSection) return currentSection;
    
    const path = window.location.pathname;
    console.log('[Statsig Search] Current path:', path);
    
    if (path.match(/\/(sdks|client|server|console-api|http-api|sdk)\//)) {
      currentSection = 'api';
      return currentSection;
    } else if (path.match(/\/statsig-warehouse-native\//)) {
      currentSection = 'warehouse';
      return currentSection;
    }
    
    const navItems = document.querySelectorAll('.navbar__item');
    for (const item of navItems) {
      if (item.classList.contains('navbar__item--active')) {
        const label = item.textContent.trim();
        if (label.includes('SDKs') || label.includes('APIs')) {
          currentSection = 'api';
          return currentSection;
        } else if (label.includes('Warehouse')) {
          currentSection = 'warehouse';
          return currentSection;
        }
      }
    }
    
    currentSection = 'docs';
    return currentSection;
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

  function getSectionFilters(section) {
    if (section === 'api') {
      return {
        filters: 'path:/client/ OR path:/server/ OR path:/console-api/ OR path:/http-api/ OR path:/sdks/ OR path:/sdk/'
      };
    } else if (section === 'warehouse') {
      return {
        filters: 'path:/statsig-warehouse-native/'
      };
    } else {
      return {
        filters: 'NOT path:/client/ AND NOT path:/server/ AND NOT path:/console-api/ AND NOT path:/http-api/ AND NOT path:/sdks/ AND NOT path:/sdk/ AND NOT path:/statsig-warehouse-native/'
      };
    }
  }

  function applyFiltersToRequest(request, section) {
    if (!request.params) {
      request.params = {};
    }
    
    let params;
    try {
      params = new URLSearchParams(request.params);
    } catch (e) {
      params = new URLSearchParams();
    }
    
    const sectionFilters = getSectionFilters(section);
    
    for (const [key, value] of Object.entries(sectionFilters)) {
      params.set(key, value);
    }
    
    request.params = params.toString();
    
    return request;
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
            data.requests = data.requests.map(request => applyFiltersToRequest(request, section));
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
            data.requests = data.requests.map(request => applyFiltersToRequest(request, section));
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

  function resetCurrentSection() {
    currentSection = null;
    console.log('[Statsig Search] Reset current section');
  }

  // Initialize the search customization
  function initialize() {
    console.log('[Statsig Search] Initializing search customization');
    
    document.addEventListener('click', function(event) {
      if (event.target.closest('.DocSearch-Button')) {
        console.log('[Statsig Search] Search button clicked');
        resetCurrentSection();
        addSectionIndicator(getCurrentSection());
      }
    }, true);
    
    document.addEventListener('keydown', function(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        console.log('[Statsig Search] Keyboard shortcut detected');
        resetCurrentSection();
        addSectionIndicator(getCurrentSection());
      }
    });
    
    window.addEventListener('popstate', resetCurrentSection);
    
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      resetCurrentSection();
      return originalPushState.apply(this, arguments);
    };
    
    console.log('[Statsig Search] Search customization initialized');
  }
  
  // Initialize when the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
