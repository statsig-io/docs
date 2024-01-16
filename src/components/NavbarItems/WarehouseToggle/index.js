import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import IconCloud from '../../IconCloud';
import IconWarehouse from '../../IconWarehouse';
import styles from './styles.module.css';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';

export const STORAGE_KEY = 'statsig_warehouse';
export const URL_PARAM = 'sw';

function WarehouseToggle({ className }) {
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

    // Set initial state
    setSelectedMode(initialMode || 'cloud');
  }, []);

  const handleToggleClick = () => {
    const newMode = selectedMode === 'warehouse' ? 'cloud' : 'warehouse';
    setSelectedMode(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  };

  const cloudFill = {
    innerFill: selectedMode === 'cloud' ? "#CCFBC7" : "none"
  };
  const warehouseFill = {
    innerFill: selectedMode === 'warehouse' ? "#CCFBC7" : "none"
  };

  return (
    <div>
      <ToggleButtonGroup
        value={selectedMode}
        exclusive
        onChange={handleToggleClick}
        size='small'
      >
        <ToggleButton value="cloud" aria-label="list">
          <Tooltip title="Statsig Cloud" placement="bottom">
            <div style={{height: "32px"}}>
              <IconCloud className={clsx(styles.activeIcon)} {...cloudFill} />
            </div>
          </Tooltip>
        </ToggleButton>
        <ToggleButton value="warehouse" aria-label="module">
          <Tooltip title="Statsig Warehouse Native" placement="bottom">
            <div style={{height: "32px"}}>
              <IconWarehouse className={clsx(styles.activeIcon)} {...warehouseFill} />
            </div>
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
  
}

export default React.memo(WarehouseToggle);
