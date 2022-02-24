import React, {useMemo} from 'react';
import OriginalTOCItems from '@theme-original/TOCItems';
import clsx from 'clsx';
import styles from './styles.module.css'; // Using a custom className

/* eslint-disable jsx-a11y/control-has-associated-label */

export default function TOCItems({...props}) {
  return (
    <div>
      <OriginalTOCItems {...props} />
      <div className={clsx(styles.slackUpsell)}>
        <h4>Still Stuck?</h4>
        <p>
          Join our Slack community and chat with our Engineers and 
          Data Scientists
        </p>
        <div style={{textAlign: "center"}}>
          <a href="https://www.statsig.com/slack" className="button">
            <img src="/img/slack.webp" />&nbsp;ASK AN ENGINEER
          </a>
        </div>
      </div>
    </div>
  );
}
