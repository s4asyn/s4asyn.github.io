import React from 'react';
import propTypes from 'prop-types';
/* import Subcomponent */
import HtmlHead from '../html-head';
import SEO from '../seo';
import Header from '../header';
import Main from '../main';
/* import Style*/
// import LayoutStyle from './layout.module.css';

const Layout = ({ SeoData, children }) => (
    <>
        <HtmlHead />
        <SEO SeoData={SeoData} />
        <div className="antialiased max-w-full mx-4 lg:max-w-4xl lg:mx-auto">
            <Header
                PageTitle={SeoData.title}
                PageSubtitle={SeoData.description}
            />
            <Main>{children}</Main>
        </div>
    </>
);

Layout.propTypes = {
    SeoData: propTypes.object.isRequired,
    children: propTypes.node.isRequired,
};

export default Layout;
