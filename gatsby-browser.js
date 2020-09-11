import React from 'react';
import { WrapGatsbyPage } from '#components';
import './src/styles/base.css';

export const wrapPageElement = ({ element, props }) => (
    <WrapGatsbyPage {...props}>{element}</WrapGatsbyPage>
);
