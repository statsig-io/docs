/**
 * Statsig Search Customization
 * 
 * This script customizes the Algolia search functionality in the Statsig docs site
 * to scope search results based on the current navigation section.
 */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('[Statsig Search] Document loaded, initializing search customization');
    
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
        
        console.log('[Statsig Search] Section indicator added');
      }, 100);
    }
    
    function patchAlgoliaSearch() {
      if (!window.originalDocSearchFunction && window.docsearch) {
        console.log('[Statsig Search] Storing original docsearch function');
        window.originalDocSearchFunction = window.docsearch;
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
            console.log('[Statsig Search] Adding API facet filters');
            newParams.facetFilters = [
              'docusaurus_tag:default',
              'hierarchy.lvl0:SDKs\\ and\\ APIs'
            ];
          } else if (section === 'warehouse') {
            console.log('[Statsig Search] Adding Warehouse facet filters');
            newParams.facetFilters = [
              'docusaurus_tag:default',
              'hierarchy.lvl0:Warehouse\\ Native'
            ];
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
        return window.originalDocSearchFunction(newOptions);
      };
      
      console.log('[Statsig Search] Algolia search patched successfully');
    }
    
    function initialize() {
      console.log('[Statsig Search] Initializing search customization');
      
      if (window.docsearch) {
        console.log('[Statsig Search] DocSearch already available, patching immediately');
        patchAlgoliaSearch();
      } else {
        console.log('[Statsig Search] DocSearch not available yet, waiting...');
        const checkInterval = setInterval(() => {
          if (window.docsearch) {
            console.log('[Statsig Search] DocSearch now available, patching');
            clearInterval(checkInterval);
            patchAlgoliaSearch();
          }
        }, 100);
      }
      
      document.addEventListener('click', function(event) {
        if (event.target.closest('.DocSearch-Button')) {
          console.log('[Statsig Search] Search button clicked');
          
          if (window.docsearch && !window.originalDocSearchFunction) {
            console.log('[Statsig Search] Patching docsearch on button click');
            patchAlgoliaSearch();
          }
          
          addSectionIndicator(getCurrentSection());
        }
      }, true);
      
      document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
          console.log('[Statsig Search] Keyboard shortcut detected');
          
          if (window.docsearch && !window.originalDocSearchFunction) {
            console.log('[Statsig Search] Patching docsearch on keyboard shortcut');
            patchAlgoliaSearch();
          }
          
          addSectionIndicator(getCurrentSection());
        }
      });
      
      window.addEventListener('popstate', function() {
        console.log('[Statsig Search] Navigation detected');
        
      });
      
      console.log('[Statsig Search] Search customization initialized');
    }
    
    initialize();
  });
  
  console.log('[Statsig Search] Script loaded');
})();
