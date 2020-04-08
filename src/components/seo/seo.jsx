import React from 'react';
import Helmet from 'react-helmet';
/* import Subcomponent */
import { LanguageContextConsumer } from '../context';

/* import Style*/

const SEO = () => (
    <LanguageContextConsumer>
        {({ language }) => (
            <Helmet>
                <html lang={language} dir={language === 'fa' ? 'rtl' : 'ltr'} />
            </Helmet>
        )}
    </LanguageContextConsumer>
);

export default SEO;
