import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

const { StatsigClient } = window.Statsig;

let _client;
function getClient() {
  if (_client) {
    return _client;
  }

  const sdkDemoKey = "client-rfLvYGag3eyU0jYW5zcIJTQip7GXxSrhOFN69IGMjvq";
  _client = new StatsigClient(sdkDemoKey, {
    userID: "",
  });

  _client.initializeSync();

  return _client;
}

function logRender(url, language) {
  try {
    getClient().logEvent({
      eventName: "gh_embed_render",
      value: url,
      metadata: { language },
    });
  } catch (error) {
    // noop
  }
}

function logFailure(url, language, error) {
  try {
    getClient().logEvent({
      eventName: "gh_embed_error",
      value: url,
      metadata: { language, error },
    });
  } catch (error) {
    // noop
  }
}

function extractSnippet(input) {
  const parts = input.split("\n");
  const result = [];

  let isAdding = false;

  for (const line of parts) {
    if (line.includes("<snippet>")) {
      isAdding = true;
    } else if (line.includes("</snippet>")) {
      isAdding = false;
    } else if (isAdding) {
      result.push(line);
    }
  }

  return result.join("\n");
}

function runGateCheck() {
  try {
    return getClient().checkGate("partial_gate");
  } catch (error) {
    // noop
  }

  return false;
}

export default function GitHubEmbed({ url, language }) {
  const [content, setContent] = useState("// Loading...");

  runGateCheck();

  useEffect(() => {
    logRender(url, language);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        setContent(extractSnippet(data));
      } catch (error) {
        setContent(`// Failed to load example.\n// View on GitHub:\n// ${url}`);
        logFailure(url, language, error);
      }
    };

    fetchData();
  }, [url]);

  return <CodeBlock language={language ?? "typescript"}>{content}</CodeBlock>;
}
