import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const config: Config = {
  title: "Statsig Docs",
  tagline: "Ship faster!",
  url: "https://docs.statsig.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "statsig", // Usually your GitHub org/user name.
  projectName: "statsig-io/docs", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/statsig-io/docs/edit/main/",
          showLastUpdateTime: true,
          routeBasePath: "/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function statsig() {
      const isProd = process.env.NODE_ENV === "production";
      const tier = isProd ? "production" : "development";
      return {
        name: "docusaurus-plugin-statsig",
        getClientModules() {
          // statsig client sdk initialization
          return [];
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
                  src: "https://cdn.jsdelivr.net/npm/@statsig/js-client@3/build/statsig-js-client+session-replay+web-analytics.min.js?apikey=client-c1fEjmA7JETNimhlFhKf2M1qMRFNkl9ipDfxYEatlYJ",
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
            to: "/",
            from: "/category/walkthrough-guides"
          },
          {
            to: "/client/javascript-sdk/next-js",
            from: "/guides/nextjs-feature-flags",
          },

          {
            to: "/client/javascript-sdk/next-js",
            from: "/guides/nextjs-page-router-feature-flags",
          },

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
          {
            to: "/experiments-plus/stop-assignments",
            from: "/experiments-plus/pause-assignment",
          },
        ],
      },
    ],
  ],

  themes: [],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docs_meta_q3_2023.png",
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "JOWHDNMZRN",

      // Public API key: it is safe to commit it
      apiKey: "2a538120ca7db3411698786731f3c2f6",

      indexName: "statsig",

      // Optional: see doc section below
      // contextualSearch: true,

      // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // // Optional: Algolia search parameters
      // searchParameters: {},

      // // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: 'search',

      // // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,
    },
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
            {
              label: "FAQ",
              to: "/faq",
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "diff",
        "json",
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
        "objectivec",
      ],
    },
  } satisfies Preset.ThemeConfig,
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

export default config;
