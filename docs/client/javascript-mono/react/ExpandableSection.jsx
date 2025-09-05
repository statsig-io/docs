import React, { useState } from 'react';

const ExpandableSection = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div style={{ margin: '16px 0' }}>
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '4px 0',
          userSelect: 'none'
        }}
      >
        <span 
          style={{
            marginRight: '8px',
            fontSize: '12px',
            transition: 'transform 0.2s ease',
            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
            color: 'inherit'
          }}
        >
          ❯
        </span>
        <span style={{ 
          fontWeight: '600',
          color: 'inherit',
          fontSize: 'inherit'
        }}>
          {title}
        </span>
      </div>
      
      {isExpanded && (
        <div style={{ 
          marginLeft: '0px',
          marginTop: '4px'
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;
