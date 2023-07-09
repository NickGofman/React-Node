import React from 'react';
import classes from './nav.module.css';

const Nav = ({ handleLinkClick, activeLink }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a
            href="#"
            className={activeLink === 'home' ? classes.active : ''}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === 'activities' ? classes.active : ''}
            onClick={() => handleLinkClick('activities')}
          >
            Activities
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
