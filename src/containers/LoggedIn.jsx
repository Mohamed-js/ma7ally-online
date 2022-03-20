import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CategoriesSelect from './CategoriesSelect';
import Dashboard from './Dashboard';
import EditItem from './EditItem';
import ItemShow from './ItemShow';
import NewItem from './NewItem';
import Orders from './Orders';
import Profile from './Profile';
import Shop from './Shop';
import Statistics from './Statistics';

const LoggedIn = ({ trader, loggedIn, setLoggedIn }) => {
  const bodyElement = document.getElementsByTagName('body')[0];
  // const navElement = document.getElementsByTagName('nav')[0];
  bodyElement.className = 'logged-in';
  // navElement.classList.remove('logged-out');

  return (
    <div class="app-container">
      <div class="sidebar flex-col">
        <Sidebar trader={trader} />
      </div>
      <div class="main">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <div class="content p-2 rounded">
          <Switch>
            <Route exact path="/" component={Statistics} />
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
      </div>
    </div>
  );
};

export default LoggedIn;
