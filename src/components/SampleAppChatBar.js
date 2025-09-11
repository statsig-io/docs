import React, {useState} from "react";
import Icon from "@mui/material/Icon";

export const ChatBar = ({placeholder = "What will you like to build..."}) => {
  // Internal state management
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    const encodedQuery = encodeURIComponent(query.trim());
    const url = `https://statsig.sampleapp.ai?q=${encodedQuery}`;
    window.open(url, "_blank");
    return;
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: "10",
        borderRadius: "0.75rem",
        backgroundColor:
          "var(--docsearch-searchbox-background, var(--ifm-color-emphasis-100))",
        border: "solid 1px #d8d8d8",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.06)",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        // Match grid card gutters (cards use 16px external margins)
        // so the chat bar aligns with the visual grid content width
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "0.75rem",
        paddingBottom: "1.25rem",
      }}
    >
      {/* Input area */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "flex-start",
        }}
      >
        <textarea
          placeholder={placeholder}
          style={{
            flex: "1 1 0%",
            width: "100%",
            border: "0",
            boxShadow: "none",
            outline: "none",
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            resize: "none",
            fontSize: "1rem",
            overflow: "hidden",
            backgroundColor: "transparent",
            display: "block",
            paddingTop: "0",
            paddingBottom: "0",
            lineHeight: "1.5",
            overflowY: "auto",
            maxHeight: "12rem",
            marginTop: "0.25rem",
            color: "var(--docsearch-text-color, var(--ifm-color-content))",
            minHeight: "4rem",
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Ubuntu', sans-serif",
          }}
          value={query}
          onChange={(e) => {
            if (e && e.target) {
              const newValue = e.target.value;
              console.log("onChange", newValue);
              setQuery(newValue);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          rows={1}
        />

        {/* Submit button */}
        {query.length > 0 && (
          <button
            type="button"
            style={{
              height: "2rem",
              width: "2rem",
              borderRadius: "0.75rem",
              backgroundColor: "var(--ifm-color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              transition: "background-color 0.15s ease-in-out",
              border: "none",
              cursor: "pointer",
              opacity: !query.trim() ? 0.5 : 1,
            }}
            disabled={!query.trim()}
            onClick={handleSubmit}
            onMouseEnter={(e) => {
              if (!e.target.disabled) {
                e.target.style.backgroundColor =
                  "var(--ifm-color-primary-dark)";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.target.disabled) {
                e.target.style.backgroundColor = "var(--ifm-color-primary)";
              }
            }}
          >
            <Icon
              style={{
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              arrow_upward
            </Icon>
          </button>
        )}
      </div>
    </div>
  );
};
