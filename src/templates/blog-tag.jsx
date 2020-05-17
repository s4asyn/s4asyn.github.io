import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment-jalaali';

import { Layout } from '#components';

export default ({ data, pageContext }) => {
    const SeoData = {
        description: `فهرست مطالب وبلاگ دارای برچسب "${pageContext.tag}"`,
        title: 'سعید عصائیان',
    };
    return (
        <Layout SeoData={SeoData}>
            <article>
                {/* <h4>{data.allMdx.totalCount} Posts</h4> */}
                {data.allMdx.edges.map(({ node }) => (
                    <section
                        key={node.id}
                        className="mt-8 md:flex md:items-center "
                    >
                        <div>
                            <p className="inline-block pt-2 text-sm italic text-secondary">
                                {moment(
                                    node.frontmatter.date,
                                    'DD MMMM, YYYY',
                                ).format('jYYYY/jMM/jDD')}
                            </p>
                        </div>
                        <div className="pis-6 pie-6">
                            <Link to={node.fields.slug}>
                                <h3 className="text-2xl font-semibold text-primary">
                                    {node.frontmatter.title}
                                </h3>
                            </Link>
                            <div className="md:flex">
                                <p className="text-secondary">
                                    {node.frontmatter.desc}
                                </p>
                                <ul className="flex items-baseline justify-center mt-2 mis-4 md:mt-0 md:justify-start">
                                    {node.fields.slugtaglist.map((tag) => (
                                        <li
                                            key={`${node.frontmatter.title}-${tag.tag}`}
                                            className="z-10 inline-block px-2 mx-1 text-sm border border-2 rounded-full shadow-sm border-secondary bg-nav text-primary"
                                        >
                                            <Link to={`${tag.slug}`}>
                                                #{tag.tag}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                ))}
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
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        lang
                        desc
                        tags
                    }
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
`;
