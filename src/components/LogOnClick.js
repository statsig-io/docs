import React from "react";

export default function LogOnClick({ children, event }) {
  return (
    <span
      onClick={() => {
        if (typeof window === "undefined" || !window || !window.statsig) {
          console.log("Noo");
          return;
        }
        console.log("Yee");

        window.statsig.logEvent({}, event);
      }}
    >
      {children}
    </span>
  );
}
