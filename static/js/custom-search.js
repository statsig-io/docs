/**
 * Statsig Search Customization
 * 
 * This script customizes the Algolia search functionality in the Statsig docs site
 * to scope search results based on the current navigation section.
 */
(function() {
  let originalDocSearchFunction = null;
  let isInitialized = false;

  if (window.docsearch && !originalDocSearchFunction) {
    console.log('[Statsig Search] Storing original docsearch function on script load');
    originalDocSearchFunction = window.docsearch;
  }

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
    
    const checkForSearchForm = setInterval(() => {
      const searchForm = document.querySelector('.DocSearch-Form');
      if (!searchForm) return;
      
      clearInterval(checkForSearchForm);
      
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
  
  function patchAlgoliaSearch() {
    if (!originalDocSearchFunction && window.docsearch) {
      console.log('[Statsig Search] Storing original docsearch function');
      originalDocSearchFunction = window.docsearch;
    }
    
    if (!originalDocSearchFunction) {
      console.log('[Statsig Search] Original docsearch function not found, will try again later');
      return false;
    }
    
    window.docsearch = function(options) {
      console.log('[Statsig Search] Intercepted docsearch call with options:', options);
      
      const section = getCurrentSection();
      console.log('[Statsig Search] Current section:', section);
      
      const newOptions = { ...options };
      
      const originalTransformSearchParams = newOptions.transformSearchParams || (params => params);
      
      newOptions.transformSearchParams = function(params) {
        console.log('[Statsig Search] Original search params:', params);
        
        let newParams = originalTransformSearchParams(params);
        
        if (section === 'api') {
          console.log('[Statsig Search] Adding API section filters');
          
          newParams.restrictSearchableAttributes = ['hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'content'];
          
          newParams.filters = 'hierarchy.lvl0:SDKs\\ \\&\\ APIs OR url:/client/ OR url:/server/ OR url:/console-api/ OR url:/http-api/ OR url:/sdks/ OR url:/sdk/';
        } else if (section === 'warehouse') {
          console.log('[Statsig Search] Adding Warehouse section filters');
          
          newParams.restrictSearchableAttributes = ['hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'content'];
          
          newParams.filters = 'hierarchy.lvl0:Warehouse\\ Native OR url:/statsig-warehouse-native/';
        } else {
          console.log('[Statsig Search] Using default filters (Product Docs)');
          
          newParams.filters = 'NOT hierarchy.lvl0:SDKs\\ \\&\\ APIs AND NOT hierarchy.lvl0:Warehouse\\ Native AND NOT url:/statsig-warehouse-native/ AND NOT url:/client/ AND NOT url:/server/ AND NOT url:/console-api/ AND NOT url:/http-api/ AND NOT url:/sdks/ AND NOT url:/sdk/';
        }
        
        console.log('[Statsig Search] Final search params:', newParams);
        return newParams;
      };
      
      const originalOnOpen = newOptions.onOpen || (() => {});
      
      newOptions.onOpen = function(...args) {
        console.log('[Statsig Search] DocSearch onOpen called');
        
        addSectionIndicator(section);
        
        return originalOnOpen.apply(this, args);
      };
      
      console.log('[Statsig Search] Calling original docsearch with modified options');
      return originalDocSearchFunction(newOptions);
    };
    
    console.log('[Statsig Search] Algolia search patched successfully');
    return true;
  }
  
  // Initialize the search customization
  function initialize() {
    if (isInitialized) {
      console.log('[Statsig Search] Already initialized, skipping');
      return;
    }
    
    console.log('[Statsig Search] Initializing search customization');
    
    if (patchAlgoliaSearch()) {
      isInitialized = true;
    } else {
      console.log('[Statsig Search] DocSearch not available yet, waiting...');
      const checkInterval = setInterval(() => {
        if (window.docsearch) {
          console.log('[Statsig Search] DocSearch now available, patching');
          clearInterval(checkInterval);
          if (patchAlgoliaSearch()) {
            isInitialized = true;
          }
        }
      }, 100);
    }
    
    document.addEventListener('click', function(event) {
      if (event.target.closest('.DocSearch-Button')) {
        console.log('[Statsig Search] Search button clicked');
        
        if (!isInitialized && window.docsearch) {
          console.log('[Statsig Search] Patching docsearch on button click');
          if (patchAlgoliaSearch()) {
            isInitialized = true;
          }
        }
        
        addSectionIndicator(getCurrentSection());
      }
    }, true);
    
    document.addEventListener('keydown', function(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        console.log('[Statsig Search] Keyboard shortcut detected');
        
        if (!isInitialized && window.docsearch) {
          console.log('[Statsig Search] Patching docsearch on keyboard shortcut');
          if (patchAlgoliaSearch()) {
            isInitialized = true;
          }
        }
        
        addSectionIndicator(getCurrentSection());
      }
    });
    
    window.addEventListener('popstate', function() {
      console.log('[Statsig Search] Navigation detected');
    });
    
    console.log('[Statsig Search] Search customization initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
  console.log('[Statsig Search] Script loaded');
})();
