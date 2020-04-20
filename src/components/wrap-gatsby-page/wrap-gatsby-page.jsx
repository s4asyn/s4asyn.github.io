import React, { Children } from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */
import { ContextProvider } from '#states';

/* Start Component */
const WrapGatsbyPage = ({ children }) => (
    <ContextProvider>{children}</ContextProvider>
);

WrapGatsbyPage.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default WrapGatsbyPage;
