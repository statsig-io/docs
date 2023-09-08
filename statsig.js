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
      setTimeout(async () => {
        let start = performance.now();
        await fetch(
          'https://latest.api.statsig.com/v1/download_config_specs?k=client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps', {cache: "reload"}
        )
          .then(() => {
            const delta = performance.now() - start;
            window.statsig.logEvent({}, 'cloud_cdn_latency', delta);
          })
          .catch((e) => {
            const delta = performance.now() - start;
            window.statsig.logEvent({}, 'cloud_cdn_latency', delta, {
              error: e.message,
            });
          });
        start = performance.now();
        await fetch(
          'https://cache.statsigcdn.com/v1/download_config_specs?k=client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps', {cache: "reload"}
        )
          .then(() => {
            const delta = performance.now() - start;
            window.statsig.logEvent({}, 'cloudflare_cdn_latency', delta);
          })
          .catch((e) => {
            const delta = performance.now() - start;
            window.statsig.logEvent({}, 'cloudflare_cdn_latency', delta, {
              error: e.message,
            });
          });
        start = performance.now();
        await fetch(
          'https://dcs-worker.statsig.workers.dev/v1/download_config_specs/client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps.js', {cache: "reload"}
        )
          .then(() => {
            const delta = performance.now() - start;
            window.statsig.logEvent({}, 'cloudflare_worker_latency', delta);
          })
          .catch((e) => {
            const delta = performance.now() - start;
            window.statsig.logEvent({}, 'cloudflare_worker_latency', delta, {
              error: e.message,
            });
          });
      }, 1000);

      try {
        // will no-op if already initialized
        window.statsig.initializeAsync("client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps", { environment: { tier: window.statsigTier } }).then(() => {
          window.statsig.getExperiment({}, "a_a_test");
        }).catch(e => {
          console.error(e);
        });
        window.statsig.logEvent({}, "page_view", window.location.pathname, {
          referrer: document && document.referrer,
        });
      } catch (e) {
        console.error(e);
      }
    },
  };
})();
