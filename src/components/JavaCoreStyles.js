import React from 'react';
import styles from '../css/java-core.module.css';

export function StyledHeading({ children, level = 2 }) {
  const Tag = `h${level}`;
  return <Tag className={styles.sectionHeading}>{children}</Tag>;
}

export function CodeBlock({ children }) {
  return <div className={styles.codeBlock}>{children}</div>;
}

export function InstallStep({ children }) {
  return <div className={styles.installStep}>{children}</div>;
}

export function RequirementsList({ children }) {
  return <div className={styles.requirementsList}>{children}</div>;
}

export function InstallTabs({ children }) {
  return <div className={styles.installTabs}>{children}</div>;
}

export function MethodDescription({ children }) {
  return <div className={styles.methodDescription}>{children}</div>;
}

export function Parameter({ children }) {
  return <span className={styles.parameter}>{children}</span>;
}

export function CodeOutput({ children }) {
  return <div className={styles.codeOutput}>{children}</div>;
}

export function ImportantNote({ children }) {
  return <div className={styles.importantNote}>{children}</div>;
}

export function ApiTable({ children }) {
  return <table className={styles.apiTable}>{children}</table>;
}

export function InlineCode({ children }) {
  return <code className={styles.inlineCode}>{children}</code>;
}
