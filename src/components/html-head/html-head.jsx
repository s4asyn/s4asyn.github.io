import React from 'react';
import Helmet from 'react-helmet';
/* import Subcomponent */
import { LanguageContextConsumer } from '../context';
const config = require('@s4/configs');

/* import Style*/

const HtmlHead = () => (
    <LanguageContextConsumer>
        {({ language }) => (
            <Helmet>
                <html lang={language} dir={language === 'fa' ? 'rtl' : 'ltr'} />
                <link rel="shortcut icon" href={config.metadata.favicon} />
                <meta name="robots" content="index, follow" />
                {/* <meta name="image" content={config.cover} /> */}
            </Helmet>
        )}
    </LanguageContextConsumer>
);

export default HtmlHead;
