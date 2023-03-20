import React, { useState } from 'react';
import './Navigate.scss';
import { NavItem } from './navItem/NavItem';

export const Navigate: React.FC = () => {
  const [clik, setClick] = useState(false);

  const handleClik = () => setClick(!clik);

  return (
    <nav className="nav">
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
      </ul>

      <div
        className="nav__icon"
        onClick={handleClik}
      >
        <i className={clik ? 'bx bx-window-close' : 'bx bx-menu'} />
      </div>
    </nav>
  );
};
