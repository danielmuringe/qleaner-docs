import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Qleaner',
  tagline: 'Purge dead code',
  favicon: 'img/favicon.ico',


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://qleaner.qhala.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qhalahq', // Usually your GitHub org/user name.
  projectName: 'qleaner', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/qhalahq/qleaner/edit/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      items: [
        {
          type: 'localeDropdown',
        },
      ],
      title: 'Qleaner',
      logo: {
        alt: 'Qleaner Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      logo: {
        alt: 'Qhala Opensource',
        src: 'img/qhala_opensource.svg',
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Commands',
              to: '/commands',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/qhalahq',
            },
            {
              label: 'Tiktok',
              href: 'https://tiktok.com/@qhala_',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/qhalahq',
            },

          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Hakihack',
              href: 'https://hakihack.com',
            },
            {
              label: 'Startups4kenya',
              href: 'https://startups4kenya.com',
            },
            {
              label: 'E-Raia',
              href: 'https://eraia.co.ke',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              to: 'mailto:contact@qhala.com',
            },
            {
              label: 'Phone',
              to: 'tel:+254722000000',
            },
            {
              label: '3rd Floor, Marsabit Plaza, Ngong Road. P. O. Box 44276 - 00100',
              to: "https://maps.app.goo.gl/bEWs3ADRETnZ49yo9"
            }
          ],
        },
        {
          title: 'Contributing',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/qhalahq/qleaner',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Qhala`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
