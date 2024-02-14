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
