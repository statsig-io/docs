import React from 'react';

const Styles = () => (
  <style>
    {`
      .sdk-framework-grid {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .sdk-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: left;
        padding-bottom: 16px;
      }

      .card {
        padding: 16px;
        background-color: var(--ifm-card-background-color, #ffffff);
        border-radius: 8px;
        text-decoration: none;
        box-shadow: var(--ifm-global-shadow-lw);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border: 1px solid var(--ifm-color-emphasis-200);
      }

      .sdk-item {
        flex: 0 1 calc(33.333% - 12px);
        max-width: calc(33.333% - 12px);
        text-align: left;
        display: flex; 
        flex-direction: row;
        align-items: center;
        color: var(--ifm-color-emphasis-900);
      }

      .sdk-icon {
        width: 24px;
        max-height: 24px;
        margin-right: 8px;
      }

      .important-concepts {
        display: flex;
        gap: 16px;
        justify-content: space-around;
        padding-bottom: 16px;
      }

      .concept-card {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        text-align: center;
      }

      .concept-icon {
        width: 64px;
        height: 64px;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow: var(--ifm-global-shadow-md);
      }

      html[data-theme='dark'] .card {
        background-color: var(--ifm-background-color);
        border-color: var(--ifm-color-emphasis-200);
      }

      html[data-theme='dark'] .sdk-item {
        color: var(--ifm-color-white);
      }

      html[data-theme='dark'] .card:hover {
        background-color: var(--ifm-color-emphasis-200);
      }
    `}
  </style>
);

export default Styles;
