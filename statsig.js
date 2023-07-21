 import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
 
 // TODO - currently over logs for menus with sub links
 function wireClickHandlers(tagName) {
  const elements = document.getElementsByTagName(tagName);
  for (let ii = 0; ii < elements.length; ii++) {
    const el = elements[ii];
    el.addEventListener('click', () => {
      window.statsig.logEvent(
        'link_click', 
        el.pathname, 
        { page : window.location.href, referrer: document && document.referrer }
      );
    });
  }
}

 export default (function () {
   if (!ExecutionEnvironment.canUseDOM) {
     return null;
   }
 
   return {
     onRouteUpdate({location}) {
      if (typeof window === 'undefined' || typeof window.statsig === 'undefined') {
        return;
      }
      // will no-op if already initialized
      window.statsig.encodeIntializeCall = false; // unsupported on statsig backend until 07/24
      window.statsig.initialize(
        'client-oJY6hTJeduhEN2bf6fh6unHvxIk9UsjS99BlO4owh0r', 
        null, 
        { environment: { tier: window.statsigTier }}
      );
      window.statsig.logEvent('page_view', window.location.pathname, {referrer: document && document.referrer});
     },
   };
 })();
