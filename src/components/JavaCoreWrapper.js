import React from 'react';
import styles from '../css/java-core.module.css';

export default function JavaCoreWrapper({ children }) {
  return <div className={styles.javaCore}>{children}</div>;
}
