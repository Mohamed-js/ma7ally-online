import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { showTrader } from '../Helpers';
import prof from '../images/prof.png';

const Sidebar = () => {
  const [trader, setTrader] = useState();
  const trader_token = JSON.parse(
    sessionStorage.getItem('Ma7ally-Online-token')
  );

  useEffect(async () => {
    setTrader(await showTrader(trader_token));
  }, [trader_token]);

  return (
    <div>
      {trader && (
        <div>
          <div class="logo mt-5">
            <div class="profile-avatar mt-4 mb-2 m-auto">
              {(trader.image_data && (
                <img
                  className="full-img fit-cover"
                  src={trader.image_data}
                  alt="Profile"
                />
              )) || (
                <img className="full-img fit-cover" src={prof} alt="Profile" />
              )}
            </div>
            {trader.storename && (
              <h2 class="text-center">{trader.storename.toUpperCase()}</h2>
            )}
          </div>

          <div className="sidebar-links mt-4">
            <div className="sidebar-link">
              <Link to="/" className="flex-row">
                <div className="m-1">
                  <i className="fas fa-chart-line"></i>
                </div>{' '}
                <div className="m-1">Statistics</div>
              </Link>
            </div>
            <div className="sidebar-link">
              <Link to="/orders" className="flex-row">
                <div className="m-1">
                  <i class="fas fa-cart-arrow-down"></i>
                </div>{' '}
                <div className="m-1">Orders</div>
              </Link>
            </div>
            <div className="sidebar-link">
              <Link to="/shop" className="flex-row">
                <div className="m-1">
                  <i class="fab fa-product-hunt"></i>
                </div>{' '}
                <div className="m-1"> Products</div>
              </Link>
            </div>
            <div className="sidebar-link">
              <Link to="/profile" className="flex-row">
                <div className="m-1">
                  <i class="fas fa-cog"></i>{' '}
                </div>
                <div className="m-1">Settings</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
