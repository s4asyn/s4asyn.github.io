const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const slugPath = createFilePath({ node, getNode, basePath: `pages` });
        const slugPlain = slugPath.split('.')[0];
        createNodeField({
            node,
            name: `slugPlain`,
            value: slugPlain,
        });
        const slug = `/${node.frontmatter.lang}${slugPlain}`;
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    /*
    createPage({
        path: '/fa/blog',
        component: path.resolve(`./src/templates/blog-index.jsx`),
        context: { lang: 'fa' },
    });
    createPage({
        path: '/en/blog',
        component: path.resolve(`./src/templates/blog-index.jsx`),
        context: { lang: 'en' },
    });
    */
    const result = await graphql(`
        query {
            allMdx(filter: { frontmatter: { published: { eq: "yes" } } }) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.jsx`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        });
    });
};