import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment-jalaali';

import { Layout } from '#components';

const SeoData = {
    description: 'جستارها',
    title: 'سعید عصائیان',
};

export default ({ data }) => {
    return (
        <Layout SeoData={SeoData}>
            <article>
                {/* <h4>{data.allMdx.totalCount} Posts</h4> */}
                {data.allMdx.edges.map(({ node }) => (
                    <section key={node.id} className="mt-8">
                        <Link to={node.fields.slug}>
                            <h3 className="text-2xl font-semibold text-primary">
                                {node.frontmatter.title}
                            </h3>
                        </Link>
                        <p className="text-secondary italic">
                            {moment(
                                node.frontmatter.date,
                                'DD MMMM, YYYY',
                            ).format('jYYYY/jMM/jDD')}
                        </p>
                        <p className="">{node.frontmatter.desc}</p>
                    </section>
                ))}
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
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        lang
                        desc
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
