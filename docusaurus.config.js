// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'پایگاه مستندات فارسی',
    tagline: 'هرچه باید درباره علوم کامپیوتر بدانی، به فارسی',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://aliznet.ir',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'aliz-f', // Usually your GitHub org/user name.
    projectName: 'aliznet.github.io', // Usually your repo name.
    trailingSlash: false,
    deploymentBranch: 'main',
    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa',
        locales: ['fa'],
        localeConfigs: {
            fa: {
                direction: 'rtl',
            },
        }
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    scripts: [
        // Ionicons v7 (for example)
        {
            src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
            type: 'module',
        },
        {
            src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js',
            noModule: true,
        },
    ],
    themes: ['docusaurus-theme-search-typesense'],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // algolia: {
            //     // The application ID provided by Algolia
            //     appId: 'L1W3D7Q9LB',
            //
            //     // Public API key: it is safe to commit it
            //     apiKey: '19db63d936d2f7d50c7f798f6cd582c9',
            //
            //     indexName: 'AlizNet',
            //
            //     // Optional: see doc section below
            //     contextualSearch: true,
            //
            //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //     externalUrlRegex: 'external\\.com|domain\\.com',
            //
            //     // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            //     // replaceSearchResultPathname: {
            //     //     from: '/docs/', // or as RegExp: /\/docs\//
            //     //     to: '/docs/',
            //     // },
            //
            //     // Optional: Algolia search parameters
            //     searchParameters: {},
            //
            //     // Optional: path for search page that enabled by default (`false` to disable it)
            //     searchPagePath: 'search',
            //
            //     // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
            //     insights: false,
            //
            //     // Optional: whether you want to use the new Ask AI feature (undefined by default)
            //     askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',
            //
            //     //... other Algolia params
            // },
            typesense: {
                typesenseCollectionName: 'aliznet',
                typesenseServerConfig: {
                    nodes: [
                        {
                            host: 'search.aliznet.ir',
                            port: 443,
                            protocol: 'https',
                        },
                    ],
                    apiKey: 'llYm1yTg89bKEC02MA21',
                },

                // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
                typesenseSearchParameters: {
                    query_by:
                        'hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2,hierarchy.lvl3,hierarchy.lvl4,hierarchy.lvl5,hierarchy.lvl6,content,embedding',
                    vector_query: 'embedding:([], k: 5, distance_threshold: 1.0, alpha: 0.2)'
                },

                // Optional
                contextualSearch: true,
            },

            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: '',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'دوره ها',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'computerScienceSidebar',
                        position: 'left',
                        label: 'مباحث پایه علوم کامپیوتر',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'pythonSidebar',
                        position: 'left',
                        label: 'زبان برنامه نویسی Python',
                    },
                    {to: '/blog', label: 'بلاگ', position: 'left'},
                    {
                        href: 'https://github.com/Aliz-f/persian-cs-docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'دوره ها',
                        items: [
                            {
                                label: 'مباحث پایه علوم کامپیوتر',
                                to: 'docs/category/cs-core',
                            },
                            {
                                label: 'زبان برنامه نویسی Python',
                                to: 'docs/category/python',
                            },
                        ],
                    },
                    {
                        title: 'بیشتر',
                        items: [
                            {
                                label: 'بلاگ',
                                to: '/blog',
                            },
                            {
                                label: 'نویسندگان',
                                to: '/blog/authors',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Aliz-f/persian-cs-docs',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Aliz-CS. Built with Docusaurus`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
