import React from 'react';

/* import Subcomponent */
import Configs from '#configs';

/* Start Component */
const SocialLinks = ({ children }) => (
    <ul className="flex justify-center w-full px-24 mt-4 space-x-10 space-x-reverse">
        <li>
            <a href={`mailto:${Configs.metadata.contact.email}`}>
                <svg
                    className="w-8 h-8 text-red-500 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="heroicon-ui"
                        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
                    />
                </svg>
                <span className="text-xs text-secondary">E-Mail</span>
            </a>
        </li>
        <li>
            <a href={`https://twitter.com/${Configs.metadata.contact.twitter}`}>
                <svg
                    className="w-8 h-8 text-blue-400 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M23.95 4.57a10 10 0 01-2.82.77 4.96 4.96 0 002.16-2.72c-.95.56-2 .96-3.12 1.19a4.92 4.92 0 00-8.38 4.48A13.93 13.93 0 011.63 3.16a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.61v.06c0 2.38 1.7 4.37 3.95 4.82a5 5 0 01-2.21.09 4.94 4.94 0 004.6 3.42A9.87 9.87 0 010 19.54a14 14 0 007.56 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A9.94 9.94 0 0024 4.59l-.05-.02z" />
                </svg>
                <span className="text-xs text-secondary">Twitter</span>
            </a>
        </li>
        <li>
            <a href={`https://github.com/${Configs.metadata.contact.github}`}>
                <svg
                    className="w-8 h-8 fill-current text-secondary"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 011.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0012 .3" />
                </svg>
                <span className="text-xs text-secondary">GitHub</span>
            </a>
        </li>
        <li>
            <a href={`${Configs.metadata.contact.linkedin}`}>
                <svg
                    className="w-8 h-8 text-blue-700 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-xs text-secondary">LinkedIn</span>
            </a>
        </li>
    </ul>
);

export default SocialLinks;
