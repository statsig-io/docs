import React, { useMemo, useState } from "react";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

export const ChatBar = ({ placeholder = "What will you like to build..." }) => {
  const [query, setQuery] = useState("");

  const buttonDisabled = useMemo(() => !query.trim(), [query]);

  return (
    <form
      target="_blank"
      action="https://statsig.sampleapp.ai"
      onSubmit={(e) => {
        const form = e.target;
        if (!form.checkValidity()) {
          e.preventDefault();
        }
      }}
    >
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
          display: "flex",
          gap: "0.5rem",
          alignItems: "flex-start",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          paddingTop: "0.75rem",
          paddingBottom: "1.25rem",
        }}
      >
        <textarea
          name="q"
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
          required
          value={query}
          onChange={(e) => {
            if (e && e.target) {
              const newValue = e.target.value;
              setQuery(newValue);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              const form = e.target.form;
              if (form.checkValidity()) {
                form.submit();
              }
            }
          }}
          rows={1}
        />

        {/* Submit button */}
        <IconButton
          type="submit"
          size="small"
          disabled={buttonDisabled}
          sx={{
            transition: "opacity 0.2s ease-out",
            backgroundColor: "var(--ifm-color-primary)",
            color: "#fff",
            opacity: 1,
            "&.Mui-disabled": {
              backgroundColor: "var(--ifm-color-primary)",
              transition: "opacity 0.2s ease-in",
              color: "#fff",
              pointerEvents: "none",
              opacity: 0,
            },
            "&:hover": {
              backgroundColor: "var(--ifm-color-primary-dark)",
            },
          }}
        >
          <Icon>arrow_forward</Icon>
        </IconButton>
      </div>
    </form>
  );
};
