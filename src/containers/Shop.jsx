import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { showTraderItems } from '../Helpers';
import '../styles/shop.css';

const Shop = () => {
  const [items, setItems] = useState();
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));
  useEffect(() => {
    showTraderItems(trader_token).then((items) => setItems(items));
  }, []);
  return (
    <div className="shop">
      <div className="advertise flex-row justify-between">
        <p className="alert-good none">
          You can expand your shop by upgrading your plan.
        </p>
      </div>
      <div className="controls flex-row justify-between">
        <Link className="btn p-2 m-2 bg-secondary" to="/new-item">
          New Item +
        </Link>
        {items && items.count && (
          <p className="btn p-1 m-2 primary">
            Items count:{' '}
            <span className="btn p-1 m-2 secondary">{items.count}</span>
          </p>
        )}
      </div>

      <div className="grid items p-2">
        {items &&
          items.items.map((item) => (
            <div className="item-card p-1 text-center" key={item.id}>
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
          ))}
      </div>
    </div>
  );
};

export default Shop;
