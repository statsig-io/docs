import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import IconCloud from '../../IconCloud';
import IconWarehouse from '../../IconWarehouse';
import styles from './styles.module.css';

export const STORAGE_KEY = 'statsig_warehouse';
export const URL_PARAM = 'sw';

function WarehouseToggle({ className }) {
  const [selectedMode, setSelectedMode] = useState('');
  const isBrowser = useIsBrowser();

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

    // Set initial state
    setSelectedMode(initialMode || 'cloud');
  }, []);

  const handleToggleClick = () => {
    const newMode = selectedMode === 'warehouse' ? 'cloud' : 'warehouse';
    setSelectedMode(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  };

  const getActiveIcon = () => {
    if (selectedMode === 'cloud') {
      return <IconCloud className={clsx(styles.activeIcon)} fill="#194B7D" />;
    }
    return <IconWarehouse className={clsx(styles.activeIcon)} fill="#194B7D" />;
  };

  return (
    <div className={clsx(styles.toggle, className)} id="warehouseToggle">
      <IconCloud
        className={clsx(styles.icon, 'cloud', selectedMode === 'cloud' && styles.activeIcon)}
        onClick={handleToggleClick}
        innerFill={selectedMode === 'cloud' ? "#CCFBC7" : '#E0E0E0'}
        />
      <IconWarehouse
        className={clsx(styles.icon, 'warehouse', selectedMode === 'warehouse' && styles.activeIcon)}
        onClick={handleToggleClick}
        innerFill={selectedMode === 'warehouse' ? "#CCFBC7" : '#E0E0E0'}
        />
    </div>
  );
  
}

export default React.memo(WarehouseToggle);
