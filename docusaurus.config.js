const sdkDateExtractor = require("./src/plugins/rehype-sdk-date-extractor");
const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Statsig Docs",
  tagline: "Ship faster!",
  url: "https://docs.statsig.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "statsig", // Usually your GitHub org/user name.
  projectName: "statsig-io/docs", // Usually your repo name.
  themeConfig: {
    metadata: [
      {
        name: "og:image",
        content: "/img/docs_meta_q3_2023.png",
      },
      {
        name: "og:type",
        content: "websiteg",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "og:image:type",
        content: "image/jpg",
      },
      {
        name: "twitter:image",
        content: "/img/docs_meta_q3_2023.png",
      },
    ],
    navbar: {
      title: "",
      logo: {
        alt: "Statsig",
        src: "img/logo.svg",
        srcDark: "img/logo_white.svg",
        href: "https://statsig.com",
      },
      items: [
        {
          type: 'html',
          position: 'right',
          value: '<button id="consoleCTA" onclick="window.open(\'https://console.statsig.com\', \'_blank\').focus(); window.statsig.logEvent({}, \'console_button_click\', window.location.pathname, {referrer: document && document.referrer,});">Get Started</button>',
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Statsig Home",
              href: "https://statsig.com",
            },
            {
              label: "Blog",
              href: "https://statsig.com/blog",
            },
            {
              label: "Slack Community",
              href: "https://statsig.com/slack",
            },
            {
              label: "Code",
              href: "https://github.com/statsig-io",
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Statsig, Inc. | Thanks Docusaurus`,
    },
    prism: {
      additionalLanguages: [
        "swift",
        "java",
        "ruby",
        "csharp",
        "jsx",
        "go",
        "python",
        "kotlin",
        "erlang",
        "dart",
        "rust",
      ],
    },
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        indexDocs: true,
        docsRouteBasePath: "/",
      },
    ],
    function statsig() {
      const isProd = process.env.NODE_ENV === "production";
      const tier = isProd ? "production" : "development";
      return {
        name: "docusaurus-plugin-statsig",
        getClientModules() {
          // statsig client sdk initialization
          return [path.resolve(__dirname, "./statsig")];
        },
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: "script",
                attributes: {
                  src: "/js/datadog.js",
                },
              },
              {
                tagName: "script",
                attributes: {
                  src: "https://api.statsigcdn.com/v1/download_config_specs/client-LAx5juseYG9kxnB2vHLxFluaFmZVv9aAKPmw1NB8rps.js",
                },
              },
              {
                tagName: "script",
                attributes: {
                  src: "https://cdn.jsdelivr.net/npm/statsig-js-local-eval@1.0.0/build/statsig-prod-web-sdk.min.js",
                },
              },
              {
                tagName: "script",
                innerHTML: `window.statsigTier="${tier}"`,
              },
              {
                tagName: "script",
                attributes: {
                  src: "/js/rapidoc-min.js",
                },
              },
              {
                tagName: "script",
                attributes: {
                  src: "https://cdn.koala.live/v1/daniel/sdk.js",
                },
              },
              {
                tagName: "script",
                attributes: {
                  src: "/js/koala.js",
                },
              },
            ],
          };
        },
      };
    },
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/integrations/terraform/introduction",
            from: "/integrations/terraform",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/statsig-io/docs/edit/main/",
          showLastUpdateTime: true,
          rehypePlugins: [sdkDateExtractor, katex],
          remarkPlugins: [math],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};
