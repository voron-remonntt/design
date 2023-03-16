import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from '../Navigate/Navigate';
import './Header.scss';

export const Headers: React.FC = () => (
  <header className="header">
    <Link to="/" className="header__logo">Deer!</Link>
    <Navigate />
  </header>
);
