import React from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */
import { ContextProvider } from '#states';
import HtmlHead from '../html-head';
import SEO from '../seo';
import Header from '../header';
import Main from '../main';
/* import Style*/
// import LayoutStyle from './layout.module.css';

const Layout = ({ SeoData, children }) => (
    <ContextProvider>
        <HtmlHead />
        <SEO SeoData={SeoData} />
        <div className="antialiased max-w-full mx-4 lg:max-w-4xl lg:mx-auto">
            <Header
                PageTitle={SeoData.title}
                PageSubtitle={SeoData.description}
            />
            <Main>{children}</Main>
        </div>
    </ContextProvider>
);

Layout.PropTypes = {
    SeoData: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Layout;
