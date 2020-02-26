import React from 'react'

const ShopItem = ({ imgUrl, description }) => (
  <div className="shop__item">
    <img src={imgUrl} className="shop__img" alt="Shoe" />
    <p className="shop__text">{description}</p>
  </div>
)

export default ShopItem
