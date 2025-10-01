import { AskAIProvider, useAskAI } from "../../contexts/AskAIContext";
import React, { useEffect, useLayoutEffect, useState } from "react";

import FloatingThumbs from "../../components/FloatingThumbs/FloatingThumbs";
import Layout from "@theme-original/Layout";
import { useDoc } from "@docusaurus/theme-common/internal";
import { useLocation } from "react-router-dom";

function KapaEventHandler() {
  const { setIsAskAIOpen } = useAskAI();

  useEffect(() => {
    if (typeof window === "undefined" || !window.Kapa) {
      return;
    }

    const handleModalOpen = () => {
      setIsAskAIOpen(true);
      
      setTimeout(() => {
        const kapaContainer = document.getElementById('kapa-widget-container');
        if (kapaContainer && kapaContainer.shadowRoot) {
          const modal = kapaContainer.shadowRoot.querySelector('section[aria-modal="true"]');
          if (modal) {
            const searchInput = modal.querySelector('.mantine-TextInput-input');
            if (searchInput) {
              searchInput.focus();
            }
          }
        }
      }, 100);
    };

    const handleModalClose = () => {
      setIsAskAIOpen(false);
    };

    const handleSearchResultsCompleted = (event) => {
      const { query } = event;
      if (!query || !query.trim()) return;

      setTimeout(() => {
        const kapaContainer = document.getElementById('kapa-widget-container');
        if (!kapaContainer || !kapaContainer.shadowRoot) return;
        
        const modal = kapaContainer.shadowRoot.querySelector('section[aria-modal="true"]');
        if (!modal) return;
        
        const divsInModal = modal.querySelectorAll('div');
        const resultsContainer = Array.from(divsInModal).find(div => {
          const anchorChildren = Array.from(div.children).filter(child => child.tagName === 'A');
          return anchorChildren.length > 5;
        });
        
        if (!resultsContainer) return;

        const existingCustomResult = resultsContainer.querySelector('.custom-ask-ai-cta');
        if (existingCustomResult) {
          existingCustomResult.remove();
        }

        const customResult = document.createElement('a');
        customResult.className = 'custom-ask-ai-cta';
        customResult.setAttribute('href', '#');
        customResult.setAttribute('role', 'button');
        customResult.style.cssText = `
          display: flex;
          align-items: center;
          padding: 12px 16px;
          cursor: pointer;
          background: transparent;
          border-radius: 8px;
          margin-bottom: 4px;
          transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
          outline: none;
          border: 2px solid transparent;
          text-decoration: none;
        `;
        
        customResult.innerHTML = `
          <span style="font-size: 20px; min-width: 20px; margin-right: 12px;">✨</span>
          <div style="flex: 1;">
            <div style="font-weight: 600; color: #1963d2; font-size: 14px;">Ask AI: ${query}</div>
            <div style="font-size: 12px; color: #6b7280; margin-top: 2px;">Get instant answers powered by AI</div>
          </div>
        `;

        customResult.addEventListener('mouseenter', () => {
          customResult.style.backgroundColor = '#f3f4f6';
          customResult.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        });
        customResult.addEventListener('mouseleave', () => {
          customResult.style.backgroundColor = 'transparent';
          customResult.style.boxShadow = 'none';
        });
        
        customResult.addEventListener('focus', () => {
          customResult.style.backgroundColor = '#f3f4f6';
          customResult.style.border = '2px solid #1963d2';
          customResult.style.boxShadow = 'none';
        });
        customResult.addEventListener('blur', () => {
          customResult.style.backgroundColor = 'transparent';
          customResult.style.border = '2px solid transparent';
          customResult.style.boxShadow = 'none';
        });

        const handleActivation = (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (window.Kapa) {
            window.Kapa.open({ mode: 'ai', query: query });
            
            setTimeout(() => {
              const kapaContainer = document.getElementById('kapa-widget-container');
              if (kapaContainer && kapaContainer.shadowRoot) {
                const modal = kapaContainer.shadowRoot.querySelector('section[aria-modal="true"]');
                if (modal) {
                  const textarea = modal.querySelector('.mantine-Input-wrapper.mantine-Textarea-wrapper textarea');
                  if (textarea) {
                    textarea.focus();
                    
                    const submitButton = modal.querySelector('button.mantine-ActionIcon-root[data-variant="filled"]') || 
                                       modal.querySelector('button[type="submit"]') ||
                                       modal.querySelector('button[aria-label*="send"]') ||
                                       modal.querySelector('button[aria-label*="submit"]') ||
                                       modal.querySelector('svg[data-icon="arrow-right"]')?.closest('button');
                    
                    if (submitButton) {
                      submitButton.click();
                      
                      setTimeout(() => {
                        textarea.focus();
                      }, 100);
                    }
                  }
                }
              }
            }, 500);
          }
        };
        
        customResult.addEventListener('click', handleActivation);
        customResult.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleActivation(e);
          }
        });

        resultsContainer.insertBefore(customResult, resultsContainer.firstChild);
      }, 100);
    };

    window.Kapa("onModalOpen", handleModalOpen);
    window.Kapa("onModalClose", handleModalClose);
    window.Kapa("onSearchResultsCompleted", handleSearchResultsCompleted);

    return () => {
      if (window.Kapa) {
        window.Kapa("onModalOpen", handleModalOpen, "remove");
        window.Kapa("onModalClose", handleModalClose, "remove");
        window.Kapa("onSearchResultsCompleted", handleSearchResultsCompleted, "remove");
      }
    };
  }, [setIsAskAIOpen]);

  return null;
}

