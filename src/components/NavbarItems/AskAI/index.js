import React, { useCallback } from "react";

const ASK_AI_BUTTON_ID = "ask-ai-navbar-button";
const ASK_AI_LABEL = "Discover";
const ASK_AI_ICON_SRC =
  "https://statsig.com/images/sections/multi-products-v2/menu-statsig.svg";
const KAPA_SCRIPT_ID = "kapa-widget-script";

const openKapaWidget = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const opener = window.Kapa?.open({ mode: "search" });
  if (typeof opener === "function") {
    opener.call(window.Kapa);
    return true;
  }

  return false;
};

const openKapaWidgetWhenReady = () => {
  if (openKapaWidget()) {
    return;
  }

  if (typeof document === "undefined") {
    return;
  }

  const script = document.getElementById(KAPA_SCRIPT_ID);
  if (!script) {
    return;
  }

  script.addEventListener(
    "load",
    () => {
      openKapaWidget();
    },
    { once: true }
  );
};

const AskAI = () => {
  const handleClick = useCallback(() => {
    openKapaWidgetWhenReady();
  }, []);

  return (
    <div className="navbar__item">
      <button
        id={ASK_AI_BUTTON_ID}
        className="signupCTA CTA ask-ai-button"
        type="button"
        onClick={handleClick}
      >
        <img
          className="ask-ai-button__icon"
          src={ASK_AI_ICON_SRC}
          alt=""
          aria-hidden="true"
        />
        <span className="ask-ai-button__label">{ASK_AI_LABEL}</span>
      </button>
    </div>
  );
};

export default React.memo(AskAI);
