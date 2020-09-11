import './src/styles/base.css';
import React from 'react';
import { WrapGatsbyPage } from '#components';

export const wrapPageElement = ({ element, props }) => (
    <WrapGatsbyPage {...props}>{element}</WrapGatsbyPage>
);
