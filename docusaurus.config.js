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
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://blog.statsig.com', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/statsig-io/docs',
          label: 'Code',
          position: 'left',
        },
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
              to: 'docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.statsig.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/statsig-io',
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Statsig, Inc. | Thanks Docusaurus`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/statsig-io/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/statsig-io/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
