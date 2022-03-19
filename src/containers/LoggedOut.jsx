import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import JoinUs from './JoinUs';
import Login from './Login';
import '../styles/home.css';

const LoggedOut = ({ setLoggedIn, loggedIn }) => {
  const bodyElement = document.getElementsByTagName('body')[0];
  bodyElement.className = 'logged-out';

  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Route exact path="/" component={() => <Home loggedIn={loggedIn} />} />
      <Route
        exact
        path="/join-us"
        component={() => <JoinUs setLoggedIn={setLoggedIn} />}
      />
      <Route
        exact
        path="/login"
        component={() => <Login setLoggedIn={setLoggedIn} />}
      />
    </div>
  );
};

export default LoggedOut;
