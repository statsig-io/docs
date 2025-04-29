import { Button } from "../ui/button";
import ExperimentationResourceIcon from "../lib/icons/ExperimentationResourceIcon";
import GatesResourceIcon from "../lib/icons/GatesResourceIcon";
import ProductAnalyticsResourceIcon from "../lib/icons/ProductAnalyticsResourceIcon";
import SessionReplayResourceIcon from "../lib/icons/SessionReplayResourceIcon";
import WebAnalyticsResourceIcon from "../lib/icons/WebAnalyticsResourceIcon";
import styles from './ResourceCard.module.css';

export function LandingResources() {
  const data = [
    {
      resourceText: "Feature Flags",
      description: "Test and control feature releases with powerful feature flag management",
      icon: <GatesResourceIcon className={styles.resourceIcon} />,
      url: "/feature-flags/working-with",
    },
    {
      resourceText: "Experimentation",
      description: "Run A/B tests and experiments to optimize your product",
      icon: <ExperimentationResourceIcon className={styles.resourceIcon} />,
      url: "/experiments-plus",
    },
    {
      resourceText: "Product Analytics",
      description: "Track user behavior and product performance with detailed analytics",
      icon: <ProductAnalyticsResourceIcon className={styles.resourceIcon} />,
      url: "/product-analytics/overview"
    },
    {
      resourceText: "Session Replay",
      description: "Watch real user sessions to understand how users interact with your product",
      icon: <SessionReplayResourceIcon className={styles.resourceIcon} />,
      url: "/session-replay/overview"
    },
    {
      resourceText: "Web Analytics",
      description: "Monitor website performance and user engagement metrics",
      icon: <WebAnalyticsResourceIcon className={styles.resourceIcon} />,
      url: "/webanalytics/overview"
    },
  ]

  return (
    <div className={styles.resourceContainer}>
      {data.map((item, index) => (
        <ResourceCard
          key={index}
          resourceText={item.resourceText}
          description={item.description}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </div>
  );
}

function ResourceCard({ resourceText, description, icon, url }) {
  return (
    <div className={styles.resourceLink}>
      <a href={url}>
        <div className={styles.resourceCard}>
          {icon}
          <span className={styles.resourceText}>{resourceText}</span>
        </div>
      </a>
      <p className={styles.resourceDescription}>{description}</p>
    </div>
  );
}

export default LandingResources;
