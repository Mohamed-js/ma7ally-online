import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import trial from '../images/trial.png';
import limited from '../images/limited.png';
import hero from '../images/hero.png';

const Home = () => {
  return (
    <div>
      <div className="cover bg-primary flex-col justify-center">
        <h1 className="header secondary text-center tertiary">
          Ma7ally Online
        </h1>
        <h3 className="headline text-center secondary">
          It's time to grow up your business with us.
        </h3>
        <div className="join-now flex-row justify-center m-3">
          <Link className="p-2 btn bg-tertiary primary" to="/join-us">
            Join now!
          </Link>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,288L48,261.3C96,235,192,181,288,144C384,107,480,85,576,64C672,43,768,21,864,37.3C960,53,1056,107,1152,122.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <h2 className="why-us text-center m-3">Why to choose us...?</h2>
      <div className="descriptions p-2 flex-col align-center">
        <div className="description p-1 text-center m-3 border-left">
          The easiest, cheapest and the best solution for your business.
        </div>
        <div className="description p-1 text-center m-3 border-right ">
          Enjoy our beautiful, clear, designs and options, and let your clients
          be amazed!
        </div>
        <div className="description p-1 text-center m-3 border-left">
          We have the most powerful, helpful and present support team to help
          you 24/24.
        </div>
      </div>
      <h2 className="our-plans text-center m-5">Our plans</h2>
      <div className="plans p-2 flex-col align-center">
        <div className="plan">
          <h3 className="plan-name text-center white bg-primary">Trial</h3>
          <div className="plan-icon m-2 m-auto">
            <img className="full-img" src={trial} alt="trial" />
          </div>
          <ul className="plan-options">
            <li className="plan-option">
              Have a free trial with limited time.
            </li>
            <li className="plan-option">Limited products.</li>
            <li className="plan-option">Lasts for only one week.</li>
          </ul>
          <h3 className="price text-center m-2">Free</h3>
          <div className="join-now flex-row justify-center">
            <Link className="p-2 btn bg-tertiary primary" to="/join-us">
              Join now!
            </Link>
          </div>
        </div>

        <div className="plan">
          <h3 className="plan-name text-center white bg-secondary">Limited</h3>
          <div className="plan-icon m-2 m-auto">
            <img className="full-img" src={limited} alt="limited" />
          </div>
          <ul className="plan-options">
            <li className="plan-option">Have a limitless time access.</li>
            <li className="plan-option">Limited products.</li>
            <li className="plan-option">Unlimited time.</li>
          </ul>
          <h3 className="price text-center m-2">12$</h3>
          <div className="join-now flex-row justify-center">
            <Link className="p-2 btn bg-tertiary primary" to="/join-us">
              Join now!
            </Link>
          </div>
        </div>

        <div className="plan">
          <h3 className="plan-name last text-center bg-tertiary">Superhero</h3>
          <div className="plan-icon m-2 m-auto">
            <img className="full-img" src={hero} alt="hero" />
          </div>
          <ul className="plan-options">
            <li className="plan-option">Have a limitless time access.</li>
            <li className="plan-option">Unlimited products.</li>
            <li className="plan-option">Unlimited time.</li>
          </ul>
          <h3 className="price text-center m-2">20$</h3>
          <div className="join-now flex-row justify-center">
            <Link className="p-2 btn bg-tertiary primary" to="/join-us">
              Join now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
