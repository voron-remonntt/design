import React from 'react';
import { Link } from 'react-router-dom';
import './Navigate.scss';

export const Navigate: React.FC = () => (
  <nav className="nav">
    <Link to="/" className="nav__item">Home</Link>
    <Link to="/" className="nav__item">About Us</Link>
    <Link to="/" className="nav__item">Services</Link>
    <Link to="/" className="nav__item">Blog</Link>
    <Link to="/" className="nav__item">Contact Us</Link>

    <button type="button" className="btnLogin-pupup">Login</button>
  </nav>
);
