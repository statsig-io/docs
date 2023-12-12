import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

// TODO - currently over logs for menus with sub links
function wireClickHandlers(tagName) {
  const elements = document.getElementsByTagName(tagName);
  for (let ii = 0; ii < elements.length; ii++) {
    const el = elements[ii];
    el.addEventListener("click", () => {
      window.statsig.logEvent({}, "link_click", el.pathname, {
        page: window.location.href,
        referrer: document && document.referrer,
      });
    });
  }
}

async function measureCDNPerformance() {
  let start = performance.now();
  await fetch(
    "https://api.statsigcdn.com/v1/download_config_specs/client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps.js",
    { cache: "reload" }
  )
    .then(() => {
      const delta = performance.now() - start;
      window.statsig.logEvent({}, "cloudflare_cdn_latency", delta);
    })
    .catch((e) => {
      const delta = performance.now() - start;
      window.statsig.logEvent({}, "cloudflare_cdn_latency", delta, {
        error: e.message,
      });
    });

  start = performance.now();
  await fetch(
    "https://dcs-worker.statsig.workers.dev/v1/download_config_specs/client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps.js",
    { cache: "reload" }
  )
    .then(() => {
      const delta = performance.now() - start;
      window.statsig.logEvent({}, "cloudflare_worker_latency", delta);
    })
    .catch((e) => {
      const delta = performance.now() - start;
      window.statsig.logEvent({}, "cloudflare_worker_latency", delta, {
        error: e.message,
      });
    });
}

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({ location }) {
      if (
        typeof window === "undefined" ||
        typeof window.statsig === "undefined"
      ) {
        return;
      }

      // measure cdn perf
      setTimeout(() => measureCDNPerformance(), 1000);

      try {
        window.statsig.initialize(
          "client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps",
          {
            environment: { tier: window.statsigTier },
            initializeValues: window.statsigConfigSpecs,
          }
        );

        const statsig = window.statsig;
        statsig.getExperiment({}, "a_a_test");

        const layer = statsig.getLayer({}, "master_layer");
        layer.get("title", "code_default");

        window.statsig.logEvent({}, "page_view", window.location.pathname, {
          referrer: document && document.referrer,
        });
      } catch (e) {
        console.error(e);
      }
    },
  };
})();
