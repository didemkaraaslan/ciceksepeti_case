import React from "react";

const Product = ({ imageX, image2X, name, freeDelivery, price }) => {
  return (
    <li className="p-card__item">
      <picture className="p-card__picture">
        <source srcset={`${imageX}, ${image2X} 2x"`} />
        <img srcSet={imageX} alt="Product" src={imageX} />
      </picture>

      <p className="p-card__title">{name}</p>
      <p className="p-card__subtitle">
        {freeDelivery ? "Ücretsiz Teslimat" : ""}
      </p>
      <p className="p-card__price">{price} TL</p>
      <button className="p-card__button">Sepete Ekle</button>
    </li>
  );
};

export default Product;
