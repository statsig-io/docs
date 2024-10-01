import { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function JSSnippets() {
    const [sessionReplayToggle, setSessionReplayToggle] = useState(true);
    const [autoCaptureToggle, setAutoCaptureToggle] = useState(true);

    return (
      <>
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={sessionReplayToggle}
              onChange={(e) => setSessionReplayToggle(e.target.checked)}
            /> Include Session Replay
          </label>
          <br />
          <label>
            <input 
              type="checkbox" 
              checked={autoCaptureToggle}
              onChange={(e) => setAutoCaptureToggle(e.target.checked)}
            /> Include Auto Capture
          </label>
        </div>
        <br />
        {!sessionReplayToggle && !autoCaptureToggle && (
          <CodeBlock language="jsx">
            {`
import { StatsigClient } from '@statsig/js-client';

const client = new StatsigClient(sdkKey,
{ userID: "some_user_id" },
{ environment: { tier: "production" } } // optional
);

await client.initializeAsync();
            `}
          </CodeBlock>
        )}

        {sessionReplayToggle && !autoCaptureToggle && (
          <CodeBlock language="jsx">
            {`
import { StatsigClient } from '@statsig/js-client';
import { runStatsigSessionReplay } from '@statsig/session-replay';

const client = new StatsigClient(sdkKey,
{ userID: "some_user_id" },
{ environment: { tier: "production" } } // optional
);

runStatsigSessionReplay(client);

await client.initializeAsync();
            `}
          </CodeBlock>
        )}

        {!sessionReplayToggle && autoCaptureToggle && (
          <CodeBlock language="jsx">
            {`
import { StatsigClient } from '@statsig/js-client';
import { runStatsigAutoCapture } from '@statsig/web-analytics';

const client = new StatsigClient(sdkKey,
{ userID: "some_user_id" },
{ environment: { tier: "production" } } // optional
);

runStatsigAutoCapture(client);

await client.initializeAsync();
            `}
          </CodeBlock>
        )}

        {sessionReplayToggle && autoCaptureToggle && (
          <CodeBlock language="jsx">
            {`
import { StatsigClient } from '@statsig/js-client';
import { runStatsigSessionReplay } from '@statsig/session-replay';
import { runStatsigAutoCapture } from '@statsig/web-analytics';

const client = new StatsigClient(sdkKey,
{ userID: "some_user_id" },
{ environment: { tier: "production" } } // optional
);

runStatsigSessionReplay(client);
runStatsigAutoCapture(client);

await client.initializeAsync();
            `}
          </CodeBlock>
        )}
      </>
    );
  };