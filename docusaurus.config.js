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
        href: "/",
      },
      items: [
        {
          type: "html",
          position: "right",
          value:
            "<button id=\"consoleCTA\" onclick=\"window.open('https://console.statsig.com', '_blank').focus(); window.statsig.logEvent({}, 'console_button_click', window.location.pathname, {referrer: document && document.referrer,});\">Get Started</button>",
          type: 'html',
          position: 'right',
          value: '<button id="consoleCTA" onclick="window.open(\'https://console.statsig.com\', \'_blank\').focus(); window.statsig.logEvent({}, \'console_button_click\', window.location.pathname, {referrer: document && document.referrer,});">Get Started</button>',
        },
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
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
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
                innerHTML: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;var n=d.querySelector('[nonce]');
                  n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-NRDCWNF');
                `,
                attributes: {
                  type: "text/javascript",
                },
              },
              {
                tagName: "script",
                attributes: {
                  async: true,
                  defer: true,
                  src: "https://www.googletagmanager.com/gtag/js?id=G-EM5RHE1RHW",
                },
              },
              {
                tagName: "script",
                innerHTML: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-EM5RHE1RHW');
                `,
                attributes: {
                  type: "text/javascript",
                },
              },
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
                attributes: {
                  src: "https://cdn.jsdelivr.net/npm/@statsig/js-client@latest/build/statsig-js-client+session-replay+web-analytics.min.js",
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
            to: "/product-analytics/drilldown",
            from: "/mex/drilldown",
          },
          {
            to: "/product-analytics/dashboards",
            from: "/mex/dashboards",
          },
          {
            to: "/product-analytics/funnels",
            from: "/mex/funnels",
          },
          {
            to: "/product-analytics/retention",
            from: "/mex/retention",
          },
          {
            to: "/product-analytics/overview",
            from: "/mex/overview",
          },
          {
            to: "/product-analytics/overview",
            from: "/product-analytics",
          },
          {
            to: "/product-analytics/overview",
            from: "/mex",
          },
          {
            to: "/integrations/terraform/introduction",
            from: "/integrations/terraform",
          },
          {
            to: "/feature-flags/working-with",
            from: "/feature-gates/working-with",
          },
          {
            to: "/feature-flags/create-new",
            from: "/feature-gates/create-new",
          },
          {
            to: "/feature-flags/working-with",
            from: ["/feature-gates", "/feature-flags"],
          },
          {
            to: "/feature-flags/add-rule",
            from: "/feature-gates/add-rule",
          },
          {
            to: "/feature-flags/test-gate",
            from: "/feature-gates/test-gate",
          },
          {
            to: "/feature-flags/overrides",
            from: "/feature-gates/overrides",
          },
          {
            to: "/feature-flags/scheduled-rollouts",
            from: "/feature-gates/scheduled-rollouts",
          },
          {
            to: "/feature-flags/conditions",
            from: "/feature-gates/conditions",
          },
          {
            to: "/feature-flags/view-exposures",
            from: "/feature-gates/view-exposures",
          },
          {
            to: "/feature-flags/feature-flags-lifecycle",
            from: "/feature-gates/feature-gates-lifecycle",
          },
          {
            to: "/feature-flags/permanent-and-stale-gates",
            from: "/feature-gates/permanent-and-stale-gates",
          },
          {
            to: "/feature-flags/best-practices",
            from: "/feature-gates/best-practices",
          },
          {
            to: "/feature-flags/implement",
            from: "/feature-gates/implement",
          },
          {
            to: "/feature-flags/implement/client",
            from: "/feature-gates/implement/client",
          },
          {
            to: "/feature-flags/implement/server",
            from: "/feature-gates/implement/server",
          },
          {
            to: "/feature-flags/implement/http-api",
            from: "/feature-gates/implement/http-api",
          },
          {
            to: "/product-analytics/overview",
            from: "/metrics/events-explorer",
          },
        ],
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        indexDocs: true,
        docsRouteBasePath: "/",
        ignoreFiles: [
          /client\/_[^\/]*\.mdx/i,
          /server\/_[^\/]*\.mdx/i,
          /client\/(Android|AndroidOnDeviceEvaluation|Dart|React|ReactNative|Roku|SwiftOnDeviceEval|Templates|Unity|dotnet|iOS|js|jslocal)\/?/i,
          /server\/(Templates|java|node|cpp|dotnet|erlang|go|php|python|ruby|rust)\/?/i,
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
