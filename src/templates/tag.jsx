import React from 'react';
import { graphql } from 'gatsby';

import { Layout, BlogCard } from '#components';

export default ({ data, pageContext }) => {
    const SeoData = {
        title: `فهرست مطالب دارای برچسب "${pageContext.tag}"`,
        description: `تعداد نتایج: ${data.allMdx.totalCount}`,
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
};

export const query = graphql`
    query($tag: String!) {
        allMdx(
            filter: {
                frontmatter: { tags: { in: [$tag] }, published: { eq: "yes" } }
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
