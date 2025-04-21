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

  function handleSearchOpen() {
    log('Search modal opened');
    
    const section = getCurrentSection();
    log('Current section:', section);
    
    const searchForm = document.querySelector('.DocSearch-Form');
    if (searchForm) {
      let indicator = document.querySelector('#statsig-section-indicator');
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'statsig-section-indicator';
        indicator.style.position = 'absolute';
        indicator.style.right = '50px';
        indicator.style.top = '12px';
        indicator.style.fontSize = '12px';
        indicator.style.color = '#666';
        indicator.style.zIndex = '100';
        searchForm.appendChild(indicator);
      }
      
      if (section === 'api') {
        indicator.textContent = 'Searching in: SDKs and APIs';
      } else if (section === 'warehouse') {
        indicator.textContent = 'Searching in: Warehouse Native';
      } else {
        indicator.textContent = 'Searching in: All Docs';
      }
    }
    
    function filterSearchResults() {
      log('Filtering search results for section:', section);
      
      const hits = document.querySelectorAll('.DocSearch-Hit');
      log('Found', hits.length, 'search results');
      
      if (hits.length === 0) {
        return;
      }
      
      let hiddenCount = 0;
      
      hits.forEach(hit => {
        const path = hit.querySelector('.DocSearch-Hit-path');
        if (!path) return;
        
        const pathText = path.textContent || '';
        let shouldShow = true;
        
        if (section === 'api') {
          shouldShow = pathText.includes('Client SDK') || 
                       pathText.includes('Server SDK') || 
                       pathText.includes('Console API') || 
                       pathText.includes('HTTP API');
        } else if (section === 'warehouse') {
          shouldShow = pathText.includes('Warehouse Native');
        }
        
        if (shouldShow) {
          hit.style.display = '';
        } else {
          hit.style.display = 'none';
          hiddenCount++;
        }
      });
      
      log('Hidden', hiddenCount, 'results that don\'t match current section');
      
      if (hiddenCount === hits.length) {
        const noResults = document.querySelector('.DocSearch-NoResults');
        if (noResults) {
          const heading = noResults.querySelector('p');
          if (heading) {
            heading.textContent = 'No results in current section';
          }
        }
      }
    }
    
    const resultsObserver = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          setTimeout(filterSearchResults, 100);
          break;
        }
      }
    });
    
    const resultsContainer = document.querySelector('.DocSearch-Dropdown-Container');
    if (resultsContainer) {
      resultsObserver.observe(resultsContainer, { childList: true, subtree: true });
      log('Observing search results container');
      
      setTimeout(filterSearchResults, 100);
    }
    
    const searchInput = document.querySelector('.DocSearch-Input');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        setTimeout(filterSearchResults, 300);
      });
      log('Added input listener to search box');
    }
  }

  function setupSearchObservers() {
    log('Setting up search observers');
    
    const bodyObserver = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node.classList && node.classList.contains('DocSearch-Modal')) {
              handleSearchOpen();
              return;
            }
          }
        }
      }
    });
    
    bodyObserver.observe(document.body, { childList: true });
    log('Observing body for search modal');
    
    const searchButton = document.querySelector('.DocSearch-Button');
    if (searchButton) {
      searchButton.addEventListener('click', () => {
        log('Search button clicked');
        setTimeout(handleSearchOpen, 100);
      });
      log('Added click listener to search button');
    }
    
    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        log('Search keyboard shortcut detected');
        setTimeout(handleSearchOpen, 100);
      }
    });
    log('Added keyboard shortcut listener');
  }
  
  function initialize() {
    log('Initializing search customization');
    setupSearchObservers();
    
    window.addEventListener('popstate', () => {
      log('Navigation detected, updating search filtering');
      setTimeout(handleSearchOpen, 100);
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
  window.statsigFilterSearch = handleSearchOpen;
  
  log('Search customization script initialized');
})();
