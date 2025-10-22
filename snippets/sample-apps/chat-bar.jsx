import React, {useEffect, useRef} from "react";

export const ChatBar = () => {
  const chatBarRef = useRef(null);

  useEffect(() => {
    // Load the SampleApp SDK
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@sampleapp.ai/sdk@latest/dist/index.standalone.umd.js";
    script.onload = () => {
      if (window.SampleAppStandalone && chatBarRef.current) {
        window.SampleAppStandalone.ChatBar(
          {
            placeholder: "Ask me anything...",
            height: "auto",
            playgroundUid: "statsig",
            typingTexts: [
              "How do I use statsig?",
              "What is statsig?",
              "Build with statsig",
            ],
          },
          chatBarRef.current
        );
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount - just remove the script we created
      script.remove();
    };
  }, []);

  return <div ref={chatBarRef} className="w-full"></div>;
};
