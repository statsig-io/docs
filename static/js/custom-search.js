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

  function filterSearchResults() {
    log('Filtering search results for section:', currentSection);
    
    const checkResults = setInterval(() => {
      const hits = document.querySelectorAll('.DocSearch-Hit');
      if (hits.length > 0) {
        clearInterval(checkResults);
        log('Found', hits.length, 'search results');
        
        let hiddenCount = 0;
        
        hits.forEach(hit => {
          const path = hit.querySelector('.DocSearch-Hit-path');
          if (!path) return;
          
          const pathText = path.textContent || '';
          let shouldShow = true;
          
          if (currentSection === 'api') {
            shouldShow = pathText.includes('Client SDK') || 
                         pathText.includes('Server SDK') || 
                         pathText.includes('Console API') || 
                         pathText.includes('HTTP API');
          } else if (currentSection === 'warehouse') {
            shouldShow = pathText.includes('Warehouse Native');
          }
          
          if (shouldShow) {
            hit.style.display = '';
            hit.dataset.relevantForSection = 'true';
          } else {
            hit.style.display = 'none';
            hiddenCount++;
          }
        });
        
        log('Hidden', hiddenCount, 'results that don\'t match current section');
        
        if (hiddenCount === hits.length) {
          const resultsContainer = document.querySelector('.DocSearch-Dropdown-Container');
          if (resultsContainer) {
            const noResults = document.createElement('div');
            noResults.className = 'DocSearch-NoResults';
            noResults.innerHTML = '<div class="DocSearch-Screen-Icon"></div><p>No results in current section</p>';
            
            resultsContainer.innerHTML = '';
            resultsContainer.appendChild(noResults);
          }
        }
      }
    }, 100);
    
    setTimeout(() => {
      clearInterval(checkResults);
    }, 3000);
  }

  function setupSearchObserver() {
    log('Setting up search observer');
    
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          const searchModal = document.querySelector('.DocSearch-Modal');
          if (searchModal) {
            addSectionIndicator(currentSection);
            
            filterSearchResults();
            
            const resultsContainer = document.querySelector('.DocSearch-Dropdown-Container');
            if (resultsContainer) {
              const resultsObserver = new MutationObserver(() => {
                filterSearchResults();
              });
              
              resultsObserver.observe(resultsContainer, { childList: true, subtree: true });
            }
          }
        }
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    log('Search observer set up');
  }

  function setupSearchInputHandler() {
    log('Setting up search input handler');
    
    document.addEventListener('input', (event) => {
      if (event.target.classList.contains('DocSearch-Input')) {
        log('Search input detected');
        
        setTimeout(() => {
          filterSearchResults();
        }, 100);
      }
    }, true);
    
    log('Search input handler set up');
  }

  function setupKeyboardShortcut() {
    log('Setting up keyboard shortcut handler');
    
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        log('Search keyboard shortcut detected');
        
        updateCurrentSection();
        
        setTimeout(() => {
          addSectionIndicator(currentSection);
        }, 100);
      }
    });
    
    log('Keyboard shortcut handler set up');
  }

  function setupSearchButtonHandler() {
    log('Setting up search button handler');
    
    document.addEventListener('click', (event) => {
      if (event.target.closest('.DocSearch-Button')) {
        log('Search button clicked');
        
        updateCurrentSection();
        
        setTimeout(() => {
          addSectionIndicator(currentSection);
        }, 100);
      }
    }, true);
    
    log('Search button handler set up');
  }

  function initialize() {
    log('Initializing search customization');
    
    updateCurrentSection();
    
    setupSearchObserver();
    setupSearchInputHandler();
    setupKeyboardShortcut();
    setupSearchButtonHandler();
    
    window.addEventListener('popstate', () => {
      log('Navigation detected, updating search filtering');
      updateCurrentSection();
    });
    
    window.addEventListener('load', () => {
      log('Page loaded, updating current section');
      updateCurrentSection();
    });
    
    window.statsigFilterSearch = () => {
      log('Manual filter trigger');
      updateCurrentSection();
      filterSearchResults();
    };
    
    log('Search customization initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
  log('Search customization script initialized');
})();
