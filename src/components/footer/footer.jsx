import React from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */
import { ContextConsumer } from '#states';
import SocialLinks from '../tags/social-links';

/* Start Component */
const Footer = () => (
    <ContextConsumer>
        {({ language }) => (
            <footer className="mt-12 mb-4 border-t-2 border-primary">
                <p className="mt-2 text-center text-secondary">
                    مطالب این وبلاگ تحت مجوز{' '}
                    <a
                        href="https://creativecommons.org/licenses/by-sa/4.0/deed.fa"
                        className="inline-block border-b-2 border-secondary"
                    >
                        {' '}
                        اختیار-اشتراک مشابه 4.0 بین‌المللی{' '}
                        <span className="bidi-en">(CC BY-SA 4.0)</span>{' '}
                    </a>
                    قرار دارد.
                </p>
                <p className="mt-1 text-center text-secondary">
                    از راه‌های زیر می‌توانیم در ارتباط باشیم :)
                </p>
                <SocialLinks />
            </footer>
        )}
    </ContextConsumer>
);

export default Footer;
