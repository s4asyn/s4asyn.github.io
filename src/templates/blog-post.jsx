import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment-jalaali';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, MarkdownPost } from '#components';

const shortcodes = { Link }; // Provide common components here

export default ({ data }) => {
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
                <ul className="flex justify-around max-w-xs mx-auto mt-4 md:max-w-sm">
                    {post.fields.slugtaglist.map((tag) => (
                        <li
                            key={`tag-${tag.tag}`}
                            className="z-10 inline-block px-2 mx-0 text-sm border border-2 rounded-full shadow-sm bg-nav text-primary"
                        >
                            <Link to={`${tag.slug}`}>#{tag.tag}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

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
                slugtaglist {
                    tag
                    slug
                }
            }
        }
    }
`;
