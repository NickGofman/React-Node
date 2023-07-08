import React from 'react';

const Nav = ({ handleLinkClick, activeLink }) => {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#"
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === 'activities' ? 'active' : ''}
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
