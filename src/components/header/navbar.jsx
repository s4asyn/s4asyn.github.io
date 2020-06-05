import React from 'react';
import { Link } from 'gatsby';
/* import Subcomponent */
import ThemeSwitcher from './theme-switcher';

/* Start Component */
const NavBar = () => (
    <ul className="flex justify-between px-4 bg-nav text-primary">
        <li>
            <Link to="/">خانه</Link>
        </li>
        <li>
            <Link to="/fa/blog">بلاگ</Link>
        </li>
        <li>
            <ThemeSwitcher />
        </li>
        <li>
            <Link to="/fa/library">کتاب‌خانه</Link>
        </li>
        <li>
            <Link to="/about">درباره</Link>
        </li>
    </ul>
);

export default NavBar;
