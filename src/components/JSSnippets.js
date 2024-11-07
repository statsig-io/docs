import CodeBlock from "@theme/CodeBlock";

function Both() {
  return (
    <CodeBlock language="jsx">
      {`import { StatsigClient, StatsigOptions, StatsigUser } from '@statsig/js-client';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';

const user: StatsigUser = { userID: 'some_user_id' };

const options: StatsigOptions = {
  plugins: [
    new StatsigSessionReplayPlugin(),
    new StatsigAutoCapturePlugin(),
  ],
  { environment: { tier: "production" } } // Optionally set the environment
};

const myStatsigClient = new StatsigClient(YOUR_SDK_KEY, user, options);
await myStatsigClient.initializeAsync();`}
    </CodeBlock>
  );
}

function AutoCaptureOnly() {
  return (
    <CodeBlock language="jsx">
      {`import { StatsigClient, StatsigOptions, StatsigUser } from '@statsig/js-client';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';

const user: StatsigUser = { userID: 'some_user_id' };

const options: StatsigOptions = {
  plugins: [
    new StatsigAutoCapturePlugin(),
  ],
  { environment: { tier: "production" } } // Optionally set the environment
};

const myStatsigClient = new StatsigClient(YOUR_SDK_KEY, user, options);
await myStatsigClient.initializeAsync();`}
    </CodeBlock>
  );
}

function SessionReplayOnly() {
  return (
    <CodeBlock language="jsx">
      {`import { StatsigClient, StatsigOptions, StatsigUser } from '@statsig/js-client';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';

const user: StatsigUser = { userID: 'some_user_id' };

const options: StatsigOptions = {
  plugins: [
    new StatsigSessionReplayPlugin(),
  ],
  { environment: { tier: "production" } } // Optionally set the environment
};

const myStatsigClient = new StatsigClient(YOUR_SDK_KEY, user, options);
await myStatsigClient.initializeAsync();`}
    </CodeBlock>
  );
}

function NoPlugins() {
  return (
    <CodeBlock language="jsx">
      {`import { StatsigClient, StatsigOptions, StatsigUser } from '@statsig/js-client';

const user: StatsigUser = { userID: 'some_user_id' };

const options: StatsigOptions = {
  { environment: { tier: "production" } } // Optionally set the environment
};

const myStatsigClient = new StatsigClient(YOUR_SDK_KEY, user, options);
await myStatsigClient.initializeAsync();`}
    </CodeBlock>
  );
}

export default function JSSnippets({ sessionReplayToggle, autoCaptureToggle }) {
  if (sessionReplayToggle && autoCaptureToggle) {
    return <Both />;
  }

  if (autoCaptureToggle) {
    return <AutoCaptureOnly />;
  }

  if (sessionReplayToggle) {
    return <SessionReplayOnly />;
  }

  return <NoPlugins />;
}
