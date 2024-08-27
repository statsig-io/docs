import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom/client";

function Header() {
  let updated = null;
  try {
    // simulated in dev for perf reasons
    const found = document.querySelector(".theme-last-updated > b > time");
    if (found && found.dateTime != null) {
      updated = new Date(found.dateTime).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  } catch (_e) {
    // ignored
  }

  return (
    <div
      onClick={(event) => event.preventDefault()}
      style={{
        cursor: "default",
        padding: "10px 20px",
        backgroundColor: "var(--ifm-navbar-background-color)",
        borderRadius: 10,
        fontSize: 12,
        marginBottom: 15,
        color: "var(--ifm-color-content)",
      }}
    >
      {updated && (
        <div style={{ marginBottom: 5 }}>Last Updated: {updated ?? "..."}</div>
      )}
      <a
        onClick={() =>
          window
            .open(
              "https://statsig.com/community?ref=statsig_docs_toc",
              "_blank"
            )
            .focus()
        }
        href="#"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/img/slack.webp" style={{ height: 15, width: 15 }} />
          <span style={{ marginLeft: 8 }}>Stuck? Ask Statsig on Slack</span>
        </div>
      </a>
    </div>
  );
}

export default function SDKDocTOCHeader() {
  useEffect(() => {
    const node = document.querySelector("#sdk-toc-header");
    if (node?.getAttribute("x-last-updated")) {
      const root = ReactDOM.createRoot(
        document.getElementById("sdk-toc-header")
      );
      root.render(<Header />);
    }
  }, []);
  return <></>;
}

export function SDKDocTOCHeaderAsString() {
  return ReactDOMServer.renderToStaticMarkup(<Header />);
}
