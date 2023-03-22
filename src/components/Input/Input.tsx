import React from 'react';
import './Input.scss';

type Props = {
  type: string;
  placeholder: string;
};

export const Ininput: React.FC<Props> = ({ type, placeholder }) => (
  <input
    className="input"
    type={type}
    required
    placeholder={placeholder}
  />
);
