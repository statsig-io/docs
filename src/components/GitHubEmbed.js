import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom";
import CodeBlock from "@theme/CodeBlock";

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
        setContent(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setContent(`// Failed to load example.\n// View on GitHub:\n// ${url}`);
      }
    };

    fetchData();
  }, [url]);

  return <CodeBlock language="typescript">{content}</CodeBlock>;
}
