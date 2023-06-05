/* eslint-disable max-len */
/* eslint-disable global-require */
import React from 'react';
import './Home.scss';

export const Home: React.FC = () => (
  <div>
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
        <div className="more_info_2">
          <div className="more_info_2_content">
            Замовивши ремонт в нас отримайте безкоштовні заміри та знижку 10% на деревину
          </div>
        </div>
      </div>

      <div className="img">
        <img src={require('../../img/homepageimg.png')} alt="logo" className="homeimg" />
      </div>
    </div>
    <div className="block_1">
      <div className="pruchunu">
        <div className="pruchunu_title">
          Причини зайвих витрат:
        </div>
        <div className="pruchunu_description">
          <p>
            Хибні заміри, неправильно підібрана кількість матеріалів чи помилкова послідовність виконання робіт
          </p>
          {' '}
          <br />
          <img src={require('../../img/remontimg.png')} alt="Img" className="remontimg" />
        </div>

      </div>
      <div className="pruchunu_2">

        <div className="remont_info">
          <img src={require('../../img/remontimg2.png')} alt="Img" className="remontimg2" />
          <span className="underline">
            Сучасний ремонт квартир може бути економним,
          </span>
          {' '}
          якщо обрати досвідчену компанію.
          Якщо необхідно швидко та якісно змінити вигляд вашого приміщення ви звернулися по адресу.
        </div>
      </div>
    </div>

    <div className="block_2">
      <div className="block_2_info">
        <div className="block_2_title">
          Часто за допомогою косметичного ремонту квартиру чи будинок готують для подальшого продажу чи оренди.
        </div>
        <div className="block_2_list_title">
          Найтиповішими варіантами є:
        </div>

        <div className="block_2_list">
          <ul>
            <li>Ознайомлення з проєктом ремонту</li>
            <li>Вирівнювання стін , подальше оформлення (шпалерами чи фарбою);</li>
            <li>Декорування стелі (фарбування, встановлення натяжної стелі);</li>
            <li>Заміна підлоги (новий ламінат, плитка, паркет).</li>
          </ul>

        </div>
      </div>
      <img src={require('../../img/block_2_img.png')} alt="logo" className="block_2_img" />
    </div>
  </div>
);
