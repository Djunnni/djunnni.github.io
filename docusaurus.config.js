// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Djunnni",
  tagline: "Blog",
  url: "https://djunnni.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "djunnni",
  projectName: "djunnni.github.io",
  trailingSlash: false,

  deploymentBranch: "gh-pages",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/djunnni/djunnni.github.io/tree/main/",
          exclude: ["tutorial-basics", "tutorial-extras"],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/djunnni/djunnni.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-4FF73XFEFX",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Djunnni",
        logo: {
          alt: "Djunnni github logo",
          src: "https://github.com/djunnni.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tech",
          },
          {
            href: "https://github.com/djunnni",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // footer: {
      //   style: "light",
      //   links: [],
      //   copyright: `Copyright © ${new Date().getFullYear()} Djunnni, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
