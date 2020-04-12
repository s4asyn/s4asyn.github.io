import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';

export default ({ data }) => {
    const post = data.markdownRemark;
    const SeoData = {
        description: post.frontmatter.desc,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
    };
    return (
        <Layout SeoData={SeoData}>
            <article className="mt-8">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                lang
                desc
            }
        }
    }
`;
