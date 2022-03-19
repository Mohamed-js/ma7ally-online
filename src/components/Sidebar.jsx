import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ trader }) => (
  <div>
    {trader && trader.image_data && (
      <div>
        <div class="logo mt-5">
          <div class="profile-avatar mt-4 mb-2 m-auto">
            <img
              className="full-img fit-cover"
              src={trader.image_data}
              alt="Profile"
            />
          </div>
          <h2 class="text-center">{trader.storename.toUpperCase()}</h2>
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
export default Sidebar;
