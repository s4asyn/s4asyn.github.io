import React, { Children } from 'react';
import propTypes from 'prop-types';
/* import Subcomponent */

/* import Style*/
import MarkDownStyle from './markdown-post.module.css';

/* Start Component */
const MarkDown = ({ children }) => (
    <article className={MarkDownStyle.postBody}>{children}</article>
);

MarkDown.propTypes = {
    children: propTypes.node.isRequired,
};

export default MarkDown;
