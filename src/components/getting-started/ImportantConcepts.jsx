import React from 'react';

const concepts = [
  { name: 'Statsig Warehouse Native vs. Cloud', icon: '/img/icons/icon-warehouse.svg', link: 'https://www.statsig.com/blog/deciding-cloud-hosted-versus-warehouse-native-experimentation-platforms' },
  { name: 'The Statsig Platform & Architecture', icon: '/img/icons/icon-how-statsig-works.svg', link: '/understanding-platform' },
  { name: 'Our World-Class Support', icon: '/img/icons/icon-support.svg', link: 'https://statsig.com/slack' }
];

const ImportantConcepts = () => (
  <div className="important-concepts">
    {concepts.map((concept) => (
      <a key={concept.name} href={concept.link} className="concept-card card">
        <img src={concept.icon} alt={`${concept.name} icon`} className="concept-icon" />
        <h3>{concept.name}</h3>
      </a>
    ))}
  </div>
);

export default ImportantConcepts;