/**
 * Statsig Search Customization
 * 
 * This script customizes the Algolia search functionality in the Statsig docs site
 * to scope search results based on the current navigation section.
 */
(function() {
  function getCurrentSection() {
    const path = window.location.pathname;
    console.log('[Statsig Search] Current path:', path);
    
    if (path.includes('/sdks/') || 
        path.includes('/client/') || 
        path.includes('/server/') || 
        path.includes('/console-api/') ||
        path.includes('/http-api')) {
      return 'api';
    } else if (path.includes('/statsig-warehouse-native/')) {
      return 'warehouse';
    } else {
      return 'docs';
    }
  }

  function addSectionIndicator(section) {
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
        indicator.textContent = 'Searching in: SDKs and APIs';
        indicator.style.backgroundColor = '#e6f7ff';
        indicator.style.color = '#0066cc';
      } else if (section === 'warehouse') {
        indicator.textContent = 'Searching in: Warehouse Native';
        indicator.style.backgroundColor = '#e6ffe6';
        indicator.style.color = '#006600';
      } else {
        indicator.textContent = 'Searching in: All Docs';
        indicator.style.backgroundColor = '#f0f0f0';
        indicator.style.color = '#666666';
      }
    }, 100);
  }

  function patchAlgoliaSearch() {
    const checkForDocSearch = setInterval(() => {
      if (!window.docsearch) return;
      
      clearInterval(checkForDocSearch);
      console.log('[Statsig Search] Found DocSearch, patching...');
      
      const originalDocSearch = window.docsearch;
      
      window.docsearch = function(...args) {
        const [options] = args;
        
        const newOptions = { ...options };
        
        const originalTransformSearchParams = newOptions.transformSearchParams || (params => params);
        
        newOptions.transformSearchParams = (params) => {
          const section = getCurrentSection();
          console.log('[Statsig Search] Transforming search params for section:', section);
          
          let newParams = originalTransformSearchParams(params);
          
          if (section === 'api') {
            console.log('[Statsig Search] Adding API facet filters');
            newParams.facetFilters = [
              ['tags:client', 'tags:server', 'tags:console-api', 'tags:http-api']
            ];
          } else if (section === 'warehouse') {
            console.log('[Statsig Search] Adding Warehouse facet filters');
            newParams.facetFilters = [
              ['tags:warehouse-native']
            ];
          }
          
          console.log('[Statsig Search] Final search params:', newParams);
          return newParams;
        };
        
        const instance = originalDocSearch(newOptions);
        
        const originalOpen = instance.open;
        
        instance.open = function(...openArgs) {
          console.log('[Statsig Search] DocSearch open called');
          
          addSectionIndicator(getCurrentSection());
          
          return originalOpen.apply(this, openArgs);
        };
        
        return instance;
      };
      
      console.log('[Statsig Search] DocSearch patched successfully');
    }, 100);
  }

  function initialize() {
    console.log('[Statsig Search] Initializing search customization');
    
    patchAlgoliaSearch();
    
    window.addEventListener('popstate', () => {
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
