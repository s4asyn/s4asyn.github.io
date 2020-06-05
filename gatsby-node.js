const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const slugPath = createFilePath({ node, getNode, basePath: `pages` });
        let slugPlain = slugPath.split('.')[0].replace(/\/index$/i, '');
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
        if (node.frontmatter.tags) {
            const slugTagList = [];
            node.frontmatter.tags.forEach((tag) => {
                slugTagList.push({
                    tag,
                    slug: `/${node.frontmatter.lang}/tag/${tag}`,
                });
            });
            createNodeField({
                node,
                name: `slugtaglist`,
                value: slugTagList,
            });
        }
    }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    createPage({
        path: '/fa/blog',
        component: path.resolve(`./src/templates/blog-index.jsx`),
        context: { lang: 'fa' },
    });
    createPage({
        path: '/fa/library',
        component: path.resolve(`./src/templates/library.jsx`),
        context: { lang: 'fa' },
    });
    /*
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
                            slugtaglist {
                                tag
                                slug
                            }
                        }
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    const tagList = new Set();
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
        node.fields.slugtaglist &&
            node.fields.slugtaglist.forEach((slugtag) => {
                if (!tagList.has(slugtag.tag)) {
                    tagList.add(slugtag.tag);
                    createPage({
                        path: slugtag.slug,
                        component: path.resolve(`./src/templates/tag.jsx`),
                        context: {
                            tag: slugtag.tag,
                        },
                    });
                }
            });
    });
};
