{
  /* <script src="https://giscus.app/client.js"
        data-repo="statsig-io/docs"
        data-repo-id="MDEwOlJlcG9zaXRvcnkzNTQxNDU1NzA="
        data-category="Announcements"
        data-category-id="DIC_kwDOFRvVIs4CkZAC"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script> */
}

import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComments() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="statsig-io/docs"
      repoId="MDEwOlJlcG9zaXRvcnkzNTQxNDU1NzA="
      category="Announcements"
      categoryId="DIC_kwDOFRvVIs4CkZAC"
      mapping="pathname"
      //   term="specific-term" //If you didn't select "Discussion title contains a specific term", omit.
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
