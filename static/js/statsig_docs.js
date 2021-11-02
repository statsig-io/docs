function wireClickHandlers(tagName) {
  const elements = document.getElementsByTagName(tagName);
  for (let ii = 0; ii < elements.length; ii++) {
    const el = elements[ii];
    el.addEventListener('click', () => {
      statsig.logEvent(
        'link_click', 
        el.pathname, 
        { page : window.location.href, referrer: document && document.referrer }
      );
    });
  }
}

function initStatsig() {
  statsig.initialize(
    'client-oJY6hTJeduhEN2bf6fh6unHvxIk9UsjS99BlO4owh0r', 
    null, 
    { environment: { tier: window.statsigTier }}
  ).then((err) => {
    statsig.logEvent(
      'page_view', 
      window.location.pathname, 
      { page : window.location.href, referrer: document && document.referrer }
    );
  });
}

initStatsig();
window.addEventListener('load', function () {
  wireClickHandlers('a');
});