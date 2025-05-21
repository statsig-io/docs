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
  favicon: "img/favicon.svg",
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
                  src: "https://www.statsig.com/js/single-id.js",
                  onload: "setupStatsigSingleId('docs')",
                },
              },
              {
                tagName: "script",
                attributes: {
                  src: "https://cdn.jsdelivr.net/npm/@statsig/js-client@3/build/statsig-js-client+session-replay+web-analytics.min.js?apikey=client-XlqSMkAavOmrePNeWfD0fo2cWcjxkZ0cJZz64w7bfHX",
                },
              },
              {
                tagName: "script",
                innerHTML: `window.statsigTier="${tier}"`,
              },
              {
                tagName: "link",
                attributes: {
                  rel: "stylesheet",
                  href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
                },
              },
              {
                tagName: "link",
                attributes: {
                  rel: "stylesheet",
                  href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap",
                },
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
            from: "/guides/guides/feature-gates",
            to: "/guides/feature-flags"
          },
          {
            from: "/feature-flags/create-new",
            to: "/feature-flags/create",
          },
          {
            from: "/feature-flags/add-rule",
            to: "/feature-flags/create#add-a-rule-to-your-feature-gate"
          },
          {
            from: "/stats-engine/offlineaa",
            to: "/guides/aa-test#offline-aa-tests",
          },
          {
            from: "/pulse",
            to: "/pulse/read-pulse",
          },
          {
            from: "/experiments-plus/read-results",
            to: "/pulse/read-pulse",
          },
          {
            from: "/experiments-plus/rules",
            to: "/experiments-plus/getting-group#rules",
          },
          {
            from: "/experiments-plus/working-with",
            to: "/experiments-plus",
          },
          {
            from: "/insights/",
            to: "/aggregated-impact",
          },
          {
            from: "/dynamic-config/implement/",
            to: "/dynamic-config/working-with",
          },
          {
            from: "/metrics/metric-alerts",
            to: "/product-analytics/alerts/",
          },
          {
            from: "/statsig-warehouse-native/guides/assignment-sources/",
            to: "/statsig-warehouse-native/configuration/assignment-sources",
          },
          {
            from: "/guides/experiment-analysis/",
            to: "/statsig-warehouse-native/introduction",
          },
          {
            from: "/sdks/sdks-overview",
            to: "/sdks/getting-started",
          },
          {
            from: "/statsig-warehouse-native",
            to: "/statsig-warehouse-native/introduction",
          },
          {
            from: "/debugging",
            to: "/sdk/debugging",
          },
          {
            from: "/messages/serverRequiredUserID/",
            to: "/concepts/user#why-is-an-id-always-required-for-server-sdks",
          },
          {
            from: "/client/introduction/javascript-sdk",
            to: "/client/javascript-sdk",
          },
          {
            from: "/guides/landing-page-experiments",
            to: "/guides/sidecar-experiments/introduction",
          },
          {
            from: "/events-explorer",
            to: "/product-analytics/drilldown",
          },
          {
            from: "/server/concepts/user/",
            to: "/concepts/user",
          },
          {
            from: "/client/concepts/user/",
            to: "/concepts/user",
          },
          {
            from: "/client/javascript-sdk/react/init-strategies",
            to: "/client/concepts/initialize",
          },
          {
            from: "/client/concepts/bootstrapping",
            to: "/client/concepts/initialize",
          },
          {
            from: "/experiments-plus/experimentation/why-experiment",
            to: "/experiments-plus#why-experiment",
          },
          {
            from: "/experiments-plus/experimentation/scenarios",
            to: "/experiments-plus#scenarios-for-experimentation",
          },
          {
            from: "/experiments-plus/experimentation/common-terms",
            to: "/experiments-plus#key-concepts-in-experimentation",
          },
          {
            from: "/experiments-plus/experimentation/choosing-randomization-unit",
            to: "/experiments-plus#choosing-the-right-randomization-unit",
          },
          {
            from: "/js-migration",
            to: "/client/javascript-sdk/migrating-from-statsig-js",
          },
          {
            from: "/js-migration-rn",
            to: "/client/javascript-sdk/migrating-from-statsig-js",
          },
          {
            from: "/js-migration-expo",
            to: "/client/javascript-sdk/migrating-from-statsig-js",
          },
          {
            from: "/js-migration-react",
            to: "/client/javascript-sdk/migrating-from-statsig-react",
          },
          {
            from: "/layers/js-tutorial",
            to: "/client/javascript-sdk#layers",
          },
          {
            from: "/feature-flags/implement",
            to: "/",
          },
          {
            from: "/feature-flags/implement/client",
            to: "/",
          },
          {
            from: "/feature-flags/implement/server",
            to: "/",
          },
          {
            from: "/feature-flags/implement/http-api",
            to: "/",
          },
          {
            from: "/client/jsClientSDK",
            to: "/client/javascript-sdk",
          },
          {
            from: "/client/reactSDK",
            to: "/client/javascript-sdk/react",
          },
          {
            from: "/client/reactNative",
            to: "/client/javascript-sdk/react-native",
          },
          {
            from: "/client/reactNativeSDK",
            to: "/client/javascript-sdk/react-native",
          },
          {
            from: "/client/reactNativeExpoSDK",
            to: "/client/javascript-sdk/expo",
          },
          {
            to: "/",
            from: "/category/walkthrough-guides",
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
            to: "/client/javascript-sdk/next-js",
            from: "/client/javascript-sdk/next-js-app-router",
          },
          {
            to: "/client/javascript-sdk/next-js",
            from: "/client/javascript-sdk/next-js-pages-router",
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
            to: "/",
            from: "/feature-gates/implement",
          },
          {
            to: "/",
            from: "/feature-gates/implement/client",
          },
          {
            to: "/",
            from: "/feature-gates/implement/server",
          },
          {
            to: "/",
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
          {
            to: "/console-api/all-endpoints-generated",
            from: "/console-api/all-endpoints",
          },
          {
            to: "/server-core/node-core",
            from: "/server/nodejsServerSDK",
          },
          {
            to: "/server-core/java-core",
            from: "/server/javaSdk",
          },
          {
            to: "/server-core/rust-core",
            from: "/server/rustSDK",
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
        autoCollapseCategories: false,
      },
    },
    algolia: {
      appId: "JOWHDNMZRN",

      apiKey: "2a538120ca7db3411698786731f3c2f6",

      indexName: "statsig",

      contextualSearch: true,

      searchParameters: {
        facetFilters: []
      },

      insights: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Statsig",
        src: "img/2025_Statsig_Logo_Black.svg",
        srcDark: "img/2025_Statsig_Logo_White.svg",
        href: "/",
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'getting-started',
          sidebarId: 'product-docs',
          label: 'Product Docs',
          id: 'product-docs', //don't edit this without rerunning algolia scraper
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'warehouse',
          label: 'Warehouse Native',
          id: 'warehouse', //don't edit this without rerunning algolia scraper
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'api',
          label: 'SDKs & APIs',
          id: 'sdk-api', //don't edit this without rerunning algolia scraper
        },
        {
          type: "search",
        },
        {
          type: "html",
          value:
            "<button class=\"signupCTA CTA\" onclick=\"window.open('https://console.statsig.com', '_blank').focus();\">Get Started</button>",
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
