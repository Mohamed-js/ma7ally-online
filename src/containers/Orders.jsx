import React, { useEffect, useState } from 'react';
import { showTraderOrders } from '../Helpers';
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
          {orders &&
            orders.map((order) => {
              return (
                <div>
                  <div className="order" key={order.id}>
                    <div className="col name">Name</div>
                    <div className="col name">{order.user.username}</div>
                    <div className="col address">Address</div>
                    <div className="col address">{order.address}</div>
                    <div className="col phone">Phone</div>
                    <div className="col phone">{order.phone}</div>
                    <div className="col phone">Phone Alt</div>
                    <div className="col phone">{order.phone2}</div>
                    <div className="col item">Item</div>
                    <div className="col item">{order.item.name}</div>
                    <div className="col size">Size</div>
                    <div className="col size">{order.item.size}</div>
                    <div className="col quantity">Quantity</div>
                    <div className="col quantity">{order.quantity}</div>
                    <div className="col price">Total $</div>
                    <div className="col price">
                      {order.item.price * order.quantity}
                    </div>
                    <div className="col image">Image</div>
                    <div className="col image">
                      <img
                        className="full-img"
                        src={order.item.image_data}
                        alt="order"
                      />
                    </div>
                  </div>
                  <br />
                </div>
              );
            })}
        </div>
      </div>
      {!orders && <h1>You don't have new orders.</h1>}
    </div>
  );
};

export default Orders;
