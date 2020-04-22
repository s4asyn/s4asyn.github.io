import React from 'react';
import propTypes from 'prop-types';
/* import Subcomponent */

/* import style */
import Style from './main.module.css';

const Main = ({ children }) => (
    <main className={Style.mainStyle}>{children}</main>
);

Main.propTypes = {
    children: propTypes.node.isRequired,
};

export default Main;
