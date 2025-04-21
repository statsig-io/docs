(function() {
  function waitForAlgolia() {
    if (window.__DOCUSAURUS && window.__DOCUSAURUS.search && window.__DOCUSAURUS.search.algoliaSearchClient) {
      setupSearchFilters();
    } else {
      setTimeout(waitForAlgolia, 100);
    }
  }

  function setupSearchFilters() {
    const originalSearch = window.__DOCUSAURUS.search.algoliaSearchClient.search;
    
    window.__DOCUSAURUS.search.algoliaSearchClient.search = function(requests) {
      const currentPath = window.location.pathname;
      
      let currentSection = 'docs'; // Default section
      
      if (currentPath.startsWith('/client/') || 
          currentPath.startsWith('/server/') || 
          currentPath.startsWith('/console-api/') ||
          currentPath.startsWith('/http-api')) {
        currentSection = 'api';
      } else if (currentPath.startsWith('/statsig-warehouse-native/')) {
        currentSection = 'warehouse';
      }
      
      requests.forEach(request => {
        if (!request.params) {
          request.params = {};
        }
        
        if (!request.params.facetFilters) {
          request.params.facetFilters = [];
        }
        
        if (!Array.isArray(request.params.facetFilters)) {
          request.params.facetFilters = [request.params.facetFilters];
        }
        
        if (currentSection === 'api') {
          request.params.facetFilters.push([
            'hierarchy.lvl0:Client SDKs',
            'hierarchy.lvl0:Server SDKs',
            'hierarchy.lvl0:Console API',
            'hierarchy.lvl0:HTTP API'
          ]);
        } else if (currentSection === 'warehouse') {
          request.params.facetFilters.push(['hierarchy.lvl0:Warehouse Native']);
        }
        
        console.log('Search request with filters:', request.params.facetFilters);
      });
      
      return originalSearch.call(this, requests);
    };
    
    console.log('Statsig custom search filters initialized');
  }

  document.addEventListener('DOMContentLoaded', waitForAlgolia);
})();
