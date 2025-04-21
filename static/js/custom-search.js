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

  function detectCurrentSection() {
    const path = window.location.pathname;
    log('Current path:', path);
    
    if (path.startsWith('/sdks/') || 
        path.startsWith('/client/') || 
        path.startsWith('/server/') || 
        path.startsWith('/console-api/') ||
        path.startsWith('/http-api') ||
        path.startsWith('/server-core/')) {
      return 'api';
    } else if (path.startsWith('/statsig-warehouse-native/')) {
      return 'warehouse';
    } else {
      return 'docs'; // Default section
    }
  }

  function updateCurrentSection() {
    currentSection = detectCurrentSection();
    log('Section updated:', currentSection);
  }

  // Intercept DocSearch initialization
  function interceptDocSearch() {
    log('Setting up DocSearch interception');
    
    const originalDocSearchFunction = window.docsearch;
    
    if (!originalDocSearchFunction) {
      log('DocSearch not found yet, will try again later');
      setTimeout(interceptDocSearch, 500);
      return;
    }
    
    log('DocSearch found, intercepting');
    
    window.docsearch = function(...args) {
      log('DocSearch called with args:', args[0]);
      
      if (args.length > 0 && typeof args[0] === 'object') {
        const options = args[0];
        
        const originalTransformItems = options.transformItems || (items => items);
        
        options.transformItems = function(items) {
          log('Transforming items, count:', items.length);
          updateCurrentSection();
          
          let filteredItems = items;
          
          if (currentSection === 'api') {
            log('Filtering for API section');
            filteredItems = items.filter(item => {
              const hierarchy = item.hierarchy || {};
              const lvl0 = hierarchy.lvl0 || '';
              return lvl0.includes('Client SDKs') || 
                     lvl0.includes('Server SDKs') || 
                     lvl0.includes('Console API') || 
                     lvl0.includes('HTTP API');
            });
          } else if (currentSection === 'warehouse') {
            log('Filtering for Warehouse Native section');
            filteredItems = items.filter(item => {
              const hierarchy = item.hierarchy || {};
              const lvl0 = hierarchy.lvl0 || '';
              return lvl0.includes('Warehouse Native');
            });
          }
          
          log('Filtered items count:', filteredItems.length);
          return originalTransformItems(filteredItems);
        };
        
        const originalOnStateChange = options.onStateChange;
        options.onStateChange = function(state) {
          updateCurrentSection();
          if (originalOnStateChange) {
            originalOnStateChange(state);
          }
        };
      }
      
      return originalDocSearchFunction.apply(this, args);
    };
    
    log('DocSearch interception complete');
  }

  function initialize() {
    log('Initializing');
    updateCurrentSection();
    interceptDocSearch();
  }
  
  function setupEventListeners() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
    } else {
      initialize();
    }
    
    window.addEventListener('popstate', updateCurrentSection);
    
    document.addEventListener('click', function(e) {
      const target = e.target;
      const isSearchButton = target && 
          (target.classList.contains('DocSearch-Button') || 
           (target.parentElement && target.parentElement.classList.contains('DocSearch-Button')));
      
      if (isSearchButton) {
        log('Search button clicked');
        updateCurrentSection();
        interceptDocSearch();
      }
    });
    
    document.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        log('Search keyboard shortcut detected');
        updateCurrentSection();
        interceptDocSearch();
      }
    });
  }
  
  // Provide a global method to manually trigger initialization
  window.statsigInitSearch = function() {
    log('Manual initialization triggered');
    updateCurrentSection();
    interceptDocSearch();
  };
  
  // Start initialization
  setupEventListeners();
  
  setTimeout(initialize, 500);
  
  log('Script initialization complete');
})();
