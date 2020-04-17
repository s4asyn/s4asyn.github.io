import React from 'react';
import PropTypes from 'prop-types';
/* import Subcomponent */
import NavBar from './navbar';

/* Start Component */
const Header = ({ PageTitle, PageSubtitle }) => (
    <header className="border-b-2 border-gray-700">
        <NavBar />
        <div className="pt-32 pb-16 text-center">
            <h1 className="text-4xl text-gray-900 font-extrabold">
                {PageTitle}
            </h1>
            <div className="text-xl text-gray-600 font-bold">
                {PageSubtitle}
            </div>
        </div>
    </header>
);

Header.PropTypes = {
    PageTitle: PropTypes.node.isRequired,
    PageSubtitle: PropTypes.node.isRequired,
};

export default Header;
