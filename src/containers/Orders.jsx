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
                  <div>
                    <div className="order">
                      <div className="col name">Name</div>
                      <div className="col name">{order.user.username}</div>
                      <div className="col address">Address</div>
                      <div className="col address">{order.address}</div>
                      <div className="col phone">Phone</div>
                      <div className="col phone">{order.phone}</div>
                      <div className="col phone">Phone Alt</div>
                      <div className="col phone">{order.phone2}</div>
                      <div className="col price">Total $</div>
                      <div className="col price">
                        {order.total}
                        {order.currency}
                      </div>
                    </div>

                    <div className="items">
                      {order.order_items &&
                        order.order_items.map((order_item) => {
                          return (
                            <div key={uuid()} className="item order">
                              <div className="col image">Image</div>
                              <div className="col image">
                                <img
                                  className="full-img"
                                  src={order_item.item.image_data}
                                  alt="order"
                                />
                              </div>
                              <div className="col item">Item</div>
                              <div className="col item">
                                {order_item.item.name}
                              </div>
                              <div className="col size">Size</div>
                              <div className="col size">
                                {order_item.item.size}
                              </div>
                              <div className="col quantity">Quantity</div>
                              <div className="col quantity">
                                {order_item.quantity}
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
