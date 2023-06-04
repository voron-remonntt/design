import React from 'react';
import { Link } from 'react-router-dom';
import './CloseButton.scss';

type Props = {
  redirectTo: string;
  event?: any;
};

export const CloseButton: React.FC<Props> = ({ redirectTo, event }) => (
  <Link to={redirectTo} className="close-icon" onClick={event}>
    <div className="bx bx-x" />
  </Link>
);

CloseButton.defaultProps = {
  event: () => {},
};
