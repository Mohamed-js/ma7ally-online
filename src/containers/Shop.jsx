import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import { showTraderItems } from '../Helpers';
import '../styles/shop.css';

const Shop = () => {
  const [items, setItems] = useState();
  const trader_token = JSON.parse(
    sessionStorage.getItem('Ma7ally-Online-token')
  );
  useEffect(() => {
    showTraderItems(trader_token).then((items) => setItems(items));
  }, [trader_token]);
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
            Items count:
            <span className="btn p-1 m-2 secondary">{items.count}</span>
          </p>
        )}
      </div>

      <div className="grid items p-2">
        {items &&
          items.items &&
          items.items.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Shop;
