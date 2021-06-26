import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/join-us" component={JoinUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/categories-select" component={CategoriesSelect} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/new-item" component={NewItem} />
          <Route exact path="/shop/item/:id" component={ItemShow} />
          <Route exact path="/shop/item/:id/edit" component={EditItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
