import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment-jalaali';

import { Layout } from '../components';

import BlogPostStyle from './blog-post.module.css';

export default ({ data }) => {
    const post = data.markdownRemark;
    const SeoData = {
        description: post.frontmatter.desc,
        title: post.frontmatter.title,
        date: moment(post.frontmatter.date, 'DD MMMM, YYYY').format(
            'jYYYY/jMM/jDD',
        ),
    };
    return (
        <Layout SeoData={SeoData}>
            <article className={BlogPostStyle.markdownPost}>
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
