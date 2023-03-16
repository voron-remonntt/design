import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from '../LoginButton';
import './Navigate.scss';

export const Navigate: React.FC = () => (
  <nav className="nav">
    <Link to="/" className="nav__item">Home</Link>
    <Link to="/" className="nav__item">About Us</Link>
    <Link to="/" className="nav__item">Services</Link>
    <Link to="/" className="nav__item">Blog</Link>
    <Link to="/" className="nav__item">Contact Us</Link>

    <LoginButton />
  </nav>
);
