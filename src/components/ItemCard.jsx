import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <Link to={`./shop/item/${item.id}`}>
      <div className="item-card p-1 text-center">
        <p className="item-name">{item.name}</p>
        <div className="item-img text-center">
          <img src={item.image_data} alt="Item" className="full-img" />
        </div>
        <div className="size flex-row justify-between m-1">
          <p>
            {item.size} {item.unit}
          </p>
          <span className="secondary">|</span>
          <p>{item.quantity} Pieces</p>
        </div>
        <p className="price m-1 secondary">
          {item.price} <span className="primary">EGP</span>
        </p>
      </div>
    </Link>
  );
};

export default ItemCard;
