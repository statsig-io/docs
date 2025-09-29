import React, { useCallback } from "react";

const ASK_AI_BUTTON_ID = "ask-ai-navbar-button";
const KAPA_SCRIPT_ID = "kapa-widget-script";

const openKapaWidget = () => {
  if (typeof window === "undefined") return false;
  const opener = window.Kapa?.open({ mode: "search" });
  if (typeof opener === "function") {
    opener.call(window.Kapa);
    return true;
  }
  return false;
};

const openKapaWidgetWhenReady = () => {
  if (openKapaWidget()) return;

  if (typeof document === "undefined") return;
  const script = document.getElementById(KAPA_SCRIPT_ID);
  if (!script) return;

  script.addEventListener("load", openKapaWidget, { once: true });
};

const AskAI = () => {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    openKapaWidgetWhenReady();
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openKapaWidgetWhenReady();
    }
  }, []);

  // Detect OS for keyboard shortcut display
  const isMac =
    typeof navigator !== "undefined" &&
    /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
  const modifierKey = isMac ? "⌘" : "Ctrl";

  return (
    <button
      id={ASK_AI_BUTTON_ID}
      className="ask-ai-search-button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <svg
        className="ask-ai-search-icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ask-ai-search-text">Search or Ask AI</span>
      <span className="ask-ai-shortcut">
        <kbd>{modifierKey}</kbd>
        <kbd>K</kbd>
      </span>
    </button>
  );
};

export default React.memo(AskAI);
