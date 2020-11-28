import React from "react";
import logo from "./images/logo.svg";
import Product from "./components/Product";
import SearchIcon from "./images/icon_search.svg";
import BasketIcon from "./images/icon_basket.svg";
import MenuIcon from "./images/icon_menu.svg";
import LeafIcon from "./images/icon_leaf.svg";
import product1 from "./images/product1.png";
import product1Large from "./images/product1@2x.png";
import discount1 from "./images/discount1.png";
import discount1Large from "./images/discount1@2x.png";
import discount2 from "./images/discount2.png";
import discount2Large from "./images/discount2@2x.png";
import discount3 from "./images/discount3.png";
import discount3Large from "./images/discount3@2x.png";

const products = [
  {
    imageX: product1,
    image2X: product1Large,
    name: "Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth",
    freeDelivery: true,
    price: "399,90",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name: "Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
    freeDelivery: false,
    price: "145,61",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name: "Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
    freeDelivery: true,
    price: "249,90",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name: "925 Ayar Gümüş Çeyreklik Bileklik (Y)",
    freeDelivery: false,
    price: "329,90",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name:
      "Sailor SD-3160 Siyah Dağcı Seyehat Sırt Çantası 55 LT Outdoor-Trekking",
    freeDelivery: true,
    price: "499,90",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name: "Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev..",
    freeDelivery: true,
    price: "19,90",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name: "130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
    freeDelivery: true,
    price: "89,90",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name: "925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
    freeDelivery: true,
    price: "29,90",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name: "Özel Tatlar Çikolata Kutusu 300 gr",
    freeDelivery: true,
    price: "59,90",
  },
  {
    imageX: product1,
    image2X: product1Large,
    name: "Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
    freeDelivery: false,
    price: "199,90",
  },
];

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

      <footer className="footer"></footer>
    </>
  );
};

export default App;
