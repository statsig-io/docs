(function() {
  'use strict';
  
  const KAPA_CONFIG = {
    projectColor: '#202020',
    projectName: 'Statsig'
  };
  
  function waitForElements() {
    const checkInterval = setInterval(() => {
      const kapaReady = typeof window.Kapa === 'function';
      const searchReady = document.querySelector('[data-search-trigger]') || 
                         document.querySelector('button[aria-label*="Search"]');
      
      if (kapaReady && searchReady) {
        clearInterval(checkInterval);
        setupSearchAugmentation();
      }
    }, 100);
    
    setTimeout(() => clearInterval(checkInterval), 30000);
  }
  
  function setupSearchAugmentation() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const isSearchDialog = (node.getAttribute?.('aria-modal') === 'true' && 
                                   node.querySelector?.('input[type="text"]')) ||
                                  (node.getAttribute?.('role') === 'dialog' && 
                                   node.querySelector?.('input[type="text"]'));
            
            if (isSearchDialog) {
              monitorSearchInput(node);
            } else {
              const searchDialog = node.querySelector?.('[aria-modal="true"]');
              if (searchDialog && searchDialog.querySelector('input[type="text"]')) {
                monitorSearchInput(searchDialog);
              }
            }
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    const existingDialog = document.querySelector('[aria-modal="true"]');
    if (existingDialog && existingDialog.querySelector('input[type="text"]')) {
      monitorSearchInput(existingDialog);
    }
  }
  
  function monitorSearchInput(searchDialog) {
    let currentQuery = '';
    let monitoringActive = true;
    
    const checkInput = () => {
      if (!monitoringActive) return;
      
      const searchInput = searchDialog.querySelector('input[type="text"]');
      if (searchInput) {
        const query = searchInput.value.trim();
        
        if (query && query !== currentQuery) {
          currentQuery = query;
          injectAskAiCTA(searchDialog, query);
        } else if (!query && currentQuery) {
          currentQuery = '';
          const existingCTA = searchDialog.querySelector('.mintlify-ask-ai-cta');
          if (existingCTA) {
            existingCTA.remove();
          }
        }
      }
      
      if (monitoringActive) {
        requestAnimationFrame(checkInput);
      }
    };
    
    searchDialog.addEventListener('input', (e) => {
      if (e.target.matches('input[type="text"]')) {
        const query = e.target.value.trim();
        
        if (query && query !== currentQuery) {
          currentQuery = query;
          injectAskAiCTA(searchDialog, query);
        } else if (!query && currentQuery) {
          currentQuery = '';
          const existingCTA = searchDialog.querySelector('.mintlify-ask-ai-cta');
          if (existingCTA) {
            existingCTA.remove();
          }
        }
      }
    }, true);
    
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.removedNodes) {
          for (const node of mutation.removedNodes) {
            if (node === searchDialog || node.contains?.(searchDialog)) {
              monitoringActive = false;
              observer.disconnect();
              return;
            }
          }
        }
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    checkInput();
  }
  
  function injectAskAiCTA(searchDialog, query) {
    const resultsContainer = searchDialog.querySelector('[role="listbox"]');
    
    if (!resultsContainer) return;
    
    const existingCTA = resultsContainer.querySelector('.mintlify-ask-ai-cta');
    if (existingCTA) {
      existingCTA.remove();
    }
    
    const askAiItem = document.createElement('div');
    askAiItem.className = 'mintlify-ask-ai-cta';
    askAiItem.setAttribute('role', 'option');
    askAiItem.setAttribute('tabindex', '0');
    askAiItem.style.cssText = `
      display: flex;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
      background: transparent;
      border-radius: 8px;
      margin: 4px 8px;
      transition: background-color 0.2s;
      outline: none;
      border: 2px solid transparent;
    `;
    
    const escapeHtml = (text) => {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    };
    
    const escapedQuery = escapeHtml(query);
    askAiItem.innerHTML = `
      <span style="font-size: 20px; min-width: 20px; margin-right: 12px;">✨</span>
      <div style="flex: 1;">
        <div style="font-weight: 600; color: ${KAPA_CONFIG.projectColor}; font-size: 14px;">Ask AI: ${escapedQuery}</div>
        <div style="font-size: 12px; color: #6b7280; margin-top: 2px;">Get instant answers powered by AI</div>
      </div>
    `;
    
    const handleMouseEnter = () => {
      askAiItem.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
    };
    
    const handleMouseLeave = () => {
      askAiItem.style.backgroundColor = 'transparent';
    };
    
    const handleFocus = () => {
      askAiItem.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
      askAiItem.style.border = `2px solid ${KAPA_CONFIG.projectColor}`;
    };
    
    const handleBlur = () => {
      askAiItem.style.backgroundColor = 'transparent';
      askAiItem.style.border = '2px solid transparent';
    };
    
    const handleActivation = (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const closeButton = searchDialog.querySelector('button[aria-label*="Close"]') ||
                         searchDialog.querySelector('button[aria-label*="close"]');
      if (closeButton) {
        closeButton.click();
      }
      
      if (window.Kapa && typeof window.Kapa === 'function') {
        setTimeout(() => {
          try {
            const statsigInstance = window.Statsig?.instances?.['client-Wql5Tkj3Wa3sE8VpFjWpCHCPHxYZMbq6RfcRZZVHFdm'];
            const stableID = statsigInstance?.getContext?.()?.stableID;
            if (stableID) {
              window.kapaSettings = {
                user: {
                  stableID: stableID,
                },
              };
            }
          } catch (e) {
          }
          
          window.Kapa.open({ mode: 'ai', query: query });
          
          setTimeout(() => {
            const kapaContainer = document.getElementById('kapa-widget-container');
            if (!kapaContainer?.shadowRoot) return;
            
            const modal = kapaContainer.shadowRoot.querySelector('section[aria-modal="true"]');
            if (!modal) return;
            
            const textarea = modal.querySelector('textarea');
            if (!textarea) return;
            
            textarea.focus();
            
            const submitButtonSelectors = [
              'button.mantine-ActionIcon-root[data-variant="filled"]',
              'button[type="submit"]',
              'button[aria-label*="send"]',
              'button[aria-label*="submit"]'
            ];
            
            let submitButton = null;
            for (const selector of submitButtonSelectors) {
              submitButton = modal.querySelector(selector);
              if (submitButton) break;
            }
            
            if (!submitButton) {
              const arrowIcon = modal.querySelector('svg[data-icon="arrow-right"]');
              submitButton = arrowIcon?.closest('button');
            }
            
            if (submitButton) {
              submitButton.click();
              setTimeout(() => textarea.focus(), 100);
            }
          }, 300);
        }, 100);
      }
    };
    
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleActivation(e);
      }
    };
    
    askAiItem.addEventListener('mouseenter', handleMouseEnter);
    askAiItem.addEventListener('mouseleave', handleMouseLeave);
    askAiItem.addEventListener('focus', handleFocus);
    askAiItem.addEventListener('blur', handleBlur);
    askAiItem.addEventListener('click', handleActivation);
    askAiItem.addEventListener('keydown', handleKeyDown);
    
    if (resultsContainer.firstChild) {
      resultsContainer.insertBefore(askAiItem, resultsContainer.firstChild);
    } else {
      resultsContainer.appendChild(askAiItem);
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForElements);
  } else {
    waitForElements();
  }
})();
