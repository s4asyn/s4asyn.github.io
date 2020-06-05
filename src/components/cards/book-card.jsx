import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment-jalaali';
/* import Subcomponent */
import { Stars, TagList } from '../tags';

/* Start Component */
const BookCard = ({ BookNode }) => {
    const coverStyle = {
        backgroundImage: `url(${BookNode.frontmatter.cover.publicURL})`,
    };
    return (
        <div
            className="z-10 flex mx-4 mt-4 overflow-hidden border rounded-lg shadow-md border-primary"
            style={{
                width: '26rem',
                height: '18rem',
            }}
        >
            <div
                className="w-64 h-full bg-gray-500 bg-center bg-no-repeat bg-cover"
                style={coverStyle}
            />
            <div className="flex flex-col items-center justify-between w-full px-2">
                <p className="inline-block h-40 mt-2 overflow-hidden text-center text-primary">
                    {BookNode.frontmatter.desc}
                </p>
                <div className="inline-block pt-2 text-sm italic text-secondary">
                    تاریخ خوانش:{' '}
                    {moment(BookNode.frontmatter.date, 'DD MMMM, YYYY').format(
                        'jYYYY/jMM/jDD',
                    )}
                </div>
                <Stars rate={BookNode.frontmatter.rate} />
                <TagList Tags={BookNode.fields.slugtaglist} />
                <div className="h-8">
                    {BookNode.frontmatter.hasReview && (
                        <Link
                            className="mt-2 text-primary"
                            to={BookNode.fields.slug}
                        >
                            مروری بر کتاب
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookCard;

export const query = graphql`
    fragment BookNode on Mdx {
        id
        frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            lang
            desc
            rate
            hasReview
            cover {
                publicURL
            }
        }
        fields {
            slug
            ...Tags
        }
    }
`;
