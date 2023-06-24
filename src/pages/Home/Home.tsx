/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { useState } from 'react';
import './Home.scss';
import './Home_mobile.scss';
import { Link } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
export const Home: React.FC = () => {
  const [visibilityGalary, toglevisibilityGalary] = useState<boolean>(true);
  const [visibilityPlutka, toglevisibilityPlutka] = useState<boolean>(false);
  const [visibilityVuroduDerevo, toglevisibilityVuroduDerevo] = useState<boolean>(false);
  const [visibilityChodu, toglevisibilityChodu] = useState<boolean>(false);
  const [visibilityDvery, toglevisibilityDvery] = useState<boolean>(false);
  const [visibilityStolu, toglevisibilityStolu] = useState<boolean>(false);

  return (
    <>
      {window.innerWidth > 650 && (
      <div>
        <div className="achor_home" id="home" />
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
          <div className="achor_about" id="about" />
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
              <div className="remont_info_text">
                <span className="underline">
                  Сучасний ремонт квартир може бути економним,
                </span>
                {' '}
                якщо обрати досвідчену компанію.
                Якщо необхідно швидко та якісно змінити вигляд вашого приміщення ви звернулися по адресу.
              </div>
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

        <div className="block-3">
          <div className="block-3-container">
            <div className="block-3-container-img">
              <img src={require('../../img/vanna.png')} alt="logo" className="vanna-img" />
            </div>

            <div className="block-3-content">
              <div className="block-3-content-title">
                Щоб результат перевершив усі очікування замовника, майстер ремонту квартир повинен мати великий досвід практичної роботи.
              </div>
              Етапи плиточних робіт:
              <ol>
                <li>
                  Демонтаж старого покриття.
                </li>
                <li>
                  Підготовка поверхні до монтажу плитки – вирівнювання, усунення дефектів, заливання стяжки або штукатурка стін.
                </li>
                <li>
                  Перепланування приміщення із застосуванням гіпсокартонних стін та перегородок, встановлення або заміна труб.

                </li>
                <li>
                  Ревізія електричних комунікацій, у разі потреби виконання перенесення проводки, монтаж розеток.
                </li>
                <li>
                  Заміна сантехніки, що включає демонтаж пристроїв, що зносилися, і елементів і монтаж нових ,натерання ізоляції.
                </li>
                <li>
                  Початок монтажу плитки любого формату,вирізання углів під 45 градусів,епоксвдна затірка швів.
                </li>
                <li>
                  Вивіз будівельного сміття, що утворилося в ході робіт.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="block-4">
          <div className="block-4-container">
            <div className="block-4-content">
              <div className="block-4-content-title">
                <div className="block-4-content-title-1">
                  Надійність поєднується з чудовими декоративними властивостями.
                </div>
                <div className="block-4-content-title-2">
                  Існує безліч варіантів плитки – глянсових та матових, виконаних з натуральних та синтетичних матеріалів.
                </div>
              </div>
              <div className="block-4-1 bl">
                Облицювання підлоги керамічною плиткою: поверхня для укладання попередньо ретельно готується – очищується та вирівнюється.

              </div>
              <div className="block-4-2 bl">
                Можливе використання штукатурки та утеплювача. Оздоблювальний матеріал розміщується саме так, як хоче замовник.

              </div>
              <div className="block-4-3 bl">
                В результаті поверхня буде на 100% відповідати вашим вимогам. Крім того, вам не доведеться довго чекати готовий результат.
              </div>
            </div>
            <div className="block-4-container-img">
              <img src={require('../../img/vanna2.png')} alt="logo" className="vanna2-img" />
            </div>
          </div>
        </div>
        {/* блок сходів */}
        <div className="block-3  bc-black">
          <div className="block-3-container">
            <div className="block-3-container-img">
              <img src={require('../../img/chodu.png')} alt="logo" className="vanna-img" />
            </div>

            <div className="block-3-content">
              <div className="block-6">
                Дерев’яні сходи або двері нашого підприємства
                — це індивідуальний підхід до особливостей
                Вашої оселі з врахуванням Ваших побажань і
                стилю.
                <br />
                <br />
                Наші знання, досвід та імпортне промислове обладнання дозволять виготовити для Вас надійні,якісні та зручні сходи або двері з натуральних матеріалів які стануть окрасою інтер’єра на довгі роки.
              </div>
              <div className="block-6-description">
                Виготовлення сходів і дверей
                з дуба, горіха або ясена. Ми приміняєм високоякісні матеріали (клеї, лаки та ін.).
                Пропонуємо Вам дерев’яні сходи на косоурах, тятивах або комбінований варіант.
              </div>
            </div>
          </div>
        </div>

        {/* блок сходів 2 */}
        <div className="block-4 bc-black">
          <div className="block-4-container">
            <div className="block-4-content">
              <div className="block-4-content-title">
                <div className=".block-7-title">
                  Ми пропонує високоякісну продукцію власного
                  меблевого виробництва, котра виготовляється
                  на сучасному сертифікованому обладнанні з
                  екологічно чистої деревини.
                </div>
                <br />
                <div className="block-7-title-description">
                  Ви можете обрати та замовити якісні вироби з дерева ¬за доступними цінами. Наше головне завдання полягає у створенні атмосфери комфорту в кожній оселі. Широкий асортимент сучасних меблів та інших товарів для дому, що представлений на нашому сайті, дозволить перетворити кожну кімнату Вашого будинку в осередок затишку, тепла та добробуту.
                </div>
              </div>
            </div>
            <div className="block-4-container-img">
              <img src={require('../../img/chodu2.png')} alt="logo" className="vanna2-img" />
            </div>
          </div>
        </div>

        {/* галерея проєктів */}
        {visibilityGalary && (
        <>
          <div className="achor_galery" id="galery" />
          <div className="gallery">
            <div className="gallery-title">
              Галерея
              <br />
              проєктів
            </div>
            <div
              className="gallery-vanna"
              onClick={() => {
                toglevisibilityGalary(!visibilityGalary);
                toglevisibilityPlutka(!visibilityPlutka);
              }}
            >
              <img
                src={require('../../img/gallery-vanna.png')}
                alt="logo"
                className="gallery-vanna-img"
              />
              <div className="gallery-vanna gallery-chodu-description">
                Плиточні вироби
              </div>
            </div>
            <div
              className="gallery-chodu"
              onClick={() => {
                toglevisibilityGalary(!visibilityGalary);
                toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
              }}
            >
              <img
                src={require('../../img/gallery-chodu.png')}
                alt="logo"
                className="gallery-vanna-img pointer"
              />
              <div className="gallery-chodu-description">
                Вироби з дерева
              </div>
              <div className="gallery-chodu-description">
                &#40;Сходи, двері, столи&#41;
              </div>
            </div>
          </div>
        </>
        )}
        {/* Вироби з плитки */}
        {visibilityPlutka && (
        <div className="plutka-vorobu">
          <div className="plutka-vorobu-container-title">
            <div className="empty">
              d
            </div>
            <div className="vorobu-title">
              Плиточні вироби
            </div>
            <div
              className="cencel-button pointer"
              onClick={() => {
                toglevisibilityGalary(!visibilityGalary);
                toglevisibilityPlutka(!visibilityPlutka);
              }}
            >
              <i className="gg-close-o" />
            </div>
          </div>

          <div className="plutka-content">
            <div className="plutka-block">
              <img
                src={require('../../img/plutka1.png')}
                alt="plutka-img"
                className="plutka-img"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/plutka2.png')}
                alt="plutka-img"
                className="plutka-img"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/plutka3.png')}
                alt="plutka-img"
                className="plutka-img"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/plutka4.png')}
                alt="plutka-img"
                className="plutka-img"
              />
            </div>
          </div>

          <div className="plutka-content">
            <div className="plutka-block">
              <img
                src={require('../../img/plutka5.png')}
                alt="plutka-img"
                className="plutka-img"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/plutka6.png')}
                alt="plutka-img"
                className="plutka-img"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/plutka7.png')}
                alt="plutka-img"
                className="plutka-img"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/plutka8.png')}
                alt="plutka-img"
                className="plutka-img"
              />
            </div>
          </div>

          <div
            className="back-button visibility pointer"
            onClick={() => {
              toglevisibilityGalary(!visibilityGalary);
              toglevisibilityPlutka(!visibilityPlutka);
            }}
          >
            <i className="gg-chevron-left-o" />
          </div>
        </div>
        )}

        {/* Вироби з дерева */}
        {visibilityVuroduDerevo && (
        <div className="plutka-vorobu">
          <div className="plutka-vorobu-container-title">
            <div className="empty">
              d
            </div>
            <div className="vorobu-title">
              Вироби з дерева
            </div>
            <div
              className="cencel-button pointer "
              onClick={() => {
                toglevisibilityGalary(!visibilityGalary);
                toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
              }}
            >
              <i className="gg-close-o" />
            </div>
          </div>

          <div className="plutka-content">
            <div
              className="plutka-block"
              onClick={() => {
                toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
                toglevisibilityChodu(!visibilityChodu);
              }}
            >
              <img
                src={require('../../img/chodu-button1.png')}
                alt="plutka-img"
                className="plutka-img pointer"
              />
              <div className="plutka-block-description visibility pointer">
                Сходи
              </div>
            </div>
            <div
              className="plutka-block"
              onClick={() => {
                toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
                toglevisibilityDvery(!visibilityDvery);
              }}
            >
              <img
                src={require('../../img/dvery-button1.png')}
                alt="plutka-img"
                className="plutka-img pointer"
              />
              <div className="plutka-block-description visibility pointer">
                Двері
              </div>
            </div>

            <div
              className="plutka-block"
              onClick={() => {
                toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
                toglevisibilityStolu(!visibilityStolu);
              }}
            >
              <img
                src={require('../../img/stil-button1.png')}
                alt="plutka-img"
                className="plutka-img pointer"
              />
              <div className="plutka-block-description visibility pointer">
                Столи
              </div>
            </div>
          </div>

          <div
            className="back-button visibility pointer pointer"
            onClick={() => {
              toglevisibilityGalary(!visibilityGalary);
              toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
            }}
          >
            <i className="gg-chevron-left-o" />
          </div>
        </div>
        )}

        {/* Галерея сходів */}
        {visibilityChodu && (
        <div className="plutka-vorobu">
          <div className="plutka-vorobu-container-title">
            <div className="empty">
              d
            </div>
            <div className="vorobu-title">
              Сходи
            </div>
            <div
              className="cencel-button pointer pointer"
              onClick={() => {
                toglevisibilityChodu(!visibilityChodu);
                toglevisibilityGalary(!visibilityGalary);
              }}
            >
              <i className="gg-close-o" />
            </div>
          </div>

          <div className="plutka-content">
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu1.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu2.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu3.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu4.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu5.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu6.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu7.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu8.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu9.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu10.png')}
                alt="foto-chodu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/foto-chodu/foto-chodu11.png')}
                alt="foto-chodu"
              />
            </div>
          </div>

          <div
            className="back-button visibility pointer"
            onClick={() => {
              toglevisibilityChodu(!visibilityChodu);
              toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
            }}
          >
            <i className="gg-chevron-left-o" />
          </div>
        </div>
        )}

        {/* Галерея дверей */}
        {visibilityDvery && (
        <div className="plutka-vorobu">
          <div className="plutka-vorobu-container-title">
            <div className="empty">
              d
            </div>
            <div className="vorobu-title">
              Двері
            </div>
            <div
              className="cencel-button pointer"
              onClick={() => {
                toglevisibilityDvery(!visibilityDvery);
                toglevisibilityGalary(!visibilityGalary);
              }}
            >
              <i className="gg-close-o" />
            </div>
          </div>

          <div className="plutka-content">
            <div className="plutka-block">
              <img
                src={require('../../img/dvery/foto-dvery1.png')}
                alt="foto-dvery"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/dvery/foto-dvery2.png')}
                alt="foto-dvery"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/dvery/foto-dvery3.png')}
                alt="foto-dvery"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/dvery/foto-dvery4.png')}
                alt="foto-dvery"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/dvery/foto-dvery5.png')}
                alt="foto-dvery"
              />
            </div>
          </div>

          <div
            className="back-button visibility pointer"
            onClick={() => {
              toglevisibilityDvery(!visibilityDvery);
              toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
            }}
          >
            <i className="gg-chevron-left-o" />
          </div>
        </div>
        )}

        {/* Галерея столів */}
        {visibilityStolu && (
        <div className="plutka-vorobu">
          <div className="plutka-vorobu-container-title">
            <div className="empty">
              d
            </div>
            <div className="vorobu-title">
              Столи
            </div>
            <div
              className="cencel-button pointer"
              onClick={() => {
                toglevisibilityStolu(!visibilityStolu);
                toglevisibilityGalary(!visibilityGalary);
              }}
            >
              <i className="gg-close-o" />
            </div>
          </div>

          <div className="plutka-content">
            <div className="plutka-block">
              <img
                src={require('../../img/stolu/foto-stolu1.png')}
                alt="foto-stolu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/stolu/foto-stolu2.png')}
                alt="foto-stolu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/stolu/foto-stolu3.png')}
                alt="foto-stolu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/stolu/foto-stolu4.png')}
                alt="foto-stolu"
              />
            </div>
            <div className="plutka-block">
              <img
                src={require('../../img/stolu/foto-stolu5.png')}
                alt="foto-stolu"
              />
            </div>
          </div>

          <div
            className="back-button visibility pointer"
            onClick={() => {
              toglevisibilityStolu(!visibilityStolu);
              toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
            }}
          >
            <i className="gg-chevron-left-o" />
          </div>
        </div>
        )}

        {/* футтер */}

        <footer className="footer" id="contact">
          <div className="footer-description">
            Наша компанія VORON займається виготовленням і
            монтажем якісних виробів з дерева , проведенням
            ремонтних робіт під ключ. Працюємо за технологією,
            надаємо гарантію на послуги .Ми тут щоб вирішити
            Вашу проблему, а не стати її частиною.
          </div>
          <div className="contacts">
            <div className="contact-item">
              <Link to="https://www.instagram.com/" className="contact-link">
                <i className="bx bxl-instagram" />
                &nbsp;
                Instagram
              </Link>
            </div>
            <div className="contact-item">
              <Link to="https://www.facebook.com/" className="contact-link">
                <i className="bx bxl-facebook-circle" />
                &nbsp;
                Facebook
              </Link>
            </div>
            <div className="contact-item">
              <Link to="tel:+420776364030" className="contact-link">
                <i className="bx bxs-phone-call" />
        &nbsp;+420776364030
              </Link>
            </div>
            <div className="contact-item">
              <Link to="tel:+420773025437" className="contact-link">
                <i className="bx bxs-phone-call" />
        &nbsp;+420773025437
              </Link>
            </div>
          </div>
          <div className="contact-copyriting">
            Copyright 2023 Protect My Work Limited. All Rights Reserved.
          </div>
        </footer>
      </div>
      )}
      {window.innerWidth < 650 && (
        <div className="mobile">
          <div className="achor_home" id="home" />
          <div className="mobile__header">
            <div className="mobile_info1">
              Ремонт будинку або квартири викликає лише приємні емоції, якщо роботою займаються експерти з багажем умінь.
            </div>
            <div className="mobile_info2">
              Ми пропонуємо різні види ремонтних робіт у квартирах, будинках та офісних приміщеннях. Використання якісних матеріалів.
            </div>
            <div className="mobile_info3">
              <div className="mobile_info3_3">
                Замовивши ремонт в нас отримайте безкоштовні заміри та знижку 10% на деревину
              </div>
            </div>
          </div>
          <div className="mobile__block1">
            <div className="achor_about_mobile" id="about" />
            <div className="mobile__block1__title">
              Причини зайвих витрат:
            </div>
            <div className="mobile__block1__description">
              Хибні заміри, неправильно підібрана кількість матеріалів чи помилкова послідовність виконання робіт
            </div>
            <div className="mobile__block1__description2">
              <span className="underline">
                Сучасний ремонт квартир може бути економним,
              </span>
              {' '}
              якщо обрати досвідчену компанію.
              Якщо необхідно швидко та якісно змінити вигляд вашого приміщення ви звернулися по адресу.
            </div>
            <img src={require('../../img/remontimg2.png')} alt="logo" className="mobile__block1__remontimg2" />
          </div>

          <div className="mobile__block2">
            <div className="mobile__block2__title">
              Часто за допомогою косметичного ремонту квартиру чи будинок готують для подальшого продажу чи оренди.
            </div>
            <div className="mobile__block2__description">
              Найтиповішими варіантами є:
            </div>
            <div className="mobile__block2__description2">
              <ul className="mobile__block2__description2_list">
                <li>Ознайомлення з проєктом ремонту</li>
                <li>Вирівнювання стін , подальше оформлення (шпалерами чи фарбою);</li>
                <li>Декорування стелі (фарбування, встановлення натяжної стелі);</li>
                <li>Заміна підлоги (новий ламінат, плитка, паркет).</li>
              </ul>
            </div>
            <img src={require('../../img/block_2_img.png')} alt="logo" className="mobile__block2__block_2_img" />
          </div>

          <div className="mobile__block3">
            <div className="mobile__block3__title">
              Щоб результат перевершив усі очікування замовника, майстер ремонту квартир повинен мати великий досвід практичної роботи.
            </div>
            <div className="mobile__block3__description">
              <div className="mobile__block3__description_title">
                Етапи плиточних робіт:
              </div>
              <ol className="mobile__block3__description_list">
                <li>
                  Демонтаж старого покриття.
                </li>
                <li>
                  Підготовка поверхні до монтажу плитки – вирівнювання, усунення дефектів, заливання стяжки або штукатурка стін.
                </li>
                <li>
                  Перепланування приміщення із застосуванням гіпсокартонних стін та перегородок, встановлення або заміна труб.

                </li>
                <li>
                  Ревізія електричних комунікацій, у разі потреби виконання перенесення проводки, монтаж розеток.
                </li>
                <li>
                  Заміна сантехніки, що включає демонтаж пристроїв, що зносилися, і елементів і монтаж нових ,натерання ізоляції.
                </li>
                <li>
                  Початок монтажу плитки любого формату,вирізання углів під 45 градусів,епоксвдна затірка швів.
                </li>
                <li>
                  Вивіз будівельного сміття, що утворилося в ході робіт.
                </li>
              </ol>
            </div>

            <img src={require('../../img/vanna.png')} alt="logo" className="mobile__block3__vanna" />
          </div>

          <div className="mobile__block4">
            <div className="mobile__block4__title">
              Надійність поєднується з чудовими декоративними властивостями.
              <br />
              <br />
              Існує безліч варіантів плитки – глянсових та матових, виконаних з натуральних та синтетичних матеріалів.
            </div>
            <div className="mobile__block4__description">
              Облицювання підлоги керамічною плиткою: поверхня для укладання попередньо ретельно готується – очищується та вирівнюється.
            </div>
            <div className="mobile__block4__description">
              Можливе використання штукатурки та утеплювача. Оздоблювальний матеріал розміщується саме так, як хоче замовник.
            </div>
            <div className="mobile__block4__description">
              В результаті поверхня буде на 100% відповідати вашим вимогам. Крім того, вам не доведеться довго чекати готовий результат.
            </div>

            <img src={require('../../img/vanna2.png')} alt="logo" className="mobile__block4__vanna2" />
          </div>

          <div className="mobile__block5">
            <div className="mobile__block5__title">
              Дерев’яні сходи або двері нашого підприємства — це індивідуальний підхід до особливостей Вашої оселі з врахуванням Ваших побажань і стилю.
              <br />
              <br />
              Наші знання, досвід та імпортне промислове обладнання дозволять виготовити для Вас надійні,якісні та зручні сходи або двері з натуральних матеріалів які стануть окрасою інтер’єра на довгі роки.
            </div>
            <div className="mobile__block5__description">
              Виготовлення сходів і дверей
              з дуба, горіха або ясена. Ми приміняєм високоякісні матеріали (клеї, лаки та ін.).
              Пропонуємо Вам дерев’яні сходи на косоурах, тятивах або комбінований варіант.
            </div>

            <img src={require('../../img/chodu.png')} alt="logo" className="mobile__block4__vanna2" />
          </div>

          <div className="mobile__block6">
            <div className="mobile__block6__title">
              Ми пропонує високоякісну продукцію власного меблевого виробництва, котра виготовляється на сучасному сертифікованому обладнанні з екологічно чистої деревини.
            </div>
            <div className="mobile__block6__description">
              Ви можете обрати та замовити якісні вироби з дерева ¬за доступними цінами. Наше головне завдання полягає у створенні атмосфери комфорту в кожній оселі. Широкий асортимент сучасних меблів та інших товарів для дому, що представлений на нашому сайті, дозволить перетворити кожну кімнату Вашого будинку в осередок затишку, тепла та добробуту.
            </div>

            <img src={require('../../img/chodu2.png')} alt="logo" className="mobile__block4__vanna2" />
          </div>

          <div className="mobile__galery">
            <div className="achor_galery_mobile" id="galery" />
            <div className="mobile__galery__title">
              Галерея проектів
            </div>
            <div className="mobile__galery__container">
              <div className="mobile__galery__plutka">
                <img src={require('../../img/vanna.png')} alt="logo" className="mobile__galary" />
                <div className="mobile__galery__button__title">
                  Плиточні вироби
                </div>
              </div>
              <div className="mobile__galery__derevo">
                <img src={require('../../img/gallery-chodu.png')} alt="logo" className="mobile__galary" />
                <div className="mobile__galery__button__title">
                  Вироби з дерева
                  <br />
                  (Сходи, двері, столи)
                </div>
              </div>
            </div>
          </div>

          <footer className="mobile__footer" id="contact">
            <div className="mobile__footer-description">
              Наша компанія VORON займається виготовленням і
              монтажем якісних виробів з дерева , проведенням
              ремонтних робіт під ключ. Працюємо за технологією,
              надаємо гарантію на послуги .Ми тут щоб вирішити
              Вашу проблему, а не стати її частиною.
            </div>
            <div className="mobile__contacts">
              <div className="mobile__contact-item">
                <Link to="https://www.instagram.com/" className="mobile__contact-link">
                  <i className="bx bxl-instagram" />
                  &nbsp;
                  Instagram
                </Link>
              </div>
              <div className="mobile__contact-item">
                <Link to="https://www.facebook.com/" className="mobile__contact-link">
                  <i className="bx bxl-facebook-circle" />
                  &nbsp;
                  Facebook
                </Link>
              </div>

            </div>
            <div className="mobile__contacts">
              <div className="mobile__contact-item">
                <Link to="tel:+420776364030" className="mobile__contact-link">
                  <i className="bx bxs-phone-call" />
        &nbsp;+420776364030
                </Link>
              </div>
              <div className="mobile__contact-item">
                <Link to="tel:+420773025437" className="mobile__contact-link">
                  <i className="bx bxs-phone-call" />
        &nbsp;+420773025437
                </Link>
              </div>
            </div>
            <div className="mobile__contacts-copyriting">
              Copyright 2023 Protect My Work Limited. All Rights Reserved.
            </div>
          </footer>

        </div>
      )}
    </>
  );
};
