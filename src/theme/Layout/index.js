import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@theme-original/Layout';
import FloatingThumbs from '../../components/FloatingThumbs/FloatingThumbs';
import { useDoc } from '@docusaurus/theme-common/internal';


export default function CustomLayout(props) {
  const location = useLocation();
  const [pageViews, setPageViews] = useState(null);
  const [pageOwner, setPageOwner] = useState('');
  
  const isNodeEnvDevelopment = process.env.NODE_ENV === 'development';
  const [isLocalHost, setIsLocalHost] = useState(false);
  
  useEffect(() => {
    setIsLocalHost(
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1'
    );
  }, []);
  
  const isDevelopment = isNodeEnvDevelopment && isLocalHost;

  // Extract page owner from meta tags
  useEffect(() => {
    // Add a small delay to ensure meta tags are updated after navigation
    const timeoutId = setTimeout(() => {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        const content = metaKeywords.getAttribute('content');
        if (content) {
          const ownerMatch = content.match(/owner:([^\s,]+)/);
          if (ownerMatch && ownerMatch[1]) {
            setPageOwner(ownerMatch[1]);
          } else {
            setPageOwner('');
          }
        } else {
          setPageOwner('');
        }
      } else {
        setPageOwner('');
      }
    }, 100); // Small delay to ensure DOM is updated

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount or re-run
  }, [location]);

  useEffect(() => {

    if (isDevelopment) {
      fetch('/page_views.csv')
        .then(response => response.text())
        .then(csvContent => {
          const lines = csvContent.split('\n');
          const viewsData = {};
          
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
              const [views, url] = line.split(',');
              viewsData[url] = parseInt(views, 10);
            }
          }
          
          let currentUrl = 'docs.statsig.com' + location.pathname;
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
          Page Views: {pageViews !== null ? pageViews.toLocaleString() : 'Loading...'} |
          Page Owner: {pageOwner || 'Unknown'}
        </div>
      )}
      <Layout {...props} />
      <FloatingThumbs />
    </>
  );
}
