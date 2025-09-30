import React, { useCallback, useEffect, useRef, useState } from "react";

const ASK_AI_BUTTON_ID = "ask-ai-button";
const KAPA_SCRIPT_ID = "kapa-widget-script";

// Algolia configuration from docusaurus.config.ts
const ALGOLIA_APP_ID = "JOWHDNMZRN";
const ALGOLIA_API_KEY = "2a538120ca7db3411698786731f3c2f6";
const ALGOLIA_INDEX_NAME = "statsig";

// Initialize Algolia search client using fetch API directly
const performAlgoliaSearch = async (query) => {
  const url = `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${ALGOLIA_INDEX_NAME}/query`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-Algolia-API-Key": ALGOLIA_API_KEY,
      "X-Algolia-Application-Id": ALGOLIA_APP_ID,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      hitsPerPage: 20, // Increased to get more subpage results
      facetFilters: [],
      // Include more hierarchy levels in search
      attributesToRetrieve: [
        "hierarchy.lvl0",
        "hierarchy.lvl1",
        "hierarchy.lvl2",
        "hierarchy.lvl3",
        "hierarchy.lvl4",
        "hierarchy.lvl5",
        "hierarchy.lvl6",
        "content",
        "url",
        "objectID",
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Algolia search failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.hits;
};

const openKapaWidget = (searchQuery) => {
  if (typeof window === "undefined") return false;

  // Check if Kapa is available
  if (!window.Kapa) {
    console.warn("Kapa widget not yet loaded");
    return false;
  }

  // Open Kapa with the search query
  const opener = window.Kapa.open({ query: searchQuery, submit: true });
  if (typeof opener === "function") {
    opener.call(window.Kapa);
    return true;
  }

  return false;
};

const openKapaWidgetWhenReady = (searchQuery) => {
  // Try to open immediately
  if (openKapaWidget(searchQuery)) return;

  // If Kapa isn't loaded yet, wait for the script to load
  if (typeof document === "undefined") return;
  const script = document.getElementById(KAPA_SCRIPT_ID);
  if (!script) {
    console.warn("Kapa script not found in document");
    return;
  }

  // Add event listener to open when script loads
  const handleLoad = () => {
    openKapaWidget(searchQuery);
  };

  script.addEventListener("load", handleLoad, { once: true });
};

const AlgoliaSearchWithAskAI = () => {
  const [modifierKey, setModifierKey] = useState("Ctrl");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // FIXED: Added missing state
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchInputRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  const resultRefs = useRef([]);

  // Set up the modifier key based on platform
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setModifierKey(navigator.platform?.includes("Mac") ? "⌘" : "Ctrl");
    }
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Perform Algolia search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Debounce search
    searchTimeoutRef.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const hits = await performAlgoliaSearch(searchQuery);
        setSearchResults(hits);
      } catch (error) {
        console.error("Algolia search error:", error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  // Reset selected index when search results change
  useEffect(() => {
    setSelectedIndex(-1);
    resultRefs.current = [];
  }, [searchResults]);

  // Scroll selected result into view
  useEffect(() => {
    if (selectedIndex >= 0 && resultRefs.current[selectedIndex]) {
      resultRefs.current[selectedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  // Global keyboard shortcut listener
  useEffect(() => {
    const handleGlobalKeyPress = (e) => {
      // Prevent triggering when typing in input fields (except our search)
      if (e.target.tagName === "INPUT" && e.target !== searchInputRef.current)
        return;
      if (e.target.tagName === "TEXTAREA") return;

      // Check for "/" key
      if (e.key === "/" && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }

      // Check for Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }

      // Close on Escape
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyPress);
    return () => document.removeEventListener("keydown", handleGlobalKeyPress);
  }, [isSearchOpen]);

  const handleAskAIClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      openKapaWidgetWhenReady(searchQuery);
      // Note: We don't close the search modal here to maintain context
      // If you prefer to close it, uncomment the following lines:
      // setIsSearchOpen(false);
      // setSearchQuery("");
      // setSearchResults([]);
    },
    [searchQuery]
  );

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleResultClick = (url) => {
    // Navigate to the result
    window.location.href = url;
  };

  const handleKeyNavigation = (e) => {
    const totalItems = searchResults.length + (searchQuery ? 1 : 0); // +1 for Ask AI button
    if (!totalItems) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      // If Ask AI button is selected (it's always the first item when query exists)
      if (searchQuery && selectedIndex === 0) {
        openKapaWidgetWhenReady(searchQuery);
        // Don't close the search modal for better UX
      } else {
        // Adjust index for search results (subtract 1 if query exists because Ask AI is first)
        const resultIndex = searchQuery ? selectedIndex - 1 : selectedIndex;
        if (resultIndex >= 0 && resultIndex < searchResults.length) {
          handleResultClick(searchResults[resultIndex].url);
        }
      }
    }
  };

  const highlightText = (text, query) => {
    if (!text || !query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  };

  const handleOverlayClick = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setSelectedIndex(-1);
  };

  const handleCloseClick = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setSelectedIndex(-1);
  };

  return (
    <>
      {/* Search Trigger Button */}
      {!isSearchOpen && (
        <button
          className="search-trigger"
          onClick={handleSearchClick}
          aria-label="Open search"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="search-icon"
          >
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="search-text">Search</span>
          <span className="shortcut">
            <kbd>{modifierKey}</kbd>
            <kbd>K</kbd>
          </span>
        </button>
      )}

      {/* Search Modal/Overlay */}
      {isSearchOpen && (
        <div className="search-overlay" onClick={handleOverlayClick}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <div className="search-input-wrapper">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="search-input-icon"
                >
                  <path
                    d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="search-input"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyNavigation}
                />
                <button
                  type="button"
                  className="close-button"
                  onClick={handleCloseClick}
                  aria-label="Close search"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Ask AI Button inside search - always shown when there's a query */}
            {searchQuery && (
              <div className="search-footer">
                <button
                  id={ASK_AI_BUTTON_ID}
                  className={`ask-ai-button ${
                    selectedIndex === 0 ? "selected" : ""
                  }`}
                  onClick={handleAskAIClick}
                  ref={(el) => {
                    if (searchQuery) resultRefs.current[0] = el;
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ai-icon"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Ask Statsig AI: "{searchQuery}"</span>
                </button>
              </div>
            )}

            {/* Search Results Area */}
            <div className="search-results">
              {isSearching ? (
                <div className="search-loading">
                  <div className="spinner"></div>
                  <p>Searching...</p>
                </div>
              ) : searchQuery ? (
                searchResults.length > 0 ? (
                  <div className="results-list">
                    {searchResults.map((hit, index) => {
                      // Adjust index for refs since Ask AI button is at index 0
                      const refIndex = index + 1;
                      return (
                        <div
                          key={hit.objectID}
                          ref={(el) => (resultRefs.current[refIndex] = el)}
                          className={`result-item ${
                            refIndex === selectedIndex ? "selected" : ""
                          }`}
                          onClick={() => handleResultClick(hit.url)}
                        >
                          <div className="result-header">
                            <h3 className="result-title">
                              {highlightText(
                                hit.hierarchy?.lvl0 || hit.title || "Untitled",
                                searchQuery
                              )}
                            </h3>
                            {hit.hierarchy?.lvl1 && (
                              <span className="result-breadcrumb">
                                {hit.hierarchy.lvl1}
                              </span>
                            )}
                          </div>
                          {hit.content && (
                            <p className="result-content">
                              {highlightText(
                                hit.content.substring(0, 150) + "...",
                                searchQuery
                              )}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="search-empty-state">
                    <p>No results found for "{searchQuery}"</p>
                    <p className="empty-state-hint">
                      Try asking Statsig AI for help instead ↑
                    </p>
                  </div>
                )
              ) : (
                <div className="search-empty-state">
                  <p>Start typing to search documentation</p>
                  <div className="keyboard-hints">
                    <div className="hint-item">
                      <kbd>↑</kbd>
                      <kbd>↓</kbd>
                      <span>to navigate</span>
                    </div>
                    <div className="hint-item">
                      <kbd>↵</kbd>
                      <span>to select</span>
                    </div>
                    <div className="hint-item">
                      <kbd>esc</kbd>
                      <span>to close</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlgoliaSearchWithAskAI;
