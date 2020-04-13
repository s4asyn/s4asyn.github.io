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
            resolve: `gatsby-transformer-remark`,
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
                    ...(process.env.NODE_ENV === 'production'
                        ? [
                              require(`autoprefixer`),
                              require(`postcss-preset-env`)({ stage: 1 }),
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
    ],
};
