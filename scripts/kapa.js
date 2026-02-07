const script = document.createElement("script");
script.src = "https://widget.kapa.ai/kapa-widget.bundle.js";
script.async = true;
script.setAttribute("data-website-id", "418990dd-0615-4ba7-b52f-3ab8c1af4e79");
script.setAttribute("data-project-name", "Statsig");
script.setAttribute("data-project-color", "#202020");
script.setAttribute("data-project-logo", "/images/scripts/kapa/menu-statsig.svg");
script.setAttribute("data-modal-image", "/images/scripts/kapa/favicon.svg");
script.setAttribute("data-modal-lock-scroll", "false");
script.setAttribute("data-modal-disclaimer", "Statsig Docs AI answers questions using documentations, API references, blogs, and videos. Responses are AI-generated, and we encourage you to rate them to let us know what you think!");
script.setAttribute("data-uncertain-answer-callout", " Please reach out to [Statsig support](https://statsig.com/slack) if you need more help with this question.");
script.setAttribute("data-answer-feedback-info-text", "All feedback is reviewed by the Statsig team.");
script.setAttribute("data-modal-full-screen-on-mobile", "false");
script.setAttribute("data-kapa-branding-text", "Powered by kapa.ai and Statsig");
script.setAttribute("data-question-text-color", "#1963d2");
document.head.appendChild(script);

const KAPA_SHORTCUT_KEY = "i";
const KAPA_OPEN_MAX_ATTEMPTS = 10;
const KAPA_OPEN_RETRY_DELAY = 200;
const KAPA_BUTTON_SELECTORS = [
  "#kapa-button",
  "[data-kapa-button]",
  "[data-kapa-launcher]",
  "[class*='kapa-button']",
];

function isEditableElement(element) {
  if (!element) {
    return false;
  }

  const tagName = element.tagName;
  return (
    element.isContentEditable ||
    tagName === "INPUT" ||
    tagName === "TEXTAREA" ||
    element.getAttribute("role") === "textbox"
  );
}

function triggerKapaWidget() {
  if (
    window.Kapa &&
    typeof window.Kapa.open === "function"
  ) {
    window.Kapa.open();
    return true;
  }

  for (const selector of KAPA_BUTTON_SELECTORS) {
    const button = document.querySelector(selector);
    if (button) {
      button.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );
      return true;
    }
  }

  return false;
}

function openKapaWithRetry(remainingAttempts = KAPA_OPEN_MAX_ATTEMPTS) {
  if (triggerKapaWidget() || remainingAttempts <= 0) {
    return;
  }

  setTimeout(
    () => openKapaWithRetry(remainingAttempts - 1),
    KAPA_OPEN_RETRY_DELAY
  );
}

window.addEventListener(
  "keydown",
  (event) => {
    const key = (event.key || "").toLowerCase();

    if (
      event.defaultPrevented ||
      isEditableElement(event.target) ||
      key !== KAPA_SHORTCUT_KEY ||
      event.altKey ||
      event.shiftKey ||
      (!event.metaKey && !event.ctrlKey)
    ) {
      return;
    }

    event.preventDefault();
    openKapaWithRetry();
  },
  true
);
