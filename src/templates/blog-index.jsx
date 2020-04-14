import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
    const SeoData = {
        description: 'This Should be filled',
        title: 'Blog Post List',
    };
    return (
        <Layout SeoData={SeoData}>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <h3>
                            {node.frontmatter.title}{' '}
                            <span>— {node.frontmatter.date}</span>
                        </h3>
                    </Link>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </Layout>
    );
};

/* To Remove this warning: warn The GraphQL query in the non-page component
                           "src/templates/blog-index.jsx" will not be run
export const query = graphql`
    query($lang: String!) {
        allMarkdownRemark(filter: { frontmatter: { lang: { eq: $lang } } }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        lang
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
*/
