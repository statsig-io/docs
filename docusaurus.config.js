const path = require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Statsig Docs',
  tagline: 'Ship faster!',
  url: 'https://docs.statsig.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'statsig', // Usually your GitHub org/user name.
  projectName: 'statsig-io/docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Statsig',
        src: 'img/logo.svg',
        srcDark: 'img/logo_white.svg',
        href: 'https://statsig.com',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Statsig Home',
              href: 'https://statsig.com',
            },
            {
              label: 'Blog',
              href: 'https://blog.statsig.com',
            },
            {
              label: 'Code',
              href: 'https://github.com/statsig-io',
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Statsig, Inc. | Thanks Docusaurus`,
    },
    prism: {
      additionalLanguages: ['swift', 'java', 'ruby', 'csharp', 'jsx', 'go', 'python', 'kotlin'],
    }
  },
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        baseUrl: '/',
        excludeRoutes: [
          'docs/client/iOS/**/*',
          'docs/client/Android/**/*',
          'docs/client/dotnet/**/*',
          'docs/client/js/**/*',
          'docs/client/_client-sdk-template',
          'docs/server/ruby/**/*',
          'docs/server/python/**/*',
          'docs/server/node/**/*',
          'docs/server/java/**/*',
          'docs/server/go/**/*',
          'docs/server/dotnet/**/*',
          'server/python/**/*',
          'server/_server-sdk-template',
        ],
      },
    ],
    function statsig() {
      const isProd = process.env.NODE_ENV === 'production';
      const tier = isProd ? 'production' : 'development';
      return {
        name: 'docusaurus-plugin-statsig',
        getClientModules() {
          return [path.resolve(__dirname, './statsig')];
        },
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                attributes: {
                  src: 'https://cdn.jsdelivr.net/npm/statsig-js@3.0.3-beta.8/build/statsig-prod-web-sdk.min.js'
                },
              },
              {
                tagName: 'script',
                innerHTML: `
                  statsig.initialize('client-oJY6hTJeduhEN2bf6fh6unHvxIk9UsjS99BlO4owh0r', null, {environment: {tier: "${tier}"}})
                    .then(() => {
                      statsig.logEvent('page_view', window.location.pathname);
                    });
                `,
              },
            ],
          }
        }
      };
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/statsig-io/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
};
