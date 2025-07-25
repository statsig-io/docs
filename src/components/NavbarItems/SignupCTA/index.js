import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useExperiment } from "../../lib/statsig";

const SignupCTA = () => (
  <BrowserOnly>
    {() => {
      const ctaExp = useExperiment("docs_signup_cta");
      const url = ctaExp?.get("url") ?? "https://console.statsig.com";
      const cta = ctaExp?.get("cta") ?? "Get Started";
      return (
        <a className="navbar__item" href={url} target="_blank">
          <button className="signupCTA CTA">{cta}</button>
        </a>
      );
    }}
  </BrowserOnly>
);
export default React.memo(SignupCTA);
