/**
 * Statsig Search Customization
 * 
 * This script customizes the Algolia search functionality in the Statsig docs site
 * to scope search results based on the current navigation section.
 */
(function() {
  console.log('[Statsig Search] Script loaded');

  let originalDocSearchFunction = null;

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

  function patchDocSearch() {
    const checkInterval = setInterval(() => {
      if (window.__DOCUSAURUS_LUNR_SEARCH_OPTIONS) {
        clearInterval(checkInterval);
        console.log('[Statsig Search] Detected Lunr search, not Algolia');
        return;
      }
      
      if (window.docsearch) {
        clearInterval(checkInterval);
        console.log('[Statsig Search] DocSearch found, patching...');
        
        originalDocSearchFunction = window.docsearch;
        
        window.docsearch = function(options) {
          console.log('[Statsig Search] Custom docsearch called with options:', options);
          
          const section = getCurrentSection();
          console.log('[Statsig Search] Current section:', section);
          
          const newOptions = { ...options };
          
          newOptions.searchParameters = newOptions.searchParameters || {};
          
          if (section === 'api') {
            console.log('[Statsig Search] Setting API section filters');
            newOptions.searchParameters.facetFilters = [
              'docusaurus_tag:default',
              ['lvl0:SDKs & APIs', 'lvl1:Client SDKs', 'lvl1:Server SDKs', 'lvl1:Console API', 'lvl1:HTTP API']
            ];
          } else if (section === 'warehouse') {
            console.log('[Statsig Search] Setting Warehouse section filters');
            newOptions.searchParameters.facetFilters = [
              'docusaurus_tag:default',
              ['lvl0:Warehouse Native']
            ];
          } else {
            console.log('[Statsig Search] Setting Product Docs section filters');
            newOptions.searchParameters.facetFilters = [
              'docusaurus_tag:default',
              'NOT lvl0:SDKs & APIs',
              'NOT lvl0:Warehouse Native'
            ];
          }
          
          const originalInit = newOptions.init || (() => {});
          newOptions.init = function(instance) {
            console.log('[Statsig Search] DocSearch init called');
            
            instance.on('render', () => {
              console.log('[Statsig Search] DocSearch render event');
              addSectionIndicator(section);
            });
            
            return originalInit.call(this, instance);
          };
          
          console.log('[Statsig Search] Calling original docsearch with modified options:', newOptions);
          return originalDocSearchFunction(newOptions);
        };
        
        console.log('[Statsig Search] DocSearch patched successfully');
      }
    }, 100);
  }

  // Initialize the search customization
  function initialize() {
    console.log('[Statsig Search] Initializing search customization');
    
    patchDocSearch();
    
    document.addEventListener('click', function(event) {
      if (event.target.closest('.DocSearch-Button')) {
        console.log('[Statsig Search] Search button clicked');
        
        if (window.docsearch && !originalDocSearchFunction) {
          console.log('[Statsig Search] Late patching of docsearch on button click');
          patchDocSearch();
        }
        
        addSectionIndicator(getCurrentSection());
      }
    }, true);
    
    document.addEventListener('keydown', function(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        console.log('[Statsig Search] Keyboard shortcut detected');
        
        if (window.docsearch && !originalDocSearchFunction) {
          console.log('[Statsig Search] Late patching of docsearch on keyboard shortcut');
          patchDocSearch();
        }
        
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
