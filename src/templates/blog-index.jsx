import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
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
