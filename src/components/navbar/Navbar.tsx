/* eslint-disable global-require */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { NavItem } from './navItem/NavItem';

export const Navbar: React.FC = () => {
  const [clik, setClick] = useState(false);

  const handleClik = () => setClick(!clik);

  return (
    <nav className="nav">
      <div className="nav__container">
        <NavLink to="/" className="nav__logo">
          <img src={require('../../img/logo.png')} alt="logo" className="nav_logo_img" />
        </NavLink>

        <ul className={clik ? 'nav__menu active' : 'nav__menu'}>

          <NavItem
            to="/"
            event={handleClik}
            text="Home"
          />

          <NavItem
            to="/about"
            event={handleClik}
            text="About us"
          />

          <NavItem
            to="/blog"
            event={handleClik}
            text="Blog"
          />

          <NavItem
            to="/contact"
            event={handleClik}
            text="Contact us"
          />

          <NavItem
            to="/login"
            event={handleClik}
            text="Login"
          />
        </ul>

        <div
          className="nav__icon"
          onClick={handleClik}
        >
          <i className={clik ? 'bx bx-window-close' : 'bx bx-menu'} />
        </div>
      </div>
    </nav>
  );
};
