import React from 'react';
import Helmet from 'react-helmet';
/* import Subcomponent */
import { ContextConsumer } from '#states';

const HtmlHead = () => (
    <ContextConsumer>
        {({ language, theme }) => (
            <Helmet>
                <html
                    lang={language}
                    dir={language === 'fa_IR' ? 'rtl' : 'ltr'}
                />
                <body
                    className={`${
                        theme === 'light'
                            ? 'body-theme-light'
                            : 'body-theme-dark'
                    } bg-body
                    ${
                        language === 'fa_IR'
                            ? 'body-lang-farsi'
                            : 'body-lang-english'
                    } font-body`}
                />
            </Helmet>
        )}
    </ContextConsumer>
);

export default HtmlHead;
