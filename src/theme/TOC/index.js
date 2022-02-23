/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; // Using a custom className
// This prevents TOC highlighting to highlight TOCInline/TOCCollapsible by mistake

const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

function TOC({className, ...props}) {
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
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

export default TOC;
