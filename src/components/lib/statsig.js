import { useState, useEffect } from "react";

function getStatsig() {
  const client = window.Statsig.StatsigClient.instance(
    "client-ytx8IW8M9gdyg6VZOQ8v8azsZx4PzcD6MhxyxmUVNga"
  );
  client.initializeAsync().catch((e) => console.error(e));
  return client;
}

export function useExperiment(name) {
  const statsig = getStatsig();
  const [exp, setExp] = useState(
    statsig.loadingState === "Ready" ? statsig.getExperiment(name) : null
  );
  useEffect(() => {
    function handler() {
      setExp(statsig.getExperiment(name));
    }

    statsig.on("values_updated", handler);
    return () => {
      statsig.off("values_updated", handler);
    };
  }, [name, statsig]);
  return exp;
}
