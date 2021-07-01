import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment-jalaali';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, MarkdownPost, TagList } from '#components';

const shortcodes = { Link }; // Provide common components here

export default function blogPost({ data }) {
    const post = data.mdx;
    const SeoData = {
        description: post.frontmatter.desc,
        title: post.frontmatter.title,
        date: moment(post.frontmatter.date, 'DD MMMM, YYYY').format(
            'jYYYY/jMM/jDD',
        ),
    };
    return (
        <Layout SeoData={SeoData}>
            <MarkdownPost>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{post.body}</MDXRenderer>
                </MDXProvider>
            </MarkdownPost>
            <div className="mt-16 ">
                <p className="mt-8 text-center text-secondary">
                    برچسب‌های این پست:
                </p>
                <TagList Tags={post.fields.slugtaglist} />
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                lang
                desc
            }
            fields {
                slug
                ...Tags
            }
        }
    }
`;
