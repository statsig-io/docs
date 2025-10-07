import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useDynamicConfig } from "../../lib/statsig";

const SignupCTA = () => (
  <BrowserOnly>
    {() => {
      const ctaConfig = useDynamicConfig("docs_cta");
      const url = "https://console.statsig.com";
      const cta = ctaConfig?.get("cta") ?? "Get Started";
      return (
        <a className="navbar__item" href={url} target="_blank">
          <button className="signupCTA CTA">{cta}</button>
        </a>
      );
    }}
  </BrowserOnly>
);
export default React.memo(SignupCTA);
