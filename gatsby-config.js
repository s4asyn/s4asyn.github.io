module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './',
                aliases: {
                    '@s4/assets': './contents/assets',
                    '@s4/configs': './configs/',
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
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                plugins: [
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
                trackingId: 'UA-163585154-1',
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
                optimizeId: 'GTM-M5MD9VR',
                // Enables Google Optimize Experiment ID
                experimentId: ' WuicPPzOR1yf5tSmXtMOvQ',
                // Set Variation ID. 0 for original 1,2,3....
                variationId: '0',
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'asaiyan.com',
            },
        },
    ],
};
