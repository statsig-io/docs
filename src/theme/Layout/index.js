import React, { useEffect, useLayoutEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function CustomLayout(props) {
  useEffect(() => {

    console.log('Page loaded!');
  }, []);
  useLayoutEffect(() => {
    // Wait a small tick to ensure DOM is fully rendered
    setTimeout(() => {
      const hasSidebar = document.querySelector('.theme-doc-sidebar-container');
      if (!hasSidebar) {
        console.log("doesn't have sidebar")
        Statsig.instance().logEvent('NoSidebarPageLoad', window.location.href);
      }
    }, 0);
  }, []);
  return <Layout {...props} />;
}