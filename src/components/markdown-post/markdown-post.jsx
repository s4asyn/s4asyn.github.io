import React, { Children } from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */

/* import Style*/
import MarkDownStyle from './markdown-post.module.css';

/* Start Component */
const MarkDown = ({ children }) => (
    <article className={MarkDownStyle.postBody}>{children}</article>
);

MarkDown.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default MarkDown;
