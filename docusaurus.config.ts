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
            to: "/server/concepts/user",
          },
          {
            from: "/client/javascript-sdk/react/init-strategies",
            to: "/client/concepts/initialize",
          },
          {
            from: "/client/concepts/bootstrapping",
            to: "/client/concepts/initialize/#2-bootstrap-initialization",
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
          }
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
      insights: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Statsig",
        src: "img/logo-new.svg",
        srcDark: "img/logo_white.svg",
        href: "/",
      },
      items: [
        {
          type: "search",
        },
        // {
        //   type: "html",
        //   value:
        //     "<button class=\"loginCTA CTA\" onclick=\"window.open('https://console.statsig.com', '_blank').focus();\">Log In</button>",
        // },
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