export default function CustomLayout(props) {
  const location = useLocation();
  const [pageViews, setPageViews] = useState(null);
  const [pageOwner, setPageOwner] = useState("");

  const isNodeEnvDevelopment = process.env.NODE_ENV === "development";
  const [isLocalHost, setIsLocalHost] = useState(false);

  useEffect(() => {
    setIsLocalHost(
      window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
    );
  }, []);

  const isDevelopment = isNodeEnvDevelopment && isLocalHost;

  // Extract page owner from meta tags
  useEffect(() => {
    // Add a small delay to ensure meta tags are updated after navigation
    const timeoutId = setTimeout(() => {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        const content = metaKeywords.getAttribute("content");
        if (content) {
          const ownerMatch = content.match(/owner:([^\s,]+)/);
          if (ownerMatch && ownerMatch[1]) {
            setPageOwner(ownerMatch[1]);
            Statsig.instance().logEvent("PageLoadOwner", window.location.href, {
              pageOwner: ownerMatch[1],
            });
          } else {
            setPageOwner("");
          }
        } else {
          setPageOwner("");
        }
      } else {
        setPageOwner("");
      }
    }, 100); // Small delay to ensure DOM is updated

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount or re-run
  }, [location]);

  useEffect(() => {
    if (isDevelopment) {
      fetch("/page_views.csv")
        .then((response) => response.text())
        .then((csvContent) => {
          const lines = csvContent.split("\n");
          const viewsData = {};

          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
              const [views, url] = line.split(",");
              viewsData[url] = parseInt(views, 10);
            }
          }

          let currentUrl = "docs.statsig.com" + location.pathname;
          if (currentUrl !== "docs.statsig.com/" && currentUrl.endsWith("/")) {
            currentUrl = currentUrl.slice(0, -1);
          }

          console.log("Looking for URL:", currentUrl);
          setPageViews(viewsData[currentUrl] || 0);
        })
        .catch((error) => {
          console.error("Failed to fetch page views data:", error);
          setPageViews(0);
        });
    }
  }, [location, isDevelopment, isNodeEnvDevelopment, isLocalHost]);

  useLayoutEffect(() => {
    // Wait a small tick to ensure DOM is fully rendered
    setTimeout(() => {
      const hasSidebar = document.querySelector(".theme-doc-sidebar-container");
      if (!hasSidebar) {
        console.log("doesn't have sidebar");
        Statsig.instance().logEvent("NoSidebarPageLoad", window.location.href, {
          pageOwner: pageOwner,
        });
      }
      const docsearchRankingConfig = Statsig.instance().getDynamicConfig(
        "docsearch_ranking_manual"
      );
      const url = window.location.href
        .replace(/^https?:\/\//, "")
        .replace(/\/+$/, "");
      const docsearchRankingManual = docsearchRankingConfig.get(url, 0);
      document
        .querySelectorAll(".docsearch-ranking-manual")
        .forEach((el) => el.remove());
      const newElement = document.createElement("div");
      newElement.setAttribute("ranking", docsearchRankingManual);
      newElement.classList.add("docsearch-ranking-manual");
      document.body.appendChild(newElement); //We'll consume this in the algolia crawler
    }, 0);
  }, [location]);

  return (
    <AskAIProvider>
      {/* Only show debug banner in development mode */}
      {isDevelopment && pageViews !== null && pageViews !== 0 && (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            textAlign: "center",
            fontWeight: "bold",
            position: "sticky",
            top: 0,
            zIndex: 9999,
          }}
        >
          DEBUG MODE - Current Path: {location.pathname} | Page Views:{" "}
          {pageViews !== null ? pageViews.toLocaleString() : "Loading..."} |
          Page Owner: {pageOwner || "Unknown"}
        </div>
      )}
      <KapaEventHandler />
      <Layout {...props} />
      <FloatingThumbs />
    </AskAIProvider>
  );
}
