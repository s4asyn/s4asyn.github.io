import React from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */

/* import style */
import Style from './main.module.css';

const Main = ({ children }) => (
    <main className={Style.mainStyle}>{children}</main>
);

Main.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
