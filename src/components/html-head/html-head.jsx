import React from 'react';
import Helmet from 'react-helmet';
/* import Subcomponent */
import { ContextConsumer } from '#states';

const config = require('#configs');

/* import Style*/

const HtmlHead = () => (
    <ContextConsumer>
        {({ language }) => (
            <Helmet>
                <html lang={language} dir={language === 'fa' ? 'rtl' : 'ltr'} />
                <link rel="shortcut icon" href={config.metadata.favicon} />
                <meta name="robots" content="index, follow" />
                {/* <meta name="image" content={config.cover} /> */}
            </Helmet>
        )}
    </ContextConsumer>
);

export default HtmlHead;
