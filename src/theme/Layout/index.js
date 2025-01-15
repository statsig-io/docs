import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@theme-original/Layout';

export default function CustomLayout(props) {
  const location = useLocation();

  useEffect(() => {
    console.log('Page loaded!');
  }, [location]);

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

  return <Layout {...props} />;
}