/* eslint-disable no-irregular-whitespace */
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
              Rekonstrukce domu či bytu vyvolává jen příjemné emoce, pokud práce provádějí odborníci s bohatými dovednostmi.
            </div>
            <div className="more_info">
              Nabízíme různé druhy oprav v bytech, domech a kancelářských prostorách. Použití kvalitních materiálů.
            </div>
            <div className="more_info_2">
              <div className="more_info_2_content">
                Po objednání oprav u nás získejte měření zdarma a slevu 10% na dřevo
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
              Důvody nadměrných nákladů:
            </div>
            <div className="pruchunu_description">
              <p>
                Nesprávné měření, nesprávně zvolené množství materiálů nebo nesprávný sled prací
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
                  Moderní opravy bytů mohou být ekonomické,
                </span>
                {' '}
                pokud si vyberete zkušenou společnost.
                Pokud potřebujete rychle a kvalitně změnit vzhled svých prostor, jste na správné adrese.
              </div>
            </div>
          </div>
        </div>

        <div className="block_2">
          <div className="block_2_info">
            <div className="block_2_title">
              Často s pomocí kosmetických oprav je byt nebo dům připraven k dalšímu prodeji nebo pronájmu.
            </div>
            <div className="block_2_list_title">
              Nejtypičtější možnosti jsou:
            </div>

            <div className="block_2_list">
              <ul>
                <li>Úvod do projektu opravy</li>
                <li>Vyrovnání stěn, další dekorace (tapetou nebo barvou);</li>
                <li>Dekorace stropu (malba, instalace napínacího stropu);</li>
                <li>Výměna podlahy (nová laminátová podlaha, dlažba, parkety).</li>
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
                Aby výsledek překonal všechna očekávání zákazníka, musí mít mistr opravy bytu rozsáhlé zkušenosti s praktickou prací.
              </div>
              Etapy obkladačských prací:
              <ol>
                <li>
                  Demontáž starého nátěru.
                </li>
                <li>
                  Příprava povrchu pro pokládku obkladů – vyrovnání, odstranění vad, vylití potěrem nebo omítnutí stěn.
                </li>
                <li>
                  Sanace prostor pomocí sádrokartonových stěn a příček, montáž nebo výměna potrubí.

                </li>
                <li>
                  Revize elektrických komunikací, v případě potřeby provedení převodu elektroinstalace, instalace zásuvek.
                </li>
                <li>
                  Výměna sanitární keramiky, která zahrnuje demontáž opotřebovaných zařízení a prvků a montáž nových, tření izolace.
                </li>
                <li>
                  Začátek montáže obkladů libovolného formátu, řezání rohů pod úhlem 45 stupňů, epoxidové spárování švů.
                </li>
                <li>
                  Odvoz stavebního odpadu vzniklého během prací.
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
                  Spolehlivost je kombinována s vynikajícími dekorativními vlastnostmi.
                </div>
                <div className="block-4-content-title-2">
                  Existuje mnoho možností pro dlaždice - lesklé a matné, vyrobené z přírodních a syntetických materiálů.
                </div>
              </div>
              <div className="block-4-1 bl">
                Pokrytí podlahy keramickými dlaždicemi: povrch pro pokládku je předem pečlivě připraven - je vyčištěn a vyrovnán.

              </div>
              <div className="block-4-2 bl">
                Je možné použít omítku a izolaci. Dokončovací materiál je umístěn přesně podle přání zákazníka.

              </div>
              <div className="block-4-3 bl">
                Díky tomu bude povrch 100% splňovat vaše požadavky. Na hotový výsledek navíc nebudete muset dlouho čekat.
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
                Dřevěné schody nebo dveře naší firmy
                je individuální přístup ke specifikům
                Váš domov, s ohledem na vaše přání a
                styl
                <br />
                <br />
                Naše znalosti, zkušenosti a importovaná průmyslová zařízení vám umožní vyrobit spolehlivé, kvalitní a pohodlné schodiště nebo dveře z přírodních materiálů, které budou zdobit interiér po mnoho let.
              </div>
              <div className="block-6-description">
                Výroba schodišť a dveří
                z dubu, ořechu nebo jasanu. Používáme kvalitní materiály (lepidla, laky atd.).
                Nabízíme Vám dřevěné schody na kosours, tětivy nebo kombinovanou variantu.
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
                  Nabízíme vysoce kvalitní vlastní produkty
                  výroby nábytku, který se vyrábí
                  na moderní certifikované zařízení s
                  dřevo šetrné k životnímu prostředí.
                </div>
                <br />
                <div className="block-7-title-description">
                  Můžete si vybrat a objednat vysoce kvalitní dřevěné výrobky za přijatelné ceny. Naším hlavním úkolem je vytvořit atmosféru pohodlí v každém domě. Široká nabídka moderního nábytku a dalšího zboží pro domácnost prezentovaná na našich stránkách vám umožní proměnit každou místnost vašeho domu v centrum útulnosti, tepla a pohody.
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
              Galerie
              <br />
              projekty
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
              <div className="gallery-vanna gallery-chodu-description1">
                Výrobky z dlaždic
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
                Výrobky ze dřeva
              </div>
              <div className="gallery-chodu-description">
                &#40;Schody, dveře, stoly&#41;
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
              Výrobky z dlaždic
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
              Výrobky ze dřeva
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
                Schody
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
                Dveře
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
                Tabulky
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
              Schody
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
              Dveře
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
              Tabulky
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
            Naše společnost VORON se zabývá výrobou a
            montáž vysoce kvalitních dřevěných výrobků, vedení
            opravy na klíč. Pracujeme na technologii,
            poskytujeme záruční servis, jsme tu od toho, abychom to vyřešili
            Váš problém, nestát se jeho součástí.
          </div>
          <div className="contacts">
            <div className="contact-item">
              <Link to="https://instagram.com/__.voron._?igshid=MmJiY2I4NDBkZg==" className="contact-link">
                <i className="bx bxl-instagram" />
                &nbsp;
                Instagram
              </Link>
            </div>
            <div className="contact-item">
              <Link to="https://www.facebook.com/profile.php?id=100091388220951" className="contact-link">
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
              Rekonstrukce domu či bytu vyvolává jen příjemné emoce, pokud práce provádějí odborníci s bohatými dovednostmi.
            </div>
            <div className="mobile_info2">
              Nabízíme různé druhy oprav v bytech, domech a kancelářských prostorách. Použití kvalitních materiálů.
            </div>
            <div className="mobile_info3">
              <div className="mobile_info3_3">
                Po objednání oprav u nás získejte měření zdarma a slevu 10% na dřevo
              </div>
            </div>
          </div>
          <div className="mobile__block1">
            <div className="achor_about_mobile" id="about" />
            <div className="mobile__block1__title">
              Důvody nadměrných nákladů:
            </div>
            <div className="mobile__block1__description">
              Nesprávné měření, nesprávně zvolené množství materiálů nebo nesprávný sled prací
            </div>
            <div className="mobile__block1__description2">
              <span className="underline">
                Moderní opravy bytů mohou být ekonomické,
              </span>
              {' '}
              pokud si vyberete zkušenou společnost.
              Pokud potřebujete rychle a kvalitně změnit vzhled svých prostor, jste na správné adrese.
            </div>
            <img src={require('../../img/remontimg2.png')} alt="logo" className="mobile__block1__remontimg2" />
          </div>

          <div className="mobile__block2">
            <div className="mobile__block2__title">
              Často s pomocí kosmetických oprav je byt nebo dům připraven k dalšímu prodeji nebo pronájmu.
            </div>
            <div className="mobile__block2__description">
              Nejtypičtější možnosti jsou:
            </div>
            <div className="mobile__block2__description2">
              <ul className="mobile__block2__description2_list">
                <li>Úvod do projektu opravy</li>
                <li>Vyrovnání stěn, další dekorace (tapetou nebo barvou);</li>
                <li>Dekorace stropu (malba, instalace napínacího stropu);</li>
                <li>Výměna podlahy (nová laminátová podlaha, dlažba, parkety).</li>
              </ul>
            </div>
            <img src={require('../../img/block_2_img.png')} alt="logo" className="mobile__block2__block_2_img" />
          </div>

          <div className="mobile__block3">
            <div className="mobile__block3__title">
              Aby výsledek překonal všechna očekávání zákazníka, musí mít mistr opravy bytu rozsáhlé zkušenosti s praktickou prací.
            </div>
            <div className="mobile__block3__description">
              <div className="mobile__block3__description_title">
                Etapy obkladačských prací:
              </div>
              <ol className="mobile__block3__description_list">
                <li>
                  Demontáž starého nátěru.
                </li>
                <li>
                  Příprava povrchu pro pokládku obkladů – vyrovnání, odstranění vad, vylití potěrem nebo omítnutí stěn.
                </li>
                <li>
                  Sanace prostor pomocí sádrokartonových stěn a příček, montáž nebo výměna potrubí.
                </li>
                <li>
                  Revize elektrických komunikací, v případě potřeby provedení převodu elektroinstalace, instalace zásuvek.
                </li>
                <li>
                  Výměna sanitární keramiky, která zahrnuje demontáž opotřebovaných zařízení a prvků a montáž nových, tření izolace.
                </li>
                <li>
                  Začátek montáže obkladů libovolného formátu, řezání rohů pod úhlem 45 stupňů, epoxidové spárování švů.
                </li>
                <li>
                  Odvoz stavebního odpadu vzniklého během prací.
                </li>
              </ol>
            </div>

            <img src={require('../../img/vanna.png')} alt="logo" className="mobile__block3__vanna" />
          </div>

          <div className="mobile__block4">
            <div className="mobile__block4__title">
              Spolehlivost je kombinována s vynikajícími dekorativními vlastnostmi.
              <br />
              <br />
              Existuje mnoho možností pro dlaždice - lesklé a matné, vyrobené z přírodních a syntetických materiálů.
            </div>
            <div className="mobile__block4__description">
              Pokrytí podlahy keramickými dlaždicemi: povrch pro pokládku je předem pečlivě připraven - je vyčištěn a vyrovnán.
            </div>
            <div className="mobile__block4__description">
              Je možné použít omítku a izolaci. Dokončovací materiál je umístěn přesně podle přání zákazníka.
            </div>
            <div className="mobile__block4__description">
              Díky tomu bude povrch 100% splňovat vaše požadavky. Na hotový výsledek navíc nebudete muset dlouho čekat.
            </div>

            <img src={require('../../img/vanna2.png')} alt="logo" className="mobile__block4__vanna2" />
          </div>

          <div className="mobile__block5">
            <div className="mobile__block5__title">
              Dřevěné schody nebo dveře naší
              společnosti jsou individuálním přístupem
              k vlastnostem vašeho domova s ​ohledem na
              vaše přání a styl.
              <br />
              <br />
              Naše znalosti, zkušenosti a importovaná průmyslová zařízení vám umožní vyrobit spolehlivé, kvalitní a pohodlné schodiště nebo dveře z přírodních materiálů, které budou zdobit interiér po mnoho let.
            </div>
            <div className="mobile__block5__description">
              Výroba schodišť a dveří
              z dubu, ořechu nebo jasanu. Používáme kvalitní materiály (lepidla, laky atd.).
              Nabízíme Vám dřevěné schody na kosours, tětivy nebo kombinovanou variantu.
            </div>

            <img src={require('../../img/chodu.png')} alt="logo" className="mobile__block4__vanna2" />
          </div>

          <div className="mobile__block6">
            <div className="mobile__block6__title">
              Nabízíme vysoce kvalitní produkty vlastní výroby nábytku, které jsou vyrobeny na moderních certifikovaných zařízeních z ekologicky nezávadného dřeva.
            </div>
            <div className="mobile__block6__description">
              Můžete si vybrat a objednat vysoce kvalitní dřevěné výrobky za přijatelné ceny. Naším hlavním úkolem je vytvořit atmosféru pohodlí v každém domě. Široká nabídka moderního nábytku a dalšího zboží pro domácnost prezentovaná na našich stránkách vám umožní proměnit každou místnost vašeho domu v centrum útulnosti, tepla a pohody.
            </div>

            <img src={require('../../img/chodu2.png')} alt="logo" className="mobile__block4__vanna2" />
          </div>

          {visibilityGalary && (
            <div className="mobile__galery">
              <div className="achor_galery_mobile" id="galery" />
              <div className="mobile__galery__title">
                Galerie projektů
              </div>
              <div className="mobile__galery__container">
                <div
                  className="mobile__galery__plutka"
                  onClick={() => {
                    toglevisibilityGalary(!visibilityGalary);
                    toglevisibilityPlutka(!visibilityPlutka);
                  }}
                >
                  <img src={require('../../img/vanna.png')} alt="logo" className="mobile__galary" />
                  <div className="mobile__galery__button__title">
                    Výrobky z dlaždic
                  </div>
                </div>
                <div
                  className="mobile__galery__derevo"
                  onClick={() => {
                    toglevisibilityGalary(!visibilityGalary);
                    toglevisibilityVuroduDerevo(!visibilityVuroduDerevo);
                  }}
                >
                  <img src={require('../../img/gallery-chodu.png')} alt="logo" className="mobile__galary" />
                  <div className="mobile__galery__button__title">
                    Výrobky ze dřeva
                    <br />
                    (schody, dveře, stoly)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Вироби з плитки мобільна версія */}
          {visibilityPlutka && (
          <div className="plutka-vorobu">
            <div className="plutka-vorobu-container-title">
              <div className="empty">
                d
              </div>
              <div className="vorobu-title">
                Výrobky z dlaždic
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

          {/* Вироби з дерева мобільна версія */}
          {visibilityVuroduDerevo && (
          <div className="plutka-vorobu">
            <div className="plutka-vorobu-container-title">
              <div className="empty">
                d
              </div>
              <div className="vorobu-title">
                Výrobky ze dřeva
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
                  Schody
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
                  Dveře
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
                  Tabulky
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

          {/* Галерея сходів мобільна версія */}
          {visibilityChodu && (
          <div className="plutka-vorobu">
            <div className="plutka-vorobu-container-title">
              <div className="empty">
                d
              </div>
              <div className="vorobu-title">
                Schody
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

          {/* Галерея дверей мобільна версія */}
          {visibilityDvery && (
          <div className="plutka-vorobu">
            <div className="plutka-vorobu-container-title">
              <div className="empty">
                d
              </div>
              <div className="vorobu-title">
                Dveře
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

          {/* Галерея столів мобільна версія */}
          {visibilityStolu && (
          <div className="plutka-vorobu">
            <div className="plutka-vorobu-container-title">
              <div className="empty">
                d
              </div>
              <div className="vorobu-title">
                Tabulky
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
                  className="ctolu_mobile"
                />
              </div>
              <div className="plutka-block">
                <img
                  src={require('../../img/stolu/foto-stolu2.png')}
                  alt="foto-stolu"
                  className="ctolu_mobile"
                />
              </div>
              <div className="plutka-block">
                <img
                  src={require('../../img/stolu/foto-stolu3.png')}
                  className="ctolu_mobile"
                  alt="foto-stolu"
                />
              </div>
              <div className="plutka-block">
                <img
                  src={require('../../img/stolu/foto-stolu4.png')}
                  className="ctolu_mobile"
                  alt="foto-stolu"
                />
              </div>
              <div className="plutka-block">
                <img
                  src={require('../../img/stolu/foto-stolu5.png')}
                  className="ctolu_mobile"
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

          <footer className="mobile__footer" id="contact">
            <div className="mobile__footer-description">
              Naše společnost VORON se zabývá výrobou a
              montáž vysoce kvalitních dřevěných výrobků, vedení
              opravy na klíč. Pracujeme na technologii,
              poskytujeme záruční servis, jsme tu od toho, abychom to vyřešili
              Váš problém, nestát se jeho součástí.
            </div>
            <div className="mobile__contacts">
              <div className="mobile__contact-item">
                <Link to="https://instagram.com/__.voron._?igshid=MmJiY2I4NDBkZg==" className="mobile__contact-link">
                  <i className="bx bxl-instagram" />
                  &nbsp;
                  Instagram
                </Link>
              </div>
              <div className="mobile__contact-item">
                <Link to="https://www.facebook.com/profile.php?id=100091388220951" className="mobile__contact-link">
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
