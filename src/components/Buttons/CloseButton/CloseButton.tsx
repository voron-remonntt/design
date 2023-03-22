import React from 'react';
import { Link } from 'react-router-dom';
import './CloseButton.scss';

export const CloseButton: React.FC = () => (
  <Link to="/" className="close-icon">
    <div className="bx bx-x" />
  </Link>
);
