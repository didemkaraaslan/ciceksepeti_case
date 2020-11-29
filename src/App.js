import React from "react";
import logo from "./images/logo.svg";
// components
import Product from "./components/Product";
// svg icons
import SearchIcon from "./images/icon_search.svg";
import BasketIcon from "./images/icon_basket.svg";
import MenuIcon from "./images/icon_menu.svg";
import LeafIcon from "./images/icon_leaf.svg";

// png images
import discount1 from "./images/discount1.png";
import discount1Large from "./images/discount1@2x.png";
import discount2 from "./images/discount2.png";
import discount2Large from "./images/discount2@2x.png";
import discount3 from "./images/discount3.png";
import discount3Large from "./images/discount3@2x.png";
import phoneImage from "./images/our_apps.png";
import phoneImageLarge from "./images/our_apps@2x.png";
import code from "./images/qrcode.png";
import codeLarge from "./images/qrcode@2x.png";

import { products } from "./products";

const App = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="çiçeksepeti logo" className="logo" />
        <form action="#" className="search">
          <img src={SearchIcon} className="search__icon" />
          <input type="text" className="search__input" placeholder="Ürün Ara" />
          <button className="search__button">Ara</button>
        </form>

        <div className="basket">
          <button className="basket__button">
            <img src={BasketIcon} className="basket__icon" />

            <span className="basket__text">Sepetim</span>
          </button>
        </div>
      </header>

      <div className="banner">
        <span className="banner__header">ÇiçekSepeti H1</span>
      </div>

      <div className="breadcrumb">
        <ul className="breadcrumb__list">
          <li className="breadcrumb__item">Ciceksepeti Market</li>
          <li className="breadcrumb__item">İstanbul</li>
          <li className="breadcrumb__item">ÇiçeksepetiBreadCrumb</li>
        </ul>
      </div>

      <div className="content">
        <nav className="category-menu">
          <div className="category-menu__head">
            <img
              src={MenuIcon}
              alt="Category Menu Icon"
              className="category-menu__icon"
            />

            <p className="category-menu__header">Kategoriler</p>
          </div>

          <div className="category-menu__content">
            <ul className="category-menu__list">
              <li className="category-menu__item">Tüm Kategoriler</li>
              <li className="category-menu__item">Elektronik</li>
              <li className="category-menu__item">Ev ve Yaşam</li>
              <li className="category-menu__item">Evcil Hayvan</li>
              <li className="category-menu__item">Kitap</li>
              <li className="category-menu__item">Oyuncak</li>
              <li className="category-menu__item">Spor</li>
              <li className="category-menu__item">Çiçek (120)</li>
              <li className="category-menu__item">Hediye</li>
              <li className="category-menu__item">Moda, Aksesuar</li>
              <li className="category-menu__item">Ofis, Kırtasiye</li>
              <li className="category-menu__item">Parfüm</li>
              <li className="category-menu__item">Kişisel Bakım</li>
              <li className="category-menu__item">Petshop</li>
            </ul>
          </div>
        </nav>

        <div className="product">
          <div className="product__head">
            <img src={LeafIcon} alt="Leaf  Icon" className="product__icon" />

            <p className="product__header">Kategoriler</p>
          </div>
        </div>

        <div className="p-card">
          <ul className="p-card__list">
            {products.map((product) => (
              <Product {...product} />
            ))}
          </ul>
        </div>

        <div className="discount">
          <ul className="discount__list">
            <li className="discount__item">
              <div className="discount__container">
                <img src={discount1} alt="" className="discount__image" />
                <div className="discount__content">
                  <p className="discount__title">
                    75 TL Üzerine Teslimat Ücreti Bizden
                  </p>
                  <a href="#" className="discount__link">
                    Detaylı Bilgi
                  </a>
                </div>
              </div>
            </li>

            <li className="discount__item">
              <div className="discount__container">
                <img src={discount2} alt="" className="discount__image" />
                <div className="discount__content">
                  <p className="discount__title">
                    75 TL Üzerine Teslimat Ücreti Bizden
                  </p>
                  <a href="#" className="discount__link">
                    Detaylı Bilgi
                  </a>
                </div>
              </div>
            </li>
            <li className="discount__item">
              <div className="discount__container">
                <img src={discount3} alt="" className="discount__image" />
                <div className="discount__content">
                  <p className="discount__title">
                    75 TL Üzerine Teslimat Ücreti Bizden
                  </p>
                  <a href="#" className="discount__link">
                    Detaylı Bilgi
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        {/* Our Apps */}
        <div className="our-apps">
          <div className="our-apps__left">
            <img
              src={phoneImage}
              alt="Phone Image"
              className="our-apps__image"
            />
          </div>
          <div className="our-apps__right">
            <div className="our-apps__qrcode">
              <img
                src={code}
                alt="QR Code"
                className="our-apps__qrcode-image"
              />
              <div className="our-apps__content">
                <p className="our-apps__qrcode-title">
                  Çiçek Sepeti Mobil Uygulamayı İndirin{" "}
                </p>
                <p className="our-apps__qrcode-subtitle">
                  Mobil Uygulamayı QR Kod ile İndirin
                </p>
              </div>
            </div>

            <ul className="our-apps__links">
              <li className="our-apps__link our-apps__link--googleplay" />
              <li className="our-apps__link our-apps__link--appstore" />
            </ul>
          </div>
        </div>

        <div className="box">
          <div className="box__left">
            <img src={logo} alt="çiçeksepeti logo" className="box__logo" />
            <ul className="social-menu">
              <li className="social-menu__item social-menu__item--facebook"></li>
              <li className="social-menu__item social-menu__item--twitter"></li>
              <li className="social-menu__item social-menu__item--instagram"></li>
              <li className="social-menu__item social-menu__item--youtube"></li>
              <li className="social-menu__item social-menu__item--blog"></li>
            </ul>

            <p className="box__description">
              CicekSepeti.com olarak kişisel verilerinizin gizliliğini
              önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
              kapsamında oluşturduğumuz aydınlatma metnine buradan
              ulaşabilirsiniz.
            </p>
          </div>
          <div className="box__right">
            <ul className="footer-menu">
              <li className="footer-menu__item">
                <ul className="footer-menu__submenu">
                  <li className="footer-menu__submenu__item footer-menu__submenu__item--header">
                    Faydalı Bilgiler
                  </li>
                  <li className="footer-menu__submenu__item">Çiçek Bakımı</li>
                  <li className="footer-menu__submenu__item">
                    Çiçek Eşliğinde Notlar
                  </li>
                  <li className="footer-menu__submenu__item">
                    Çiçek Anlamları
                  </li>
                  <li className="footer-menu__submenu__item">Özel Günler</li>
                  <li className="footer-menu__submenu__item">
                    Mevsimlere Göre Çiçekler
                  </li>
                  <li className="footer-menu__submenu__item">
                    BonnyFood Saklama Koşulları
                  </li>
                  <li className="footer-menu__submenu__item">Site Haritası</li>
                </ul>
              </li>

              <li className="footer-menu__item">
                <ul className="footer-menu__submenu">
                  <li className="footer-menu__submenu__item footer-menu__submenu__item--header">
                    Kurumsal
                  </li>
                  <li className="footer-menu__submenu__item">Hakkımızda</li>
                  <li className="footer-menu__submenu__item">Kariyer</li>
                  <li className="footer-menu__submenu__item">
                    ÇiçekSepeti'nde Satış Yap
                  </li>
                  <li className="footer-menu__submenu__item">
                    Kurumsal Müşterilerimiz
                  </li>
                  <li className="footer-menu__submenu__item">Reklamlarımız</li>
                  <li className="footer-menu__submenu__item">Basında Biz</li>
                  <li className="footer-menu__submenu__item">Kampanyalar</li>
                  <li className="footer-menu__submenu__item">Vizyonumuz</li>
                </ul>
              </li>

              <li className="footer-menu__item">
                <ul className="footer-menu__submenu">
                  <li className="footer-menu__submenu__item footer-menu__submenu__item--header">
                    İletişim
                  </li>
                  <li className="footer-menu__submenu__item">Bize Ulaşın</li>
                  <li className="footer-menu__submenu__item">
                    Sıkça Sorulan Sorular
                  </li>
                </ul>
              </li>

              <li className="footer-menu__item">
                <ul className="footer-menu__submenu">
                  <li className="footer-menu__submenu__item footer-menu__submenu__item--header">
                    Gizlilik Sözleşmesi
                  </li>
                  <li className="footer-menu__submenu__item">
                    Mesafeli Satış Sözleşmesi
                  </li>
                  <li className="footer-menu__submenu__item">
                    Bilgi Toplumu Hizmetleri
                  </li>
                  <li className="footer-menu__submenu__item">
                    Gizlilik Sözleşmesi
                  </li>
                  <li className="footer-menu__submenu__item">
                    Ödeme Seçenekleri
                  </li>
                  <li className="footer-menu__submenu__item">
                    Hesap Bilgileri
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="description">
          Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi
          mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi”
          Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek
          gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz
          Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze
          çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından
          beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş
          verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu
          günlerinde onların sevincine ortak olmak için yapmanız gereken sadece
          birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler
          Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood
          ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin
          adresi; ÇiçekSepeti.
        </div>
        <div className="copyright">
          Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
        </div>
      </footer>
    </>
  );
};

export default App;
