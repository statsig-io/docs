import React from "react";
import ReactDOMServer from "react-dom/server";

function Header() {
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
      <div>Last Updated: Yesterday</div>
      <a
        x-sdk-onclick="window.open('https://statsigcommunity.slack.com/archives/C01RAKM10TD', '_blank').focus();"
        href="#"
      >
        <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
          <img src="/img/slack.webp" style={{ height: 15, width: 15 }} />
          <span style={{ marginLeft: 8 }}>Question? Ask on Slack</span>
        </div>
      </a>
    </div>
  );
}

export default function SDKDocTOCHeader({ action }) {
  // Note: Most attributes are stripped by ReactDOMServer.renderToStaticMarkup. eg onClick won't work
  const asString = ReactDOMServer.renderToStaticMarkup(<Header />).replaceAll(
    "x-sdk-",
    ""
  );
  window.SDKDocTOCHeaderAction = action;
  return `<div onclick="event.preventDefault(); SDKDocTOCHeaderAction()" style="cursor: default">${asString}</div>`;
}
