const script = document.createElement("script");
script.src = "https://widget.kapa.ai/kapa-widget.bundle.js";
script.async = true;
script.setAttribute("data-website-id", "418990dd-0615-4ba7-b52f-3ab8c1af4e79");
script.setAttribute("data-project-name", "Statsig");
script.setAttribute("data-project-color", "#202020");
script.setAttribute("data-project-logo", "https://statsig.com/images/sections/multi-products-v2/menu-statsig.svg");
script.setAttribute("data-modal-image", "https://raw.githubusercontent.com/statsig-io/docs/f263b88116852d7c7174b82df1b528609a1ea073/static/img/favicon.svg");
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
const KAPA_FILL_MAX_ATTEMPTS = 15;
const KAPA_FILL_RETRY_DELAY = 200;
const KAPA_BUTTON_SELECTORS = [
  "#kapa-button",
  "[data-kapa-button]",
  "[data-kapa-launcher]",
  "[class*='kapa-button']",
];
const KAPA_INPUT_SELECTORS = [
  "#kapa-ask-ai-input",
  "[data-kapa-ask-ai-input]",
  "textarea[id*='kapa']",
  "textarea[placeholder*='Ask']",
  "textarea[placeholder*='question']",
];
const KAPA_INPUT_SELECTOR = KAPA_INPUT_SELECTORS.join(", ");

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

function fillKapaInputWithQuery(query, remainingAttempts = KAPA_FILL_MAX_ATTEMPTS) {
  if (!query) {
    return;
  }

  const input = document.querySelector(KAPA_INPUT_SELECTOR);

  if (input) {
    if (input.value !== query) {
      input.value = query;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
    input.focus();
    return;
  }

  if (remainingAttempts <= 0) {
    return;
  }

  setTimeout(
    () => fillKapaInputWithQuery(query, remainingAttempts - 1),
    KAPA_FILL_RETRY_DELAY
  );
}

function openKapaWithRetry(options = {}, remainingAttempts = KAPA_OPEN_MAX_ATTEMPTS) {
  if (triggerKapaWidget()) {
    if (options.query) {
      setTimeout(
        () => fillKapaInputWithQuery(options.query),
        KAPA_OPEN_RETRY_DELAY
      );
    } else if (typeof options.onOpen === "function") {
      options.onOpen();
    }
    return;
  }

  if (remainingAttempts <= 0) {
    return;
  }

  setTimeout(
    () => openKapaWithRetry(options, remainingAttempts - 1),
    KAPA_OPEN_RETRY_DELAY
  );
}

function openKapa(options = {}) {
  openKapaWithRetry(options);
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
    openKapa();
  },
  true
);

window.StatsigDocs = window.StatsigDocs || {};
window.StatsigDocs.openKapa = openKapa;
if (!window.__statsigOpenKapa) {
  window.__statsigOpenKapa = openKapa;
}
