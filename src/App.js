import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Navbar from './components/Navbar.jsx';
import CategoriesSelect from './containers/CategoriesSelect.jsx';
import Dashboard from './containers/Dashboard.jsx';
import EditItem from './containers/EditItem.jsx';
import Home from './containers/Home.jsx';
import ItemShow from './containers/ItemShow.jsx';
import JoinUs from './containers/JoinUs.jsx';
import Login from './containers/Login.jsx';
import NewItem from './containers/NewItem.jsx';
import Orders from './containers/Orders.jsx';
import Profile from './containers/Profile.jsx';
import Shop from './containers/Shop.jsx';
import Statistics from './containers/Statistics.jsx';
import { showTrader } from './Helpers.js';

function App() {
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));
  const [trader, setTrader] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(async () => {
    setTrader(await showTrader(trader_token).then((data) => data));
  }, [trader_token]);

  return (
    <div className="App">
      <div class="app-container">
        <div class="sidebar flex-col w-100">
          {trader && trader.image_data && (
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
          )}
          {/* <%= render 'layouts/navlinks'%> */}
        </div>
        <div class="main">
          <Router>
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <div class="content p-2 rounded">
              <Switch>
                <Route exact path="/" component={Statistics} />
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
                <Route
                  exact
                  path="/categories-select"
                  component={CategoriesSelect}
                />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/new-item" component={NewItem} />
                <Route exact path="/shop/item/:id" component={ItemShow} />
                <Route exact path="/shop/item/:id/edit" component={EditItem} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
