import React, { Children } from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */
import { LanguageContextProvider } from '../context';
import HtmlHead from '../html-head';
import SEO from '../seo';
/* import Style*/
import LayoutStyle from './layout.module.css';

const Layout = ({ SeoData, children }) => (
    <LanguageContextProvider>
        <HtmlHead />
        <SEO SeoData={SeoData} />
        <div className={LayoutStyle.layoutContainer}>{children}</div>
    </LanguageContextProvider>
);

Layout.PropTypes = {
    SeoData: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Layout;
