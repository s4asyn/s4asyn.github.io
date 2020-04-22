import React, { Children } from 'react';
import propTypes from 'prop-types';
/* import Subcomponent */
import { ContextProvider } from '#states';

/* Start Component */
const WrapGatsbyPage = ({ children }) => (
    <ContextProvider>{children}</ContextProvider>
);

WrapGatsbyPage.propTypes = {
    children: propTypes.node.isRequired,
};

export default WrapGatsbyPage;
