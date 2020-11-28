import React from "react";
import logo from "./images/logo.svg";
import SearchIcon from "./images/icon_search.svg";
import BasketIcon from "./images/icon_basket.svg";
import MenuIcon from "./images/icon_menu.svg";
import LeafIcon from "./images/icon_leaf.svg";
import product1 from "./images/product1.png";
import product1Large from "./images/product1@2x.png";

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
            <li className="p-card__item">
              <picture className="p-card__picture">
                <img srcSet={product1} alt="Product 1" src={product1} />
              </picture>

              <p className="p-card__title">
                Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth
              </p>
              <p className="p-card__subtitle">Ücretsiz Teslimat</p>
              <p className="p-card__price">399,90 TL</p>
              <button className="p-card__button">Sepete Ekle</button>
            </li>

            <li className="p-card__item">
              <picture className="p-card__picture">
                <img srcSet={product1} alt="Product 1" src={product1} />
              </picture>

              <p className="p-card__title">
                Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth
              </p>
              <p className="p-card__subtitle">Ücretsiz Teslimat</p>
              <p className="p-card__price">399,90 TL</p>
              <button className="p-card__button">Sepete Ekle</button>
            </li>
          </ul>
        </div>
      </div>

      <footer className="footer"></footer>
    </>
  );
};

export default App;
