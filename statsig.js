 import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
 
 export default (function () {
   if (!ExecutionEnvironment.canUseDOM) {
     return null;
   }
 
   return {
     onRouteUpdate({location}) {
       // Always refer to the variable on window in-case it gets overridden elsewhere.
       // window.statsig && window.statsig.logEvent('page_view', window.location.pathname, {referrer: document && document.referrer});
     },
   };
 })();
