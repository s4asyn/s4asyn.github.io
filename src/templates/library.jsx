import React from 'react';
import { graphql } from 'gatsby';

import { Layout, BookCard } from '#components';

export default function library({ data }) {
    const SeoData = {
        title: `فهرست کتاب‌خانه`,
        description: `تعداد کتاب: ${data.allMdx.totalCount}`,
    };
    return (
        <Layout SeoData={SeoData}>
            <article>
                <section className="flex flex-wrap justify-around">
                    {data.allMdx.edges.map(({ node }) => (
                        <BookCard key={node.id} BookNode={node} />
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
                    type: { eq: "book" }
                }
            }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            totalCount
            edges {
                node {
                    ...BookNode
                }
            }
        }
    }
`;
