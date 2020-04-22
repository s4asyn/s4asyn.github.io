import React from 'react';
import Helmet from 'react-helmet';
/* import Subcomponent */
import { ContextConsumer } from '#states';
const config = require('#configs');

/* import Style*/

const SEO = ({ SeoData }) => (
    <ContextConsumer>
        {({ language }) => (
            <Helmet
                title={SeoData.title}
                titleTemplate={`%s | ${config.metadata.title}`}
            >
                <link
                    rel="icon"
                    href={config.metadata.favicon}
                    type="image/x-icon"
                />
                <link
                    rel="shortcut icon"
                    href={config.metadata.favicon}
                    type="image/x-icon"
                />
                <meta name="robots" content="index, follow" />
                <meta name="description" content={SeoData.description} />
                {SeoData.cover && <meta name="image" content={SeoData.cover} />}
                <meta
                    property="og:locale"
                    content={language === 'fa' ? 'fa_IR' : 'en_US'}
                />
                {config.metadata.url && SeoData.slung && (
                    <meta
                        property="og:url"
                        content={`${config.metadata.url}${SeoData.slung}`}
                    />
                )}
                <meta
                    property="og:type"
                    content={SeoData.type === 'article' ? 'article' : 'website'}
                />
                <meta property="og:title" content={SeoData.title} />
                <meta property="og:description" content={SeoData.description} />
                {SeoData.cover && (
                    <meta name="og:image" content={SeoData.cover} />
                )}

                {config.metadata.contact && config.metadata.contact.twitter && (
                    <meta
                        name="twitter:creator"
                        content={`@${config.metadata.contact.twitter}`}
                    />
                )}
                {config.metadata.url && (
                    <meta name="twitter:site" content={config.metadata.url} />
                )}
                {SeoData.cover && (
                    <meta name="twitter:card" content={SeoData.cover} />
                )}
                <meta name="twitter:title" content={SeoData.title} />
                <meta
                    name="twitter:description"
                    content={SeoData.description}
                />
            </Helmet>
        )}
    </ContextConsumer>
);

export default SEO;
