import React from 'react';
import './AuthButton.scss';

type Props = {
  text: string;
};

export const AuthButton: React.FC<Props> = ({ text }) => (
  <button type="submit" className="main-btn">
    {text}
  </button>
);
