import React, { useEffect, useState } from 'react';
import { showTraderOrders } from '../Helpers';
import { v4 as uuid } from 'uuid';
import '../styles/orders.css';

const Orders = () => {
  const [orders, setOrders] = useState();
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));
  useEffect(() => {
    showTraderOrders(trader_token).then((orders) => setOrders(orders));
  }, []);

  return (
    <div>
      <div className="text-center m-4">
        <h1>Orders</h1>
      </div>
      <div>
        <div className="orders">
          {orders && console.log(orders[0])}
          {orders &&
            orders.map((order) => {
              return (
                <div key={uuid()}>
                  <div className="order-container curved p-2">
                    <div className="order">
                      <div className="col name">Name</div>
                      <div className="col name">{order.user.username}</div>
                      <div className="col address">Address</div>
                      <div className="col address">{order.address}</div>
                      <div className="col phone">Phone</div>
                      <div className="col phone">{order.phone}</div>
                      {/* <div className="col phone">Phone Alt</div>
                      <div className="col phone">{order.phone2}</div> */}
                      <div className="col price">Total $</div>
                      <div className="col price">
                        {order.total}
                        {order.currency}
                      </div>
                    </div>

                    <div className="items">
                      {order.order_items &&
                        order.order_items.map((order_item) => {
                          const count =
                            order_item.quantity === 1 ? 'Piece' : 'Pieces';
                          return (
                            <div key={uuid()} className="item curved m-2">
                              <div className="image p-1 flex-row align-center justify-center">
                                <img
                                  className="full-img"
                                  src={order_item.item.image_data}
                                  alt="order"
                                />
                              </div>
                              <div className="m-2">
                                <h4 className="m-1">{order_item.item.name}</h4>
                                <h5 className="m-1">
                                  Size: {order_item.item.size}{' '}
                                  {order_item.item.unit}
                                </h5>
                                <h5 className="m-1 secondary">
                                  {order_item.quantity} {count}
                                </h5>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <br />
                </div>
              );
            })}
        </div>
      </div>
      {orders && !orders[0] && (
        <p className="text-center m-4">You don't have new orders.</p>
      )}
    </div>
  );
};

export default Orders;
