import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoggedOut from './containers/LoggedOut.jsx';
import LoggedIn from './containers/LoggedIn.jsx';

function App() {
  const user = JSON.parse(sessionStorage.getItem('Ma7ally-Online-token'));
  const [loggedIn, setLoggedIn] = useState(user);

  return (
    <div className="App">
      <Router>
        {(loggedIn && (
          <LoggedIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        )) || <LoggedOut loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
      </Router>
    </div>
  );
}

export default App;
