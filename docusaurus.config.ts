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
          showLastUpdateAuthor: false,
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
      const isNetlifyPreview =
        process.env.CONTEXT === "deploy-preview" ||
        process.env.CONTEXT === "branch-deploy";
      const tier = isProd && !isNetlifyPreview ? "production" : "development";
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
            to: "/guides/feature-flags",
            from: "/guides/guides/feature-gates",
          },
          {
            to: "/feature-flags/overview",
            from: [
              "/feature-gates/overview",
              "/feature-gates",
              "/feature-flags",
              "/feature-gates/working-with",
              "/feature-flags/working-with",
              "/feature-gates/implement",
              "/feature-gates/implement/client",
              "/feature-gates/implement/server",
              "/feature-gates/implement/http-api",
            ],
          },
          {
            to: "/feature-flags/create",
            from: ["/feature-gates/create-new", "/feature-flags/create-new"],
          },
          {
            to: "/feature-flags/create#add-a-rule-to-your-feature-gate",
            from: ["/feature-gates/add-rule", "/feature-flags/add-rule"],
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
            from: [
              "/feature-flags/implement",
              "/feature-flags/implement/client",
              "/feature-flags/implement/server",
              "/feature-flags/implement/http-api",
              "/category/walkthrough-guides",
            ],
          },
          {
            to: "/pulse/read-pulse",
            from: ["/experiments-plus/read-results", "/pulse"],
          },
          {
            to: "/experiments-plus/getting-group#rules",
            from: "/experiments-plus/rules",
          },
          {
            to: "/experiments-plus",
            from: "/experiments-plus/working-with",
          },
          {
            to: "/experiments-plus#why-experiment",
            from: "/experiments-plus/experimentation/why-experiment",
          },
          {
            to: "/experiments-plus#scenarios-for-experimentation",
            from: "/experiments-plus/experimentation/scenarios",
          },
          {
            to: "/experiments-plus#key-concepts-in-experimentation",
            from: "/experiments-plus/experimentation/common-terms",
          },
          {
            to: "/experiments-plus#choosing-the-right-randomization-unit",
            from: "/experiments-plus/experimentation/choosing-randomization-unit",
          },
          {
            to: "/experiments-plus/stop-assignments",
            from: "/experiments-plus/pause-assignment",
          },
          {
            to: "/product-analytics/overview",
            from: [
              "/product-analytics",
              "/mex",
              "/mex/overview",
              "/metrics/events-explorer",
            ],
          },
          {
            to: "/product-analytics/drilldown",
            from: ["/mex/drilldown", "/events-explorer"],
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
            to: "/product-analytics/alerts/",
            from: "/metrics/metric-alerts",
          },
          {
            to: "/client/javascript-sdk",
            from: [
              "/client/introduction/javascript-sdk",
              "/client/jsClientSDK",
            ],
          },
          {
            to: "/client/javascript-sdk/react",
            from: "/client/reactSDK",
          },
          {
            to: "/client/javascript-sdk/react-native",
            from: ["/client/reactNative", "/client/reactNativeSDK"],
          },
          {
            to: "/client/javascript-sdk/expo",
            from: "/client/reactNativeExpoSDK",
          },
          {
            to: "/client/javascript-sdk/next-js",
            from: [
              "/guides/nextjs-feature-flags",
              "/client/javascript-sdk/next-js-pages-router",
              "/guides/nextjs-page-router-feature-flags",
              "/client/javascript-sdk/next-js-app-router",
            ],
          },
          {
            to: "/client/javascript-sdk/migrating-from-statsig-js",
            from: ["/js-migration", "/js-migration-rn", "/js-migration-expo"],
          },
          {
            to: "/client/javascript-sdk/migrating-from-statsig-react",
            from: "/js-migration-react",
          },
          {
            to: "/client/javascript-sdk#layers",
            from: "/layers/js-tutorial",
          },
          {
            to: "/client/concepts/initialize",
            from: [
              "/client/javascript-sdk/react/init-strategies",
              "/client/concepts/bootstrapping",
            ],
          },
          {
            to: "/concepts/user",
            from: ["/server/concepts/user/", "/client/concepts/user/"],
          },
          {
            to: "/statsig-warehouse-native/configuration/assignment-sources",
            from: "/statsig-warehouse-native/guides/assignment-sources/",
          },
          {
            to: "/statsig-warehouse-native/introduction",
            from: "/guides/experiment-analysis/",
          },
          {
            to: "/statsig-warehouse-native/introduction",
            from: "/statsig-warehouse-native",
          },
          {
            to: "/guides/aa-test#offline-aa-tests",
            from: "/stats-engine/offlineaa",
          },
          {
            to: "/console-api/all-endpoints-generated",
            from: "/console-api/all-endpoints",
          },
          {
            to: "/aggregated-impact",
            from: "/insights/",
          },
          {
            to: "/dynamic-config/working-with",
            from: "/dynamic-config/implement/",
          },
          {
            to: "/sdks/getting-started",
            from: "/sdks/sdks-overview",
          },
          {
            to: "/sdk/debugging",
            from: "/debugging",
          },
          {
            to: "/concepts/user#why-is-an-id-always-required-for-server-sdks",
            from: "/messages/serverRequiredUserID/",
          },
          {
            to: "/guides/sidecar-experiments/introduction",
            from: "/guides/landing-page-experiments",
          },
          {
            to: "/integrations/terraform/introduction",
            from: "/integrations/terraform",
          },
          {
            to: "/ai-evals/overview",
            from: ["/ai-configs", "/prompts", "/aievals", "/ai-evals", "/ai-ml/ai-prompt-experiment"],
          },
          {
            to: "/webanalytics/autocapture/",
            from: "/client/concepts/autocapture/",
          },
          {
            to: "/integrations/introduction",
            from: "/integrations/vscode",
          },
          {
            to: "/experiments-plus/bayesian/",
            from: "/experiments-plus/bayesian-deprecated/",
          },
          {
            to: '/product-analytics/alerts/topline_alerts',
            from: '/product-analytics/topline_alerts',
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
    // algolia: {
    //   appId: "JOWHDNMZRN",

    //   apiKey: "2a538120ca7db3411698786731f3c2f6",

    //   indexName: "statsig",

    //   contextualSearch: true,

    //   searchParameters: {
    //     facetFilters: [],
    //   },

    //   insights: true,
    // },
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
          type: "doc",
          position: "left",
          docId: "getting-started",
          sidebarId: "product-docs",
          label: "Product Docs",
          id: "product-docs", //don't edit this without rerunning algolia scraper
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "warehouse",
          label: "Warehouse Native",
          id: "warehouse", //don't edit this without rerunning algolia scraper
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "api",
          label: "SDKs & APIs",
          id: "sdk-api", //don't edit this without rerunning algolia scraper
        },
        // {
        //   type: "search",
        // },
        {
          type: "custom-askAI",
          position: "right",
        },
        {
          type: "custom-signupCTA",
          position: "right",
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
            {
              label: "Statsig University",
              href: "https://learn.statsig.com/certifications",
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
  scripts: [
    {
      id: "kapa-widget-script",
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      defer: true,
      "data-website-id": "418990dd-0615-4ba7-b52f-3ab8c1af4e79",
      "data-project-name": "Statsig",
      "data-project-color": "#1963d2",
      "data-project-logo":
        "https://statsig.com/images/sections/multi-products-v2/menu-statsig.svg",
      "data-scale-factor": "1.2",
      "data-modal-lock-scroll": "false",
      "data-modal-image":
        "https://raw.githubusercontent.com/statsig-io/docs/f263b88116852d7c7174b82df1b528609a1ea073/static/img/favicon.svg",
      "data-button-hide": "true",
      "data-modal-override-open-id": "ask-ai-navbar-button",
      "data-modal-disclaimer":
        "Statsig Docs AI answers questions using documentations, API references, blogs, and videos. Responses are AI-generated, and we encourage you to rate them to let us know what you think!",
      "data-answer-feedback-info-text":
        "All feedback is reviewed by the Statsig team.",
      "data-search-mode-default": "true",
      "data-search-mode-enabled": "true",
      "data-modal-open-on-command-k": "true",
      "data-modal-command-k-search-mode-default": "true",
      "data-modal-search-input-placeholder": "Search Statsig docs...",
      "data-search-include-source-names": '["Documentation"]',
      "data-search-show-ask-ai-cta": "false",
      "data-search-result-link-target": "_self",
      "data-modal-full-screen-on-mobile": "false",
      "data-kapa-branding-text": "Powered by kapa.ai and Statsig",
      "data-question-text-color": "#1963d2",
    },
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

export default config;
