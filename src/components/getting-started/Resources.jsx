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
      icon: <GatesResourceIcon className={styles.resourceIcon} />,
      url: "/feature-flags/working-with",
    },
    {
      resourceText: "Experimentation",
      icon: <ExperimentationResourceIcon className={styles.resourceIcon} />,
      url: "/experiments-plus",
    },
    {
      resourceText: "Product Analytics",
      icon: <ProductAnalyticsResourceIcon className={styles.resourceIcon} />,
      url: "/product-analytics/overview"
    },
    {
      resourceText: "Session Replay",
      icon: <SessionReplayResourceIcon className={styles.resourceIcon} />,
      url: "/session-replay/overview"
    },
    {
      resourceText: "Web Analytics",
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
          icon={item.icon}
          url={item.url}
        />
      ))}
    </div>
  );
}

function ResourceCard({ resourceText, icon, url }) {
  return (
    <a href={url} className={styles.resourceLink}>
      <div className={styles.resourceCard}>
        {icon}
        <span className={styles.resourceText}>{resourceText}</span>
      </div>
    </a>
  );
}

export default LandingResources;
