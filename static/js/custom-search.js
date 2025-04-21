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

  function addSectionIndicator() {
    log('Adding section indicator');
    
    const searchForm = document.querySelector('.DocSearch-Form');
    if (!searchForm) {
      log('Search form not found');
      return;
    }
    
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
    
    if (currentSection === 'api') {
      indicator.textContent = 'Searching in: SDKs and APIs';
      indicator.style.backgroundColor = '#e6f7ff';
      indicator.style.color = '#0066cc';
    } else if (currentSection === 'warehouse') {
      indicator.textContent = 'Searching in: Warehouse Native';
      indicator.style.backgroundColor = '#e6ffe6';
      indicator.style.color = '#006600';
    } else {
      indicator.textContent = 'Searching in: All Docs';
      indicator.style.backgroundColor = '#f0f0f0';
      indicator.style.color = '#666666';
    }
    
    log('Section indicator added');
  }

  function patchAlgoliaSearch() {
    log('Setting up Algolia search patch');
    
    const originalFetch = window.fetch;
    
    window.fetch = function(url, options) {
      if (url && typeof url === 'string' && url.includes('algolia.net/1/indexes')) {
        log('Intercepted Algolia API call:', url);
        
        try {
          if (options && options.method === 'POST' && options.body) {
            const body = JSON.parse(options.body);
            log('Original request body:', body);
            
            if (currentSection === 'api') {
              body.facetFilters = [['hierarchy.lvl0:Client SDK', 'hierarchy.lvl0:Server SDK', 'hierarchy.lvl0:Console API', 'hierarchy.lvl0:HTTP API']];
              log('Added API facet filters');
            } else if (currentSection === 'warehouse') {
              body.facetFilters = [['hierarchy.lvl0:Warehouse Native']];
              log('Added Warehouse Native facet filters');
            }
            
            options.body = JSON.stringify(body);
            log('Modified request body:', body);
          }
        } catch (error) {
          log('Error modifying Algolia request:', error);
        }
      }
      
      return originalFetch.apply(this, arguments);
    };
    
    log('Algolia search patch set up');
  }

  function setupSearchModalHandler() {
    log('Setting up search modal handler');
    
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          const searchModal = document.querySelector('.DocSearch-Modal');
          if (searchModal) {
            log('Search modal detected');
            
            addSectionIndicator();
            
            observer.disconnect();
          }
        }
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    log('Search modal handler set up');
  }

  function setupSearchButtonHandler() {
    log('Setting up search button handler');
    
    document.addEventListener('click', (event) => {
      if (event.target.closest('.DocSearch-Button')) {
        log('Search button clicked');
        
        updateCurrentSection();
        
        setupSearchModalHandler();
      }
    }, true);
    
    log('Search button handler set up');
  }

  function setupKeyboardShortcut() {
    log('Setting up keyboard shortcut handler');
    
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        log('Search keyboard shortcut detected');
        
        updateCurrentSection();
        
        setupSearchModalHandler();
      }
    });
    
    log('Keyboard shortcut handler set up');
  }

  function initialize() {
    log('Initializing search customization');
    
    updateCurrentSection();
    
    patchAlgoliaSearch();
    
    setupSearchButtonHandler();
    setupKeyboardShortcut();
    
    window.addEventListener('popstate', () => {
      log('Navigation detected');
      updateCurrentSection();
    });
    
    log('Search customization initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
  log('Search customization script initialized');
})();
