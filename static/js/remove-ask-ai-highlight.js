(function() {
  function removeDefaultSelection() {
    const kapaContainer = document.getElementById('kapa-widget-container');
    if (kapaContainer && kapaContainer.shadowRoot) {
      const shadowRoot = kapaContainer.shadowRoot;
      
      const existingStyle = shadowRoot.getElementById('remove-default-selection-style');
      if (!existingStyle) {
        const style = document.createElement('style');
        style.id = 'remove-default-selection-style';
        style.textContent = `
          /* Remove highlighting from Ask AI CTA */
          a[href="#"] {
            background-color: rgb(255, 255, 255) !important;
          }
          a[href="#"]:hover {
            background-color: rgb(241, 241, 241) !important;
          }
          
          /* Remove highlighting from all search results */
          a[tabindex="0"] {
            background-color: rgb(255, 255, 255) !important;
          }
          a[tabindex="0"]:hover {
            background-color: rgb(241, 241, 241) !important;
          }
        `;
        shadowRoot.appendChild(style);
      }
      
      const focusableLinks = shadowRoot.querySelectorAll('a[tabindex="0"]');
      focusableLinks.forEach(link => {
        link.setAttribute('tabindex', '-1');
      });
    }
  }
  
  let intervalId = null;
  
  function startContinuousPolling() {
    if (intervalId) return; // Already running
    
    intervalId = setInterval(function() {
      removeDefaultSelection();
    }, 200); // Check every 200ms
  }
  
  function checkKapaAndStart() {
    const kapaContainer = document.getElementById('kapa-widget-container');
    if (kapaContainer) {
      removeDefaultSelection();
      startContinuousPolling();
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkKapaAndStart);
  } else {
    checkKapaAndStart();
  }
  
  const setupChecker = setInterval(function() {
    const kapaContainer = document.getElementById('kapa-widget-container');
    if (kapaContainer) {
      checkKapaAndStart();
      clearInterval(setupChecker);
    }
  }, 500);
})();
