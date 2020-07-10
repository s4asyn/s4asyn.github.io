import React from 'react';
import { Link, graphql } from 'gatsby';

import { Layout, SocialLinks } from '#components';
import MainStyle from '#components/main/main.module.css';

export default ({ data }) => {
    const SeoData = {
        description: 'صفحه‌ی خانگی',
        title: 'سعید عصائیان',
    };
    return (
        <Layout SeoData={SeoData} justSeo={true}>
            <div className={MainStyle.MainStyle}>
                <header className="flex flex-col justify-center w-full h-screen border border-black">
                    <h1 className="text-4xl font-bold text-center text-primary">
                        <Link to="/about">{SeoData.title}</Link>
                    </h1>
                    <SocialLinks />
                    <ul className="flex flex-wrap mt-16 text-lg font-semibold text-primary">
                        <li className="w-1/2 text-center">
                            <Link to="/fa/blog">نوشته‌ها</Link>(
                            {data.blog.totalCount})
                        </li>
                        <li className="w-1/2 text-center">
                            <Link to="/fa/library">کتاب‌خانه</Link>(
                            {data.library.totalCount})
                        </li>
                    </ul>
                </header>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        blog: allMdx(
            filter: {
                frontmatter: { published: { eq: "yes" }, type: { eq: "blog" } }
            }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        ...Tags
                    }
                }
            }
        }
        library: allMdx(
            filter: {
                frontmatter: { published: { eq: "yes" }, type: { eq: "book" } }
            }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        ...Tags
                    }
                }
            }
        }
    }
`;
