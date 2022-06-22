// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RedGradient',
  tagline: 'All about Css gradient Edit.',
  url: 'https://redcamel.github.io/',
  baseUrl: '/RedGradientDoc/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'redcamel', // Usually your GitHub org/user name.
  projectName: 'RedGradientDoc', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],

  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/redcamel/RedGradient//tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {

          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {

        title: 'RedGradient',
        logo: {
          alt: 'RedGradient Logo ',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/redcamel/RedGradient/',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {

        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Issue',
                href: 'https://github.com/redcamel/RedGradient/issues',
              },
              {
                label: 'Source',
                href: 'https://github.com/redcamel/RedGradient/',
              },
            ],
          },
          {
            title: 'Social ',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/redcamel/RedGradient/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/seonki.paik',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/redcamel15',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021 RedCamel. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
