import React from 'react';
import propTypes from 'prop-types';
/* import Subcomponent */
import HtmlHead from '../html-head';
import SEO from '../seo';
import Header from '../header';
import Footer from '../footer';
import Main from '../main';

const Layout = ({ SeoData, justSeo = false, children }) => (
    <>
        <HtmlHead />
        <SEO SeoData={SeoData} />
        <div className="antialiased">
            {justSeo ? (
                <div>{children}</div>
            ) : (
                <div className="max-w-full mx-4 lg:max-w-4xl lg:mx-auto">
                    <Header
                        PageTitle={SeoData.title}
                        PageSubtitle={SeoData.description}
                    />
                    <Main>{children}</Main>
                    <Footer />
                </div>
            )}
        </div>
    </>
);

Layout.propTypes = {
    SeoData: propTypes.object.isRequired,
    children: propTypes.node.isRequired,
};

export default Layout;
