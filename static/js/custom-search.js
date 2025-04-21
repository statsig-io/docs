/**
 * Statsig Search Customization
 * 
 * This script customizes the Algolia search functionality in the Statsig docs site
 * to scope search results based on the current navigation section.
 */
(function() {
  const DEBUG = true;
  
  function log(...args) {
    if (DEBUG) {
      console.log('[Statsig Search]', ...args);
    }
  }

  log('Script loaded');

  let currentSection = null;

  function getCurrentSection() {
    const path = window.location.pathname;
    log('Current path:', path);
    
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

  function updateCurrentSection() {
    currentSection = getCurrentSection();
    log('Current section updated:', currentSection);
    return currentSection;
  }

  function addSectionIndicator(section) {
    const searchForm = document.querySelector('.DocSearch-Form');
    if (!searchForm) return;
    
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
  }

  function getFacetFilters(section) {
    if (section === 'api') {
      return [['hierarchy.lvl0:Client SDK', 'hierarchy.lvl0:Server SDK', 'hierarchy.lvl0:Console API', 'hierarchy.lvl0:HTTP API']];
    } else if (section === 'warehouse') {
      return [['hierarchy.lvl0:Warehouse Native']];
    }
    return [];
  }

  function patchAlgoliaSearch() {
    log('Patching Algolia DocSearch');
    
    const checkInterval = setInterval(() => {
      if (window.docsearch) {
        clearInterval(checkInterval);
        log('DocSearch found, patching...');
        
        const originalDocSearch = window.docsearch;
        
        window.docsearch = function(...args) {
          log('DocSearch called with args:', args[0]);
          
          updateCurrentSection();
          
          if (args[0] && args[0].searchParameters) {
            const facetFilters = getFacetFilters(currentSection);
            if (facetFilters.length > 0) {
              args[0].searchParameters.facetFilters = facetFilters;
              log('Added facet filters:', facetFilters);
            }
          }
          
          const instance = originalDocSearch.apply(this, args);
          
          if (instance && instance.autocomplete) {
            const originalAutocomplete = instance.autocomplete;
            
            instance.autocomplete = function(...autocompleteArgs) {
              log('Autocomplete called');
              
              const autocompleteInstance = originalAutocomplete.apply(this, autocompleteArgs);
              
              if (autocompleteInstance && autocompleteInstance.on) {
                autocompleteInstance.on('render', () => {
                  log('Autocomplete render event fired');
                  setTimeout(() => {
                    addSectionIndicator(currentSection);
                  }, 0);
                });
              }
              
              return autocompleteInstance;
            };
          }
          
          return instance;
        };
        
        log('DocSearch patched successfully');
      }
    }, 100);
    
    setTimeout(() => {
      clearInterval(checkInterval);
      log('Gave up waiting for DocSearch');
    }, 10000);
  }

  function initialize() {
    log('Initializing search customization');
    
    updateCurrentSection();
    
    patchAlgoliaSearch();
    
    window.addEventListener('popstate', () => {
      log('Navigation detected, updating search filtering');
      updateCurrentSection();
    });
    
    window.addEventListener('load', () => {
      log('Page loaded, updating current section');
      updateCurrentSection();
    });
    
    // Add CSS for search customization
    const style = document.createElement('style');
    style.textContent = `
      .DocSearch-Hit[data-section="${currentSection}"] {
        border-left: 3px solid #0066cc;
        padding-left: 10px;
      }
      
      .DocSearch-Hit[data-section="${currentSection}"] a {
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);
    
    log('Search customization initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
  log('Search customization script initialized');
})();
