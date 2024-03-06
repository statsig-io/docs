import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

function extractSnippet(input) {
  const parts = input.split("\n");
  const result = [];

  let isAdding = false;

  for (const line of parts) {
    console.log(line);
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

export default function GitHubEmbed({ url }) {
  const [content, setContent] = useState("// Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        setContent(extractSnippet(data));
      } catch (error) {
        console.error("Error fetching data:", error);
        setContent(`// Failed to load example.\n// View on GitHub:\n// ${url}`);
      }
    };

    fetchData();
  }, [url]);

  return <CodeBlock language="typescript">{content}</CodeBlock>;
}
