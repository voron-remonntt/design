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
    <div className="gallery">
      <div className="gallery-title">
        Галерея
        <br />
        проєктів
      </div>
      <div className="gallery-vanna">
        <img
          src={require('../../img/gallery-vanna.png')}
          alt="logo"
          className="gallery-vanna-img"
        />
        <div className="gallery-vanna gallery-chodu-description">
          Плиточні вироби
        </div>
      </div>
      <div className="gallery-chodu">
        <img
          src={require('../../img/gallery-chodu.png')}
          alt="logo"
          className="gallery-vanna-img"
        />
        <div className="gallery-chodu-description">
          Вироби з дерева
        </div>
        <div className="gallery-chodu-description">
          &#40;Сходи, двері, столи&#41;
        </div>
      </div>
    </div>

    {/* футтер */}

    <footer className="footer">
      <div className="footer-description">
        Наша компанія VORON займається виготовленням і
        монтажем якісних виробів з дерева , проведенням
        ремонтних робіт під ключ. Працюємо за технологією,
        надаємо гарантію на послуги .Ми тут щоб вирішити
        Вашу проблему, а не стати її частиною.
      </div>
    </footer>
  </div>
);
