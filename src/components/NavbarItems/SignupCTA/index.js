import React, { useState, useEffect } from "react";

const SignupCTA = () => {
  const [cta, setCta] = useState("Get Started");
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (isClient && typeof window !== "undefined" && window.Statsig) {
      const loadDynamicConfig = async () => {
        try {
          const statsig = window.Statsig.StatsigClient.instance(
            "client-ytx8IW8M9gdyg6VZOQ8v8azsZx4PzcD6MhxyxmUVNga"
          );
          
          if (statsig.loadingState === "Ready") {
            const ctaConfig = statsig.getDynamicConfig("docs_cta");
            const dynamicCta = ctaConfig?.get("cta");
            if (dynamicCta) {
              setCta(dynamicCta);
            }
          } else {
            const handleValuesUpdated = () => {
              const ctaConfig = statsig.getDynamicConfig("docs_cta");
              const dynamicCta = ctaConfig?.get("cta");
              if (dynamicCta) {
                setCta(dynamicCta);
              }
            };
            
            statsig.on("values_updated", handleValuesUpdated);
            return () => {
              statsig.off("values_updated", handleValuesUpdated);
            };
          }
        } catch (error) {
          console.error("Failed to load dynamic config:", error);
        }
      };
      
      loadDynamicConfig();
    }
  }, [isClient]);

  const url = "https://console.statsig.com";
  
  return (
    <a className="navbar__item" href={url} target="_blank">
      <button className="signupCTA CTA">{cta}</button>
    </a>
  );
};

export default React.memo(SignupCTA);
