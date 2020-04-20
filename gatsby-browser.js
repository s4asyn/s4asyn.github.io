import './src/styles/base.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import React from 'react';
import { WrapGatsbyPage } from '#components';

export const wrapPageElement = ({ element, props }) => (
    <WrapGatsbyPage {...props}>{element}</WrapGatsbyPage>
);
