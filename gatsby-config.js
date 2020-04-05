module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(`./tailwind.config.js`),
                    ...(process.env.NODE_ENV === 'production'
                        ? [require(`autoprefixer`), require(`cssnano`)]
                        : []),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true,
                purgeOnly: [`src/css/style.css`],
            },
        },
    ],
};
