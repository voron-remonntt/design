/* eslint-disable max-len */
/* eslint-disable global-require */
import React from 'react';
import './Home.scss';

export const Home: React.FC = () => (
  <div className="container">
    <div className="info">
      <div className="title">
        Ремонт будинку або квартири викликає лише
        приємні емоції, якщо роботою займаються
        експерти з багажем умінь.
      </div>
      <div className="more_info">
        Ми пропонуємо різні види ремонтних робіт у квартирах, будинках та офісних приміщеннях. Використання якісних матеріалів.
      </div>
    </div>

    <div className="img">
      <img src={require('../../img/homepageimg.png')} alt="logo" className="homeimg" />
    </div>
  </div>
);
