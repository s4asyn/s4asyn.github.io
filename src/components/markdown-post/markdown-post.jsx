import React, { useCallback, useEffect } from 'react';
import propTypes from 'prop-types';
import Clipboard from 'clipboard';
/* import Subcomponent */

/* import Style*/
import { postBody } from './markdown-post.module.css';

/* Start Component */
const MarkDown = ({ children }) => {
    const createCopyButton = useCallback(() => {
        const codes = global.document.querySelectorAll('.gatsby-highlight');

        codes.forEach((code) => {
            const button = document.createElement('button');
            button.setAttribute('class', 'copy-button');
            button.innerHTML = 'COPY';

            code.appendChild(button);
        });

        const clipboard = new Clipboard('.copy-button', {
            target: ({ previousElementSibling }) => previousElementSibling,
        });

        clipboard.on('success', (e) => {
            e.clearSelection();
        });
    }, []);

    useEffect(() => {
        createCopyButton();
    }, []);
    return <article className={postBody}>{children}</article>;
};

MarkDown.propTypes = {
    children: propTypes.node.isRequired,
};

export default MarkDown;
