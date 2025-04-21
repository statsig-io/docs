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

  let isInitialized = false;
  let isObserverInitialized = false;
  let searchInitialized = false;
  
  function detectCurrentSection() {
    const currentPath = window.location.pathname;
    log('Current path:', currentPath);
    
    if (currentPath.startsWith('/sdks/') || 
        currentPath.startsWith('/client/') || 
        currentPath.startsWith('/server/') || 
        currentPath.startsWith('/console-api/') ||
        currentPath.startsWith('/http-api') ||
        currentPath.startsWith('/server-core/')) {
      return 'api';
    } else if (currentPath.startsWith('/statsig-warehouse-native/')) {
      return 'warehouse';
    } else {
      return 'docs'; // Default section
    }
  }

  function isAlgoliaLoaded() {
    return window.__DOCUSAURUS && 
           window.__DOCUSAURUS.search && 
           window.__DOCUSAURUS.search.algoliaSearchClient;
  }

  function initializeSearchModal() {
    if (isObserverInitialized) {
      return;
    }
    
    log('Setting up search modal observer');
    
    try {
      if (document && document.body) {
        const observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
              for (let i = 0; i < mutation.addedNodes.length; i++) {
                const node = mutation.addedNodes[i];
                if (node.classList && 
                    (node.classList.contains('DocSearch-Modal') || 
                     node.classList.contains('DocSearch-Container'))) {
                  log('Search modal detected in DOM');
                  initializeSearch();
                  break;
                }
              }
            }
          });
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
        isObserverInitialized = true;
        log('Search modal observer initialized');
      } else {
        log('Document body not available for observer');
      }
    } catch (error) {
      log('Error setting up search modal observer:', error);
    }
  }

  function setupSearchFilters() {
    if (!isAlgoliaLoaded()) {
      log('Algolia not loaded yet, cannot setup filters');
      return false;
    }
    
    if (isInitialized) {
      log('Search filters already initialized');
      return true;
    }
    
    log('Setting up search filters');
    
    try {
      const originalSearch = window.__DOCUSAURUS.search.algoliaSearchClient.search;
      
      window.__DOCUSAURUS.search.algoliaSearchClient.search = function(requests) {
        try {
          const currentSection = detectCurrentSection();
          log('Detected section:', currentSection);
          
          requests.forEach(request => {
            log('Original request params:', request.params);
            
            if (!request.params) {
              request.params = {};
            }
            
            if (!request.params.facetFilters) {
              request.params.facetFilters = [];
            }
            
            if (!Array.isArray(request.params.facetFilters)) {
              request.params.facetFilters = [request.params.facetFilters];
            }
            
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
            
            if (currentSection === 'api') {
              filteredFacets.push([
                'hierarchy.lvl0:Client SDKs',
                'hierarchy.lvl0:Server SDKs',
                'hierarchy.lvl0:Console API',
                'hierarchy.lvl0:HTTP API'
              ]);
              log('Applied API section filters');
            } else if (currentSection === 'warehouse') {
              filteredFacets.push(['hierarchy.lvl0:Warehouse Native']);
              log('Applied Warehouse Native section filters');
            } else {
              log('Using default docs section (no filters applied)');
            }
            
            request.params.facetFilters = filteredFacets;
            log('Final facetFilters:', JSON.stringify(request.params.facetFilters));
          });
          
          log('Sending search request to Algolia');
          return originalSearch.call(this, requests);
        } catch (error) {
          log('Error in search override:', error);
          return originalSearch.call(this, requests);
        }
      };
      
      isInitialized = true;
      log('Search filters initialized successfully');
      return true;
    } catch (error) {
      log('Error setting up search filters:', error);
      return false;
    }
  }

  function initializeSearch() {
    if (searchInitialized) {
      return;
    }
    
    log('Initializing search customization');
    
    if (setupSearchFilters()) {
      searchInitialized = true;
      log('Search customization initialized successfully');
      return;
    }
    
    let attempts = 0;
    const maxAttempts = 20;
    const pollInterval = 250; // ms
    
    function pollForAlgolia() {
      attempts++;
      log(`Polling for Algolia (attempt ${attempts}/${maxAttempts})`);
      
      if (isAlgoliaLoaded()) {
        setupSearchFilters();
        searchInitialized = true;
        log('Algolia found and search customization initialized');
      } else if (attempts < maxAttempts) {
        setTimeout(pollForAlgolia, pollInterval);
      } else {
        log('Max polling attempts reached, will try again when search is used');
      }
    }
    
    pollForAlgolia();
  }

  function setupEventListeners() {
    log('Setting up event listeners');
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        log('DOMContentLoaded fired');
        initializeSearch();
        initializeSearchModal();
      });
    } else {
      log('Document already loaded');
      initializeSearch();
      initializeSearchModal();
    }
    
    document.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        log('Search keyboard shortcut detected');
        initializeSearch();
      }
    });
    
    window.addEventListener('popstate', function() {
      log('Navigation detected');
      initializeSearch();
    });
    
    document.addEventListener('click', function(e) {
      const target = e.target;
      const isSearchButton = target && 
          (target.classList.contains('DocSearch') || 
           target.classList.contains('DocSearch-Button') ||
           (target.parentElement && 
            (target.parentElement.classList.contains('DocSearch') || 
             target.parentElement.classList.contains('DocSearch-Button'))));
      
      if (isSearchButton) {
        log('Search element clicked');
        initializeSearch();
      }
    });
    
    log('Event listeners initialized');
  }

  // Provide a global method to manually trigger initialization
  window.statsigInitSearch = function() {
    log('Manual initialization triggered');
    isInitialized = false;
    searchInitialized = false;
    initializeSearch();
  };
  
  // Start initialization
  setupEventListeners();
  
  setTimeout(initializeSearch, 1000);
  
  log('Script initialization complete');
})();
