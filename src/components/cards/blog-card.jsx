import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment-jalaali';
/* import Subcomponent */
import { TagList } from '../tags';

/* Start Component */
const BlogCard = ({ BlogNode }) => (
    <div className="mt-8 md:flex md:items-center ">
        <div>
            <p className="inline-block pt-2 text-sm italic text-secondary">
                {moment(BlogNode.frontmatter.date, 'DD MMMM, YYYY').format(
                    'jYYYY/jMM/jDD',
                )}
            </p>
        </div>
        <div className="pis-6 pie-6">
            <Link to={BlogNode.fields.slug}>
                <h3 className="text-xl font-semibold text-primary">
                    {BlogNode.frontmatter.title}
                </h3>
            </Link>
            <div className="md:flex">
                <p className="text-secondary">{BlogNode.frontmatter.desc}</p>
                <TagList Tags={BlogNode.fields.slugtaglist} />
            </div>
        </div>
    </div>
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
            ...Tags
        }
    }
`;
