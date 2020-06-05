import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment-jalaali';
/* import Subcomponent */

/* Start Component */
const BlogCard = ({ BlogNode }) => (
    <dev className="mt-8 md:flex md:items-center ">
        <div>
            <p className="inline-block pt-2 text-sm italic text-secondary">
                {moment(BlogNode.frontmatter.date, 'DD MMMM, YYYY').format(
                    'jYYYY/jMM/jDD',
                )}
            </p>
        </div>
        <div className="pis-6 pie-6">
            <Link to={BlogNode.fields.slug}>
                <h3 className="text-2xl font-semibold text-primary">
                    {BlogNode.frontmatter.title}
                </h3>
            </Link>
            <div className="md:flex">
                <p className="text-secondary">{BlogNode.frontmatter.desc}</p>
                <ul className="flex items-baseline justify-center mt-2 mis-4 md:mt-0 md:justify-start">
                    {BlogNode.fields.slugtaglist.map((tag) => (
                        <li
                            key={`${BlogNode.frontmatter.title}-${tag.tag}`}
                            className="z-10 inline-block px-2 mx-1 text-sm border border-2 rounded-full shadow-sm bg-nav text-primary"
                        >
                            <Link to={`${tag.slug}`}>#{tag.tag}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </dev>
);

export default BlogCard;

export const query = graphql`
    fragment BlogNode on Mdx {
        id
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
`;
