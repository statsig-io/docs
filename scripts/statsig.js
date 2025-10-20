(async function initializeStatsig() {
  const STATSIG_CLIENT_KEY =
    "client-Wql5Tkj3Wa3sE8VpFjWpCHCPHxYZMbq6RfcRZZVHFdm";
  const STATSIG_SCRIPT_URL = `https://cdn.jsdelivr.net/npm/@statsig/js-client@3/build/statsig-js-client+session-replay+web-analytics.min.js?`;

  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };
  try {
    await loadScript(STATSIG_SCRIPT_URL);

    const statsigNamespace = window.Statsig;
    if (!statsigNamespace) {
      throw new ReferenceError(
        "Statsig namespace not available on window.Statsig"
      );
    }

    const {
      StatsigClient,
      runStatsigAutoCapture,
      runStatsigSessionReplay,
    } = statsigNamespace;

    if (typeof StatsigClient !== "function") {
      throw new ReferenceError(
        "StatsigClient constructor not found in the Statsig namespace"
      );
    }

    const isDevelopmentMode =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    const environment = isDevelopmentMode ? "development" : "production";
    const client = new StatsigClient(
      STATSIG_CLIENT_KEY,
      {
        environment: { tier: environment },
        custom: { "newDocs": true }
      },
    );

    runStatsigSessionReplay(client);
    runStatsigAutoCapture(client);

    await client.initializeAsync();
  } catch (error) {
    // noop
  }
})();
