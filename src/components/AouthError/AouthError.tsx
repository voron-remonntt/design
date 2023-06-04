import React from 'react';
import { CloseButton } from '../Buttons/CloseButton/CloseButton';
import './AouthError.scss';

type Props = {
  title: string;
  message: string;
  RedirectTo: string;
  event: any
};

export const AouthError: React.FC<Props> = ({
  title, message, RedirectTo, event,
}) => (
  <div className="error_message">
    <h2 className="error_title">{title}</h2>
    <p className="error_title">{message}</p>

    <CloseButton redirectTo={RedirectTo} event={event} />
  </div>
);
