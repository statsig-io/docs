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
  const [modifierKey, setModifierKey] = React.useState("Ctrl"); // Default to Ctrl

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

  // Set up the modifier key based on platform
  React.useEffect(() => {
    if (typeof navigator !== "undefined") {
      setModifierKey(navigator.platform?.includes("Mac") ? "⌘" : "Ctrl");
    }
  }, []);

  // Add global keyboard listener for both "/" and "Cmd/Ctrl + K"
  React.useEffect(() => {
    const handleGlobalKeyPress = (e) => {
      // Prevent triggering when typing in input fields
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      // Check for "/" key
      if (e.key === "/") {
        e.preventDefault();
        openKapaWidgetWhenReady();
        return;
      }

      // Check for Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openKapaWidgetWhenReady();
      }
    };

    document.addEventListener("keydown", handleGlobalKeyPress);
    return () => document.removeEventListener("keydown", handleGlobalKeyPress);
  }, []);

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
      <span className="ask-ai-search-text">Search with Ask AI</span>
      <span className="ask-ai-shortcut">
        <kbd>{modifierKey}</kbd>
        <kbd>K</kbd>
      </span>
    </button>
  );
};

export default React.memo(AskAI);
