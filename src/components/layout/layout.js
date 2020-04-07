import React, { Children } from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */

/* import Style*/
import LayoutStyle from './layout.module.css';

const Layout = ({ children }) => (
    <div className={LayoutStyle.container}>{children}</div>
);

Layout.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
