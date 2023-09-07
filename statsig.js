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
