import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './containers/Dashboard.jsx';
import Home from './containers/Home.jsx';
import JoinUs from './containers/JoinUs.jsx';
import Login from './containers/Login.jsx';
import Profile from './containers/Profile.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/join-us" component={JoinUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
