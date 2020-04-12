import React from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */

const Main = ({ children }) => <main className="">{children}</main>;

Main.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
