import React, { useEffect, useState } from 'react';
import { STORAGE_KEY, URL_PARAM } from '../NavbarItems/WarehouseToggle';

function DocumentationFork({
  cloud,
  warehouse,
}) {
  const [selectedMode, setSelectedMode] = useState('');

  useEffect(() => {
    // Get mode from local storage or url parameter
    let initialMode;
    try {
      initialMode = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error retrieving mode from local storage', error);
    }
    const urlParams = new URLSearchParams(window.location.search);
    const urlMode = urlParams.get(URL_PARAM);
    if (urlMode && ['cloud', 'warehouse'].includes(urlMode)) {
      initialMode = urlMode;
    }

    setSelectedMode(initialMode || 'cloud');

    const targetElement = document.getElementById('warehouseToggle');
    if (targetElement !== null) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const newClassList = mutation.target.classList;
            if (newClassList.contains('cloud')) {
              setSelectedMode('cloud');
            } else if (newClassList.contains('warehouse')) {
              setSelectedMode('warehouse');
            }
          }
        });
      });
    
      observer.observe(targetElement, { attributes: true });
    }
  }, []);

  const getDocumentation = () => {
    if (selectedMode === 'cloud') {
      return cloud;
    }
    return warehouse;
  };

  // TODO @tore use getDocumentation() instead and render only the selected mode
  return (
    <div>
      <h2>Statsig Cloud</h2>
      {cloud}
      <br />
      <h2>Warehouse Native</h2>
      {warehouse}
    </div>
  );
}

export default DocumentationFork;
