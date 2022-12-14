import React from "react";
import ReactDOMServer from "react-dom/server";

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
      style={{
        padding: "10px 20px",
        backgroundColor: "var(--ifm-navbar-background-color)",
        borderRadius: 10,
        fontSize: 12,
        marginBottom: 15,
        color: "var(--ifm-color-content)",
      }}
    >
      {updated && (
        <div style={{ marginBottom: 5 }}>Last Updated: {updated}</div>
      )}
      <a
        x-sdk-onclick="window.open('https://statsigcommunity.slack.com/archives/C01RAKM10TD', '_blank').focus();"
        href="#"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/img/slack.webp" style={{ height: 15, width: 15 }} />
          <span style={{ marginLeft: 8 }}>Question? Ask on Slack</span>
        </div>
      </a>
    </div>
  );
}

export default function SDKDocTOCHeader({ lastSDKDocsUpdate }) {
  // Note: Most attributes are stripped by ReactDOMServer.renderToStaticMarkup. eg onClick won't work
  const asString = ReactDOMServer.renderToStaticMarkup(
    <Header lastUpdated={lastSDKDocsUpdate} />
  ).replaceAll("x-sdk-", "");
  return `<div onclick="event.preventDefault();" style="cursor: default">${asString}</div>`;
}
