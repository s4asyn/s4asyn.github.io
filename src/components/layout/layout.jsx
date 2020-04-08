import React, { Children } from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */
import { LanguageContextProvider } from '../context';
import SEO from '../seo';

/* import Style*/
import LayoutStyle from './layout.module.css';

const Layout = ({ children }) => (
    <LanguageContextProvider>
        <SEO />
        <div className={LayoutStyle.container}>{children}</div>
    </LanguageContextProvider>
);

Layout.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
