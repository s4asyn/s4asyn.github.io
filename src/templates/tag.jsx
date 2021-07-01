import React from 'react';
import { graphql } from 'gatsby';

import { Layout, BlogCard, BookCard } from '#components';

export default function tag({ data, pageContext }) {
    const SeoData = {
        title: `فهرست مطالب دارای برچسب "${pageContext.tag}"`,
        description: `تعداد نتایج: ${data.blog.totalCount}`,
    };
    return (
        <Layout SeoData={SeoData}>
            <article>
                <section>
                    <h4 className="mt-8 text-2xl font-semibold text-primary">
                        نتایج در کتابخانه:
                    </h4>
                    <div className="flex flex-wrap justify-around">
                        {data.library.edges.map(({ node }) => (
                            <BookCard key={node.id} BookNode={node} />
                        ))}
                    </div>
                </section>
                <section>
                    <h4 className="mt-8 text-2xl font-semibold text-primary">
                        نتایج در وبلاگ:
                    </h4>
                    {data.blog.edges.map(({ node }) => (
                        <BlogCard key={node.id} BlogNode={node} />
                    ))}
                </section>
            </article>
        </Layout>
    );
}

export const query = graphql`
    query($tag: String!) {
        blog: allMdx(
            filter: {
                frontmatter: {
                    tags: { in: [$tag] }
                    published: { eq: "yes" }
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
        library: allMdx(
            filter: {
                frontmatter: {
                    tags: { in: [$tag] }
                    published: { eq: "yes" }
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
