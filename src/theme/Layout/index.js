import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@theme-original/Layout';
import FloatingThumbs from '../../components/FloatingThumbs/FloatingThumbs';


export default function CustomLayout(props) {
  const location = useLocation();
  const [pageViews, setPageViews] = useState(null);
  
  // Check for development environment using both methods
  const isNodeEnvDevelopment = process.env.NODE_ENV === 'development';
  const [isLocalHost, setIsLocalHost] = useState(false);
  
  // Check localhost in useEffect since window isn't available during server rendering
  useEffect(() => {
    setIsLocalHost(
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1'
    );
  }, []);
  
  // Consider it development if either condition is true
  const isDevelopment = isNodeEnvDevelopment && isLocalHost;

  useEffect(() => {
    console.log('Page loaded!');
    console.log('NODE_ENV development?', isNodeEnvDevelopment);
    console.log('Is localhost?', isLocalHost);
    console.log('Is development?', isDevelopment);

    // Only fetch page views in development mode
    if (isDevelopment) {
      // Fetch and parse the CSV file
      fetch('/page_views.csv')
        .then(response => response.text())
        .then(csvContent => {
          // Parse CSV content
          const lines = csvContent.split('\n');
          const viewsData = {};
          
          // Skip header row and parse each line
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
              const [views, url] = line.split(',');
              viewsData[url] = parseInt(views, 10);
            }
          }
          
          // Format current URL to match CSV format
          let currentUrl = 'docs.statsig.com' + location.pathname;
          // Remove trailing slash if it exists (except for homepage)
          if (currentUrl !== 'docs.statsig.com/' && currentUrl.endsWith('/')) {
            currentUrl = currentUrl.slice(0, -1);
          }
          
          console.log('Looking for URL:', currentUrl);
          setPageViews(viewsData[currentUrl] || 0);
        })
        .catch(error => {
          console.error('Failed to fetch page views data:', error);
          setPageViews(0);
        });
    }
  }, [location, isDevelopment, isNodeEnvDevelopment, isLocalHost]);

  useLayoutEffect(() => {
    // Wait a small tick to ensure DOM is fully rendered
    setTimeout(() => {
      const hasSidebar = document.querySelector('.theme-doc-sidebar-container');
      if (!hasSidebar) {
        console.log("doesn't have sidebar")
        Statsig.instance().logEvent('NoSidebarPageLoad', window.location.href);
      }
      const docsearchRankingConfig = Statsig.instance().getDynamicConfig('docsearch_ranking_manual');
      const url = window.location.href.replace(/^https?:\/\//, '').replace(/\/+$/, '');
      const docsearchRankingManual = docsearchRankingConfig.get(url, 0);
      document.querySelectorAll('.docsearch-ranking-manual').forEach(el => el.remove());
      const newElement = document.createElement('div');
      newElement.setAttribute('ranking', docsearchRankingManual);
      newElement.classList.add('docsearch-ranking-manual');
      document.body.appendChild(newElement); //We'll consume this in the algolia crawler
    }, 0);
  }, [location]);

  return (
    <>
      {/* Only show debug banner in development mode */}
      {isDevelopment && pageViews !== null && pageViews !== 0 && (
        <div style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
          textAlign: 'center',
          fontWeight: 'bold',
          position: 'sticky',
          top: 0,
          zIndex: 9999,
        }}>
          DEBUG MODE - Current Path: {location.pathname} | 
          Page Views: {pageViews !== null ? pageViews.toLocaleString() : 'Loading...'}
        </div>
      )}
      <Layout {...props} />
      <FloatingThumbs />
    </>
  );
}
