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
    
    function patchAlgoliaDocSearch() {
      console.log('[Statsig Search] Looking for DocSearch initialization');
      
      const searchButton = document.querySelector('.DocSearch-Button');
      if (!searchButton) {
        console.log('[Statsig Search] Search button not found, will try again later');
        setTimeout(patchAlgoliaDocSearch, 1000);
        return;
      }
      
      console.log('[Statsig Search] Search button found, patching DocSearch');
      
      const originalClickHandler = searchButton.onclick;
      
      searchButton.onclick = function(event) {
        console.log('[Statsig Search] Search button clicked, intercepting');
        
        const section = getCurrentSection();
        console.log('[Statsig Search] Current section:', section);
        
        addSectionIndicator(section);
        
        if (window.docsearch) {
          console.log('[Statsig Search] Found DocSearch, patching');
          
          const originalDocSearch = window.docsearch;
          
          window.docsearch = function(options) {
            console.log('[Statsig Search] DocSearch called with options:', options);
            
            const newOptions = { ...options };
            
            const originalTransformSearchParams = newOptions.transformSearchParams || (params => params);
            
            newOptions.transformSearchParams = function(params) {
              console.log('[Statsig Search] Transforming search params:', params);
              
              let newParams = originalTransformSearchParams(params);
              
              if (section === 'api') {
                console.log('[Statsig Search] Adding API facet filters');
                newParams.facetFilters = [
                  ['docusaurus_tag:default'],
                  ['tags:client', 'tags:server', 'tags:console-api', 'tags:http-api']
                ];
              } else if (section === 'warehouse') {
                console.log('[Statsig Search] Adding Warehouse facet filters');
                newParams.facetFilters = [
                  ['docusaurus_tag:default'],
                  ['tags:warehouse-native']
                ];
              }
              
              console.log('[Statsig Search] Final search params:', newParams);
              return newParams;
            };
            
            return originalDocSearch(newOptions);
          };
          
          console.log('[Statsig Search] DocSearch patched successfully');
        }
        
        if (originalClickHandler) {
          originalClickHandler.call(this, event);
        }
      };
      
      document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
          console.log('[Statsig Search] Keyboard shortcut detected');
          
          const section = getCurrentSection();
          console.log('[Statsig Search] Current section:', section);
          
          addSectionIndicator(section);
          
        }
      });
      
      console.log('[Statsig Search] Search button patched successfully');
    }
    
    patchAlgoliaDocSearch();
    
    window.addEventListener('popstate', function() {
      console.log('[Statsig Search] Navigation detected');
      
    });
    
    console.log('[Statsig Search] Search customization initialized');
  });
  
  console.log('[Statsig Search] Script loaded');
})();
