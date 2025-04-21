(function() {
  const DEBUG = true;
  
  function log(...args) {
    if (DEBUG) {
      console.log('[Statsig Search]', ...args);
    }
  }

  log('Script loaded');

  let isInitialized = false;

  function waitForAlgolia() {
    log('Checking for Algolia...');
    
    if (window.__DOCUSAURUS && 
        window.__DOCUSAURUS.search && 
        window.__DOCUSAURUS.search.algoliaSearchClient) {
      
      log('Algolia found!');
      
      if (!isInitialized) {
        setupSearchFilters();
        isInitialized = true;
      } else {
        log('Already initialized, skipping setup');
      }
    } else {
      log('Algolia not found yet, retrying in 100ms');
      setTimeout(waitForAlgolia, 100);
    }
  }

  function setupSearchFilters() {
    log('Setting up search filters');
    
    try {
      const originalSearch = window.__DOCUSAURUS.search.algoliaSearchClient.search;
      
      window.__DOCUSAURUS.search.algoliaSearchClient.search = function(requests) {
        try {
          const currentPath = window.location.pathname;
          
          let currentSection = 'docs'; // Default section
          
          log('Current path:', currentPath);
          
          if (currentPath.startsWith('/sdks/') || 
              currentPath.startsWith('/client/') || 
              currentPath.startsWith('/server/') || 
              currentPath.startsWith('/console-api/') ||
              currentPath.startsWith('/http-api') ||
              currentPath.startsWith('/server-core/')) {
            currentSection = 'api';
          } else if (currentPath.startsWith('/statsig-warehouse-native/')) {
            currentSection = 'warehouse';
          }
          
          log('Detected section:', currentSection);
          
          requests.forEach(request => {
            log('Original request:', JSON.stringify(request));
            
            if (!request.params) {
              request.params = {};
            }
            
            if (!request.params.facetFilters) {
              request.params.facetFilters = [];
            }
            
            if (!Array.isArray(request.params.facetFilters)) {
              request.params.facetFilters = [request.params.facetFilters];
            }
            
            log('Original facetFilters:', JSON.stringify(request.params.facetFilters));
            
            const filteredFacets = [];
            for (const filter of request.params.facetFilters) {
              if (Array.isArray(filter)) {
                if (!filter.some(f => f.startsWith('hierarchy.lvl0:'))) {
                  filteredFacets.push(filter);
                }
              } else {
                if (!filter.startsWith('hierarchy.lvl0:')) {
                  filteredFacets.push(filter);
                }
              }
            }
            
            request.params.facetFilters = filteredFacets;
            log('Filtered facetFilters:', JSON.stringify(request.params.facetFilters));
            
            if (currentSection === 'api') {
              request.params.facetFilters.push([
                'hierarchy.lvl0:Client SDKs',
                'hierarchy.lvl0:Server SDKs',
                'hierarchy.lvl0:Console API',
                'hierarchy.lvl0:HTTP API'
              ]);
              log('Applied API section filters');
            } else if (currentSection === 'warehouse') {
              request.params.facetFilters.push(['hierarchy.lvl0:Warehouse Native']);
              log('Applied Warehouse Native section filters');
            } else {
              log('Using default docs section (no filters applied)');
            }
            
            log('Final facetFilters:', JSON.stringify(request.params.facetFilters));
          });
          
          log('Sending search request to Algolia');
          return originalSearch.call(this, requests);
        } catch (error) {
          log('Error in search override:', error);
          return originalSearch.call(this, requests);
        }
      };
      
      log('Search filters initialized successfully');
    } catch (error) {
      log('Error setting up search filters:', error);
    }
  }

  
  log('Adding DOMContentLoaded listener');
  document.addEventListener('DOMContentLoaded', function() {
    log('DOMContentLoaded fired');
    waitForAlgolia();
  });
  
  log('Adding keydown listener');
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      log('Search keyboard shortcut detected');
      setTimeout(waitForAlgolia, 100);
    }
  });
  
  log('Adding popstate listener');
  window.addEventListener('popstate', function() {
    log('Navigation detected');
    setTimeout(waitForAlgolia, 100);
  });
  
  log('Adding click listener');
  document.addEventListener('click', function(e) {
    const target = e.target;
    if (target && 
        (target.classList.contains('DocSearch') || 
         target.classList.contains('DocSearch-Button') ||
         (target.parentElement && 
          (target.parentElement.classList.contains('DocSearch') || 
           target.parentElement.classList.contains('DocSearch-Button'))))) {
      log('Search element clicked');
      setTimeout(waitForAlgolia, 100);
    }
  });
  
  log('Adding mutation observer');
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const node = mutation.addedNodes[i];
          if (node.classList && 
              (node.classList.contains('DocSearch-Modal') || 
               node.classList.contains('DocSearch-Container'))) {
            log('Search modal detected in DOM');
            setTimeout(waitForAlgolia, 100);
            break;
          }
        }
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  log('Initializing immediately');
  waitForAlgolia();
  
  setTimeout(waitForAlgolia, 1000);
  
  window.statsigInitSearch = function() {
    log('Manual initialization triggered');
    isInitialized = false; // Reset to force reinitialization
    waitForAlgolia();
  };
  
  log('Script initialization complete');
})();
