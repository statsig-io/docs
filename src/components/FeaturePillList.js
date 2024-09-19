import React from 'react';
import Link from '@docusaurus/Link';

const getFeatureIcon = (name) => {
    switch (name) {
        case "Experiments":
            return <img src="/img/icons/icon-experiment.svg" width="16" height="16" />;
        case "Feature Gates":
            return <img src="/img/icons/icon-flag.svg" width="16" height="16" />;
        case "Dynamic Configs":
            return <img src="/img/icons/icon-dynamic-config.svg" width="16" height="16" />;
        case "Layers":
            return <img src="/img/icons/icon-layer.svg" width="16" height="16" />;
        case "Parameter Stores":
            return <img src="/img/icons/icon-parameter-store.svg" width="16" height="16" />;
        case "Event Logging":
            return <img src="/img/icons/icon-analytics.svg" width="16" height="16" />;
        case "Session Replay":
            return <img src="/img/icons/icon-replay.svg" width="16" height="16" />;
        case "Auto Capture":
            return <img src="/img/icons/icon-web.svg" width="16" height="16" />;
        default:
            return null;
    }
}

const FeaturePill = ({ name, link }) => (
    <Link
      to={link}
      className="feature-pill"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 12px',
        margin: '0 4px 4px 0',
        borderRadius: '16px',
        backgroundColor: '#f0f0f0',
        color: '#333',
        textDecoration: 'none',
        fontSize: '14px',
        height: '28px',
      }}
    >
      <span style={{ 
        marginRight: '6px',
        display: 'flex',
        alignItems: 'center',
      }}>{getFeatureIcon(name)}</span>
      <span style={{
        display: 'flex',
        alignItems: 'center',
      }}>{name}</span>
    </Link>
  );
  

export const FeaturePillList = ({ features }) => {
  console.log(features);
  return   <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
    <h2>Supported Features</h2>
    <br />
    <div>
        {features.map((feature, index) => (
        <FeaturePill key={index} {...feature} />
        ))}
    </div>
  </div>;
}
