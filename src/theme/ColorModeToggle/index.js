import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import IconCloud from '@theme/IconCloud';
import IconWarehouse from '@theme/IconWarehouse';
import styles from './styles.module.css';

function ColorModeToggle({className, value, onChange}) {
  const isBrowser = useIsBrowser();
  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
        )}
        type="button"
        onClick={() => onChange(value === 'warehouse' ? 'cloud' : 'warehouse')}
        disabled={!isBrowser}
        title="Switch between Statsig Cloud and Warehouse Native mode (currently {mode})">
        <IconCloud
          className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
        />
        <IconWarehouse
          className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
        />
      </button>
    </div>
  );
}
export default React.memo(ColorModeToggle);
