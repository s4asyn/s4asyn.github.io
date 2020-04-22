import React from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */
import { ContextConsumer } from '#states';

import Configs from '#configs';
/* import Style*/
// import Style from './footer.module.css';

/* Start Component */
const Footer = () => (
    <ContextConsumer>
        {({ language }) => (
            <footer className="mt-12 mb-4 border-t-2 border-gray-600">
                <p className="text-center text-secondary mt-2">
                    مطالب این وبلاگ تحت مجوز{' '}
                    <a href="">
                        {' '}
                        اختیار-اشتراک مشابه 4.0 بین‌المللی (CC BY-SA 4.0){' '}
                    </a>
                    قرار دارد.
                </p>
                <ul className="flex justify-around w-full px-24 mt-4">
                    <li>
                        <a href={`mailto:${Configs.metadata.contact.email}`}>
                            <svg
                                className="w-8 h-8 text-red-500 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    class="heroicon-ui"
                                    d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href={`https://twitter.com/${Configs.metadata.contact.twitter}`}
                        >
                            <svg
                                className="w-8 h-8 text-blue-400 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M23.95 4.57a10 10 0 01-2.82.77 4.96 4.96 0 002.16-2.72c-.95.56-2 .96-3.12 1.19a4.92 4.92 0 00-8.38 4.48A13.93 13.93 0 011.63 3.16a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.61v.06c0 2.38 1.7 4.37 3.95 4.82a5 5 0 01-2.21.09 4.94 4.94 0 004.6 3.42A9.87 9.87 0 010 19.54a14 14 0 007.56 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A9.94 9.94 0 0024 4.59l-.05-.02z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href={`https://github.com/${Configs.metadata.contact.github}`}
                        >
                            <svg
                                className="w-8 h-8 fill-current text-secondary"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 011.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0012 .3" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </footer>
        )}
    </ContextConsumer>
);

export default Footer;
