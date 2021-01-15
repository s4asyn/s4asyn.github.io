import './src/styles/base.css';

import React from 'react';
import { WrapGatsbyPage } from '#components';

const HtmlAttributes = {
    lang: "fa",
    dir: "rtl"
}

const BodyAttributes = {
    className: "body-theme-light bg-body body-lang-farsi font-body"
}

export const onRenderBody = ({
    setHtmlAttributes,
    setBodyAttributes
}, pluginOptions) => {
    setHtmlAttributes(HtmlAttributes)
    setBodyAttributes(BodyAttributes)
}
export const wrapPageElement = ({ element, props }) => (
    <WrapGatsbyPage {...props}>{element}</WrapGatsbyPage>
);
