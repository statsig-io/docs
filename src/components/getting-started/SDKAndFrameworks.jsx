import React from 'react';

const sdkGroups = [
  {
    label: 'Client SDKs',
    value: 'client-sdks',
    items: [
      { name: 'JavaScript', img: '/img/sdk/sdk_js.png', link: '/client/javascript-sdk' },
      { name: 'React', img: '/img/sdk/sdk_react.png', link: '/client/javascript-sdk/react' },
      { name: 'React Native', img: '/img/sdk/sdk_rn.png', link: '/client/javascript-sdk/react-native' },
      { name: 'Next.js', img: '/img/sdk/sdk_nextjs.svg', link: '/client/javascript-sdk/next-js' },
      { name: 'Angular', img: '/img/sdk/sdk_angular.png', link: '/client/javascript-sdk/Angular' },
      { name: 'Swift', img: '/img/sdk/sdk_swift.png', link: '/client/iosClientSDK' },
      { name: 'Android', img: '/img/sdk/sdk_android.png', link: '/client/androidClientSDK' },
      { name: '.NET Client', img: '/img/sdk/sdk_dotnet.png', link: '/client/dotnetSDK' },
      { name: 'Roku', img: '/img/sdk/sdk_roku.png', link: '/client/rokuSDK' },
      { name: 'Unity', img: '/img/sdk/sdk_unity.png', link: '/client/unitySDK' },
      { name: 'Dart/Flutter', img: '/img/sdk/sdk_flutter.svg', link: '/client/dartSDK' },
      { name: 'C++ Client', img: '/img/sdk/sdk_cpp.png', link: '/client/cpp-client-sdk' }
    ]
  },
  {
    label: 'Server Side SDKs',
    value: 'server-sdks',
    items: [
      { name: 'Node', img: '/img/sdk/sdk_node.png', link: '/server-core/node-core' },
      { name: 'Java', img: '/img/sdk/sdk_java.png', link: '/server-core/java-core' },
      { name: 'Python', img: '/img/sdk/sdk_python.png', link: '/server-core/python-core' },
      { name: 'Go', img: '/img/sdk/sdk_golang.png', link: '/server/golangSDK' },
      { name: 'Ruby', img: '/img/sdk/sdk_ruby.png', link: '/server/rubySDK' },
      { name: '.NET Server', img: '/img/sdk/sdk_dotnet.png', link: '/server/dotnetSDK' },
      { name: 'PHP', img: '/img/sdk/sdk_php.svg', link: '/server/phpSDK' },
      { name: 'Rust', img: '/img/sdk/sdk_rust.svg', link: '/server/rustSDK' },
      { name: 'C++ Server', img: '/img/sdk/sdk_cpp.png', link: '/server/cppSDK' }
    ]
  },
  {
    label: 'Integrations',
    value: 'frameworks',
    items: [
      { name: 'Webflow', img: '/img/framework/webflow.svg', link: '/guides/webflow-sidecar-ab-test' },
      { name: 'Shopify', img: '/img/framework/shopify.svg', link: '/guides/shopify-ab-test' },
      { name: 'Segment', img: '/img/framework/segment.svg', link: '/integrations/data-connectors/segment' },
      { name: 'Rudderstack', img: '/img/framework/rudderstack.svg', link: '/integrations/data-connectors/rudderstack' },
      { name: 'Hightouch', img: '/img/framework/hightouch.png', link: '/integrations/data-connectors/hightouch' },
      { name: 'mParticle', img: '/img/framework/mparticle.svg', link: '/integrations/data-connectors/mparticle' },
      { name: 'Framer', img: '/img/framework/framer.svg', link: '/guides/framer-analytics' }
    ]
  }
];

const SDKItem = ({ name, img, link }) => {
  const handleClick = () => {
    window.Statsig.instance().logEvent({
      eventName: 'sdk_click',
      value: name
    });
  };

  return (
    <a href={link} className="sdk-item card" onClick={handleClick}>
      <img src={img} alt={`${name} logo`} className="sdk-icon" />
      <span>{name}</span>
    </a>
  );
};

const SDKAndFrameworks = () => (
  <div>
    {sdkGroups.map((group) => (
      <div key={group.value}>
        <h2>{group.label}</h2>
        <div className="sdk-grid">
          {group.items.map((item) => (
            <SDKItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SDKAndFrameworks;
