import React from 'react';
import { graphql } from 'gatsby';

import { Layout, BlogCard } from '#components';

const SeoData = {
    description: 'فهرست مطالب وبلاگ',
    title: 'سعید عصائیان',
};

export default ({ data }) => {
    return (
        <Layout SeoData={SeoData}>
            <article>
                <section>
                    {/* <h4>{data.allMdx.totalCount} Posts</h4> */}
                    {data.allMdx.edges.map(({ node }) => (
                        <BlogCard key={node.id} BlogNode={node} />
                    ))}
                </section>
            </article>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(
            filter: { frontmatter: { published: { eq: "yes" } } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            totalCount
            edges {
                node {
                    ...BlogNode
                }
            }
        }
    }
`;
