import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const sdkGroups = [
  {
    label: 'Client SDKs',
    value: 'client-sdks',
    items: [
      { name: 'JavaScript', img: '/img/sdk/sdk_js.png', link: '/client/javascript-sdk' },
      { name: 'React', img: '/img/sdk/sdk_react.png', link: '/client/javascript-sdk/react' },
      { name: 'React Native', img: '/img/sdk/sdk_rn.png', link: '/client/javascript-sdk/react-native' },
      { name: 'Next.js (App Router)', img: '/img/sdk/sdk_nextjs.svg', link: '/client/javascript-sdk/next-js' },
      { name: 'Next.js (Page Router)', img: '/img/sdk/sdk_nextjs.svg', link: '/client/javascript-sdk/next-js-pages-router' },
      { name: 'Swift', img: '/img/sdk/sdk_swift.png', link: '/client/iosClientSDK' },
      { name: 'Android', img: '/img/sdk/sdk_android.png', link: '/client/androidClientSDK' },
      { name: '.NET', img: '/img/sdk/sdk_dotnet.png', link: '/client/dotnetSDK' },
      { name: 'Roku', img: '/img/sdk/sdk_roku.png', link: '/client/rokuSDK' },
      { name: 'Unity', img: '/img/sdk/sdk_unity.png', link: '/client/unitySDK' },
      { name: 'Dart/Flutter', img: '/img/sdk/sdk_flutter.svg', link: '/client/dartSDK' },
      { name: 'C++', img: '/img/sdk/sdk_cpp.png', link: '/client/cpp-client-sdk' }
    ]
  },
  {
    label: 'Server Side   SDKs',
    value: 'server-sdks',
    items: [
      { name: 'Node.js', img: '/img/sdk/sdk_node.png', link: '/server/nodejsServerSDK' },
      { name: 'Java/Kotlin', img: '/img/sdk/sdk_java.png', link: '/server/javaSdk' },
      { name: 'Python', img: '/img/sdk/sdk_python.png', link: '/server/pythonSDK' },
      { name: 'Go', img: '/img/sdk/sdk_golang.png', link: '/server/golangSDK' },
      { name: 'Ruby', img: '/img/sdk/sdk_ruby.png', link: '/server/rubySDK' },
      { name: '.NET', img: '/img/sdk/sdk_dotnet.png', link: '/server/dotnetSDK' },
      { name: 'PHP', img: '/img/sdk/sdk_php.svg', link: '/server/phpSDK' },
      { name: 'Erlang/Elixir', img: '/img/sdk/sdk_elixir.svg', link: '/server/erlangSDK' },
      { name: 'Rust', img: '/img/sdk/sdk_rust.svg', link: '/server/rustSDK' },
      { name: 'C++', img: '/img/sdk/sdk_cpp.png', link: '/server/cppSDK' }
    ]
  },
  {
    label: 'Framework Integration Guides',
    value: 'frameworks',
    items: [
      { name: 'Webflow', img: '/img/framework/webflow.svg', link: '/guides/webflow-sidecar-ab-test' },
      { name: 'Shopify', img: '/img/framework/shopify.svg', link: '/guides/shopify-ab-test' },
      { name: 'Segment', img: '/img/framework/segment.svg', link: '/integrations/data-connectors/segment' },
      { name: 'Rudderstack', img: '/img/framework/rudderstack.svg', link: '/integrations/data-connectors/rudderstack' },
      { name: 'Hightouch', img: '/img/framework/hightouch.png', link: '/integrations/data-connectors/hightouch' },
      { name: 'mParticle', img: '/img/framework/mparticle.svg', link: '/integrations/data-connectors/mparticle' }
    ]
  }
];

const SDKItem = ({ name, img, link }) => (
  <a href={link} className="sdk-item card">
    <img src={img} alt={`${name} logo`} className="sdk-icon" />
    <span>{name}</span>
  </a>
);

const SDKAndFrameworks = () => (
  <Tabs
    defaultValue="client-sdks"
    values={sdkGroups.map((group) => ({ label: group.label, value: group.value }))}
  >
    {sdkGroups.map((group) => (
      <TabItem key={group.value} value={group.value}>
        <div className="sdk-grid">
          {group.items.map((item) => (
            <SDKItem key={item.name} {...item} />
          ))}
        </div>
      </TabItem>
    ))}
  </Tabs>
);

export default SDKAndFrameworks;
