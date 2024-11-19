import { ColorModeProvider, useColorMode } from '@docusaurus/theme-common/internal';

export default function SCIMRapidoc() {
  return (
    <ColorModeProvider value={{
      isDarkTheme: false,
      setLightTheme: () => {},
      setDarkTheme: () => {},
    }}>
      <SCIMRapidocContent />
    </ColorModeProvider>
  );
}

function SCIMRapidocContent() {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  return (
    <div>
      <div className="padding-bottom--md">
        <p>
          The System for Cross-domain Identity Management (SCIM) specification is designed to make managing 
          user identities in cloud-based applications and services easier. Statsig's SCIM API allows you 
          to automate user provisioning and deprovisioning between your identity provider and Statsig.
        </p>
        <p>
          This API reference provides details for all available SCIM endpoints and operations.
        </p>
      </div>
      <rapi-doc
        theme={isDarkTheme ? "dark" : "light"}
        primary-color={isDarkTheme ? "#2196f3" : "#194b7d"}
        bg-color={isDarkTheme ? "#1b1b1d" : "#ffffff"}
        style={{ height: "100%" }}
        allow-search={false}
        render-style="view"
        layout="column"
        sort-tags={true}
        sort-schemas={true}
        allow-try={true}
        allow-server-selection={false}
        show-info={false}
        spec-url="https://statsigapi.net/api/scim-json"
        server-url="https://statsigapi.net/console/v1"
        show-header={false}
        allow-authentication={true}
        regular-font={[
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ]}
      />
      </div>
  );
}

