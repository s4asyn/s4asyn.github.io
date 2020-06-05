import React from 'react';
import { Link, graphql } from 'gatsby';
/* import Subcomponent */

/* Start Component */
const TagList = ({ Tags }) => (
    <ul className="flex flex-wrap items-baseline justify-center mt-2 mis-4 md:mt-0">
        {Tags.map((tag) => (
            <li
                key={tag.tag}
                className="z-10 inline-block px-2 m-1 text-sm border border-2 rounded-full shadow-sm bg-nav text-primary"
            >
                <Link to={`${tag.slug}`}>#{tag.tag}</Link>
            </li>
        ))}
    </ul>
);

export default TagList;

export const query = graphql`
    fragment Tags on MdxFields {
        slugtaglist {
            tag
            slug
        }
    }
`;
