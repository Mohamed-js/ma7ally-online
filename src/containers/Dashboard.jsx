import React from 'react';
import { Link } from 'react-router-dom';
import prof from '../images/prof.png';
import shop from '../images/shop2.png';
import orders from '../images/orders.png';
import Statistics from '../images/analysis.png';

const Dashboard = () => {
  return (
    <div>
      <br />
      <h1 className="headline text-center m-4">Dashboard</h1>
      <div className="grid">
        <div className="grid-item">
          <Link to="/profile">
            <div className="dashboard-img m-auto">
              <img src={prof} alt="Profile" className="full-img" />
            </div>
            <h4 className="text-center m-1">Profile</h4>
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/shop">
            <div className="dashboard-img m-auto">
              <img src={shop} alt="Shop" className="full-img" />
            </div>
            <h4 className="text-center m-1">Shop</h4>
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/orders">
            <div className="dashboard-img m-auto">
              <img src={orders} alt="Orders" className="full-img" />
            </div>
            <h4 className="text-center m-1">Orders</h4>
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/statistics">
            <div className="dashboard-img m-auto">
              <img src={Statistics} alt="Statistics" className="full-img" />
            </div>
            <h4 className="text-center m-1">Statistics</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
