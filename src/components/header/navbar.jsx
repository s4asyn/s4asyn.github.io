import React from 'react';
import { Link } from 'gatsby';
/* import Subcomponent */

/* Start Component */
const NavBar = () => (
    <ul className="flex justify-between bg-gray-200 px-4 text-gray-700">
        <li>
            <Link to="/">خانه</Link>
        </li>
        <li>
            <Link to="/about">درباره</Link>
        </li>
    </ul>
);

export default NavBar;
