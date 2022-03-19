import React, { useEffect, useState } from 'react';
import '../styles/statistics.css';
import { showStatistics } from '../Helpers';
import {
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';

import TopProducts from '../components/TopPrpducts';
import { useHistory } from 'react-router-dom';

const Statistics = ({}) => {
  const history = useHistory();
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));
  const [store, setStore] = useState();
  const [data, setData] = useState();
  const user = JSON.parse(sessionStorage.getItem('Ma7ally-token'));

  if (!user) {
    history.push('/login');
  }
  useEffect(() => {
    showStatistics(trader_token).then((res) => {
      if (res.store) {
        setStore(res);
        setData(
          res.store.category_profit_pairs.map((pair) => {
            return {
              name: pair[0].toUpperCase(),
              profit: pair[1] + '$',
            };
          })
        );
      }
    });
  }, [trader_token]);

  return (
    <div className="text-center p-2">
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
              {data && (
                <div className="flex-col justify-evenly chartss">
                  <ResponsiveContainer width={'50%'} height={400}>
                    <LineChart
                      height={400}
                      data={data}
                      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <CartesianGrid stroke="#171717" />

                      <Line
                        type="monotone"
                        dataKey="Profit"
                        stroke="#fefefe"
                        yAxisId={1}
                      />
                      <Legend />
                    </LineChart>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="50%" height={420}>
                    <BarChart
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="profit" barSize={20} fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}

              <br />
              <br />
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
