import React, { useEffect, useState } from 'react';
import '../styles/statistics.css';
import { showStatistics } from '../Helpers';
import MyResponsivePie from '../components/Donut.jsx';
import TopProducts from '../components/TopPrpducts';

const Statistics = ({}) => {
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));
  const [store, setStore] = useState();
  useEffect(() => {
    showStatistics(trader_token).then((res) => setStore(res));
  }, [trader_token]);

  const data = [
    {
      country: 'AD',
      'hot dog': 193,
    },
    {
      country: 'AE',
      'hot dog': 99,
    },
  ];

  return (
    <div className="text-center p-2">
      <h1 className="text-center m-4">STATISTICS</h1>
      {store && console.log(store)}
      {store && (
        <div className="first-four-groups">
          <div className="first-three-groups">
            <div className="first-two-groups">
              {/* FIRST GROUP */}
              <div className="first-group">
                <div className="one-line-card store-users curved bg-gradient-tertiary white">
                  STORE USERS:{' '}
                  <span className="number"> {store.store.users}</span>{' '}
                  <span className="faint-color">USERS</span>
                </div>
                <div className="flex-row justify-between grid-column">
                  <div className="three-line-card flex-col curved bg-gradient white">
                    <h5>TOTAL PROFIT</h5>
                    <span className="number"> {store.store.total_profits}</span>
                    <span className="currency">$</span>
                  </div>
                  <div className="three-line-card flex-col curved bg-gradient-danger white">
                    <h5>MONTH PROFIT</h5>
                    <span className="number"> {store.store.month_profits}</span>
                    <span className="currency">$</span>
                  </div>
                </div>
                <div className="one-line-card curved bg-gradient-tertiary white">
                  ACTIVE USERS:{' '}
                  <span className="number"> {store.store.active_users}</span>{' '}
                  <span className="faint-color">USERS</span>
                </div>
              </div>

              {/* SECOND GROUP */}
              <div className="second-group">
                <div className="one-line-card lazy-users curved bg-gradient-secondary white">
                  LAZY USERS:{' '}
                  <span className="number"> {store.store.inactive_users}</span>{' '}
                  <span className="faint-color">USERS</span>
                </div>
                <div className="flex-row justify-between grid-column">
                  <div className="w-100">
                    <div className="three-line-card flex-col curved bg-gradient-tertiary white">
                      <h5>TOTAL ORDERS</h5>
                      <span className="number">
                        {' '}
                        {store.store.total_orders}{' '}
                      </span>
                    </div>
                    <div className="half-line-card curved bg-gradient-tertiary white">
                      <span className="number">
                        {store.store.total_orders_items}{' '}
                      </span>
                      <span className="faint-color">ITEMS</span>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="three-line-card flex-col curved bg-gradient white">
                      <h5>MONTH ORDERS</h5>
                      <span className="number">
                        {store.store.month_orders}{' '}
                      </span>
                    </div>
                    <div className="half-line-card curved bg-gradient white">
                      <span className="number">
                        {store.store.month_orders_items}{' '}
                      </span>
                      <span className="faint-color">ITEMS</span>
                    </div>
                  </div>
                </div>
                <div className="one-line-card curved bg-gradient-danger white mt-0">
                  STORE ITEMS:{' '}
                  <span className="number">{store.store.items} </span>{' '}
                  <span className="faint-color">ITEMS</span>
                </div>
              </div>
            </div>

            {/* THIRD GROUP */}
            <div className="third-group">
              <div className="third-group">
                {
                  <MyResponsivePie
                    data={store.store.category_profit_pairs.map((pair) => {
                      return {
                        category: pair[0].toUpperCase(),
                        [pair[0].toUpperCase()]: pair[1],
                      };
                    })}
                    keys={store.store.category_profit_pairs.map((pair) =>
                      pair[0].toUpperCase()
                    )}
                  />
                }
                <br />
                <br />
              </div>
            </div>
          </div>
          {/* FOURTH GROUP */}
          <div className="top-products">
            <TopProducts
              type="MOST POPULAR PRODUCTS"
              TopProducts={store.store.most_popular_products}
            />
            <TopProducts
              type="MOST PROFITABLE PRODUCTS"
              TopProducts={store.store.most_profitable_products}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
