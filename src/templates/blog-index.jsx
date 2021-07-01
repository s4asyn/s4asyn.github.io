import React from 'react';
import { graphql } from 'gatsby';

import { Layout, BlogCard } from '#components';

export default function blogIndex({ data }) {
    const SeoData = {
        title: `فهرست مطالب وبلاگ`,
        description: `تعداد مطلب: ${data.allMdx.totalCount}`,
    };
    return (
        <Layout SeoData={SeoData}>
            <article>
                <section>
                    {data.allMdx.edges.map(({ node }) => (
                        <BlogCard key={node.id} BlogNode={node} />
                    ))}
                </section>
            </article>
        </Layout>
    );
}

export const query = graphql`
    query($lang: String!) {
        allMdx(
            filter: {
                frontmatter: {
                    published: { eq: "yes" }
                    lang: { eq: $lang }
                    type: { eq: "blog" }
                }
            }
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
