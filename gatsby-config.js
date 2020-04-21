const configs = require('./configs');

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './',
                aliases: {
                    '#components': './src/components/',
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
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            showLineNumbers: true,
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
                    require(`tailwindcss`)(`./tailwind.config.js`),
                    require('postcss-nested'),
                    ...(process.env.NODE_ENV === 'production'
                        ? [
                              require(`autoprefixer`),
                              require(`postcss-preset-env`)({ stage: 2 }),
                              require(`cssnano`),
                          ]
                        : []),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true,
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
