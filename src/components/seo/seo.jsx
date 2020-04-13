import React from 'react';
import Helmet from 'react-helmet';
/* import Subcomponent */
const config = require('@s4/configs');
/* import Style*/

const SEO = ({ SeoData }) => (
    <Helmet
        title={SeoData.title}
        titleTemplate={`%s | ${config.metadata.title}`}
    >
        <meta name="description" content={SeoData.description} />
        {/* <meta name="image" content={config.cover} /> */}

        {/* <meta property="og:url" content={`${config.url}${location}`} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SeoData.title} />
        <meta property="og:description" content={SeoData.description} />
        {/* <meta property="og:image" content={config.cover} /> */}

        {/* <meta name="twitter:creator" content={config.social.twitter} /> */}
        {/* <meta name="twitter:site" content={config.socialLinks.twitter} /> */}
        {/* <meta name="twitter:image:src" content={config.cover} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content={SeoData.title} />
        <meta name="twitter:description" content={SeoData.description} />
    </Helmet>
);

export default SEO;
