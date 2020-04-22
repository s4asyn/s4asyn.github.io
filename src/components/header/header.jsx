import React from 'react';
import propTypes from 'prop-types';
/* import Subcomponent */
import NavBar from './navbar';

/* Start Component */
const Header = ({ PageTitle, PageSubtitle }) => (
    <header className="border-b-2 border-gray-700">
        <NavBar />
        <div className="pt-32 pb-16 text-center">
            <h1 className="text-4xl text-primary font-extrabold">
                {PageTitle}
            </h1>
            <div className="text-xl text-secondary font-bold">
                {PageSubtitle}
            </div>
        </div>
    </header>
);

Header.propTypes = {
    PageTitle: propTypes.node.isRequired,
    PageSubtitle: propTypes.node.isRequired,
};

export default Header;
