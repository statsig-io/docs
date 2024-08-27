import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom/client";

function Header({ lastUpdated }) {
  const epoch = parseInt(lastUpdated);
  let updated = null;
  if (epoch && !isNaN(epoch)) {
    updated = new Date(epoch * 1000).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
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
      {(!lastUpdated || updated) && (
        <div style={{ marginBottom: 5 }}>Last Updated: {updated ?? "..."}</div>
      )}
      <a
        onClick={() =>
          window.open("https://statsig.com/community", "_blank").focus()
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
      root.render(<Header lastUpdated={node.getAttribute("x-last-updated")} />);
    }
  }, []);
  return <></>;
}

export function SDKDocTOCHeaderAsString() {
  return ReactDOMServer.renderToStaticMarkup(<Header />);
}
