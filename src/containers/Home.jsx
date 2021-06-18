import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <div className="cover bg-primary flex-col justify-center">
        <h1 className="header primary text-center">Ma7ally Online</h1>
        <h4 className="headline">
          It's time to grow up your business with us.
        </h4>
      </div>

      <div className="join-now">
        <button>Join now!</button>
      </div>
      <h2 className="why-us">Why to choose us...?</h2>
      <div className="descriptions">
        <div className="description">
          The easiest, cheapest and the best solution for your business.
        </div>
        <div className="description-reversed">
          Enjoy our beautiful, clear, designs and options, and let your clients
          be amazed!
        </div>
        <div className="description">
          We have the most powerful, helpful and present support team to help
          you 24/24.
        </div>
      </div>
      <h2 className="our-plans">Our plans</h2>
      <div className="plans">
        <div className="plan">
          <div className="plan-icon"></div>
          <h5 className="plan-name">Trial</h5>
          <ul className="plan-options">
            <li className="plan-option">
              Have a free trial with limited time.
            </li>
            <li className="plan-option">Limited products.</li>
            <li className="plan-option">Lasts for only one week.</li>
          </ul>
          <h3 className="price">Free</h3>
        </div>

        <div className="plan">
          <div className="plan-icon"></div>
          <h5 className="plan-name">Limited</h5>
          <ul className="plan-options">
            <li className="plan-option">Have a limitless time access.</li>
            <li className="plan-option">Limited products.</li>
            <li className="plan-option">Unlimited time.</li>
          </ul>
          <h3 className="price">12$</h3>
        </div>

        <div className="plan">
          <div className="plan-icon"></div>
          <h5 className="plan-name">Superhero</h5>
          <ul className="plan-options">
            <li className="plan-option">Have a limitless time access.</li>
            <li className="plan-option">Unlimited products.</li>
            <li className="plan-option">Unlimited time.</li>
          </ul>
          <h3 className="price">20$</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
