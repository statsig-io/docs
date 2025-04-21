/**
 * Statsig Search Customization
 * 
 * This script customizes the Algolia search functionality in the Statsig docs site
 * to scope search results based on the current navigation section.
 */
(function() {
  
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

  function filterSearchResults(section) {
    console.log('[Statsig Search] Filtering results for section:', section);
    
    const checkForResults = setInterval(() => {
      const hits = document.querySelectorAll('.DocSearch-Hit');
      if (hits.length === 0) return;
      
      console.log('[Statsig Search] Found', hits.length, 'results');
      clearInterval(checkForResults);
      
      let hiddenCount = 0;
      
      hits.forEach(hit => {
        const path = hit.querySelector('.DocSearch-Hit-path');
        if (!path) return;
        
        const pathText = path.textContent || '';
        console.log('[Statsig Search] Result path:', pathText);
        
        let shouldShow = true;
        
        if (section === 'api') {
          shouldShow = pathText.includes('Client SDK') || 
                       pathText.includes('Server SDK') || 
                       pathText.includes('Console API') || 
                       pathText.includes('HTTP API');
        } else if (section === 'warehouse') {
          shouldShow = pathText.includes('Warehouse Native');
        }
        
        console.log('[Statsig Search] Should show:', shouldShow);
        
        if (shouldShow) {
          hit.style.display = '';
        } else {
          hit.style.display = 'none';
          hiddenCount++;
        }
      });
      
      console.log('[Statsig Search] Hidden', hiddenCount, 'results');
      
      if (hiddenCount === hits.length) {
        const resultsContainer = document.querySelector('.DocSearch-Dropdown-Container');
        if (resultsContainer) {
          const noResults = document.createElement('div');
          noResults.className = 'DocSearch-NoResults';
          noResults.innerHTML = '<div class="DocSearch-Screen-Icon"></div><p>No results in current section</p>';
          
          resultsContainer.innerHTML = '';
          resultsContainer.appendChild(noResults);
          
          console.log('[Statsig Search] Added "no results" message');
        }
      }
    }, 100);
  }

  function handleSearch() {
    const section = getCurrentSection();
    console.log('[Statsig Search] Handling search for section:', section);
    
    addSectionIndicator(section);
    
    filterSearchResults(section);
  }

  function setupSearchListeners() {
    console.log('[Statsig Search] Setting up search listeners');
    
    document.addEventListener('click', (event) => {
      if (event.target.closest('.DocSearch-Button')) {
        console.log('[Statsig Search] Search button clicked');
        handleSearch();
      }
    }, true);
    
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        console.log('[Statsig Search] Search keyboard shortcut detected');
        handleSearch();
      }
    });
    
    document.addEventListener('input', (event) => {
      if (event.target.classList.contains('DocSearch-Input')) {
        console.log('[Statsig Search] Search input detected');
        setTimeout(() => {
          filterSearchResults(getCurrentSection());
        }, 300);
      }
    }, true);
    
    document.addEventListener('click', (event) => {
      if (event.target.closest('.DocSearch-Hit-source')) {
        console.log('[Statsig Search] Search result clicked');
        setTimeout(() => {
          filterSearchResults(getCurrentSection());
        }, 100);
      }
    }, true);
  }

  function initialize() {
    console.log('[Statsig Search] Initializing search customization');
    setupSearchListeners();
    
    window.addEventListener('popstate', () => {
      console.log('[Statsig Search] Navigation detected');
      if (document.querySelector('.DocSearch-Modal')) {
        handleSearch();
      }
    });
    
    window.statsigFilterSearch = function() {
      console.log('[Statsig Search] Manual filter trigger');
      handleSearch();
    };
    
    console.log('[Statsig Search] Search customization initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
  console.log('[Statsig Search] Script loaded');
})();
