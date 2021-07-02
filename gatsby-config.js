const configs = require('./configs');

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './',
                aliases: {
                    '#components': './src/components/',
                    '#styles': './src/styles',
                    '#states': './src/states/',
                    '#configs': './configs/',
                    '#static': './static/',
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`,
                ignore: [
                    `**/\.*`,
                    `**/*\.{tex,log,aux,syntex,synctex,synctex\(busy\),syncaux,fls,fdb_latexmk,synctex.gz,pdf}`,
                ],
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1035,
                            linkImagesToOriginal: false,
                            // showCaptions: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            // offsetY: `100`,
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 13a4 4 0 01-3.5 6h-4a4 4 0 110-8h1a1 1 0 000-2h-1a6 6 0 100 12h4a6 6 0 005.2-9 1 1 0 10-1.7 1zm-15-2A4 4 0 018 5h4a4 4 0 110 8h-1a1 1 0 000 2h1a6 6 0 100-12H8a6 6 0 00-5.2 9 1 1 0 101.7-1z"/></svg>`,
                            className: `autolink-hdrs`,
                            // maintainCase: true,
                            removeAccents: true,
                            isIconAfterHeader: true,
                            elements: [`h2`, `h5`],
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            inlineCodeMarker: '>',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require(`postcss-import`)({
                        plugins: [require('stylelint')],
                    }),
                    require(`tailwindcss`)(`./tailwind.config.js`),
                    require('postcss-nested'),
                    ...(process.env.NODE_ENV === 'production'
                        ? [require('autoprefixer')]
                        : []),
                    require('postcss-reporter')({
                        clearReportedMessages: true,
                    }),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true,
                ignore: [],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: configs.metadata.googleAnalytics.trackingId,
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/do-not-track/me/too/'],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: configs.metadata.googleAnalytics.optimizeId,
                // Enables Google Optimize Experiment ID
                experimentId: configs.metadata.googleAnalytics.experimentId,
                // Set Variation ID. 0 for original 1,2,3....
                variationId: '0',
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: configs.metadata.domain,
            },
        },
    ],
};
