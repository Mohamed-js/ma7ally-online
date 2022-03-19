import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { showTrader } from './Helpers.js';
import LoggedOut from './containers/LoggedOut.jsx';
import LoggedIn from './containers/LoggedIn.jsx';

function App() {
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));
  const [trader, setTrader] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(async () => {
    setTrader(await showTrader(trader_token).then((data) => data));
  }, [trader_token]);

  return (
    <div className="App">
      <Router>
        {(loggedIn && (
          <LoggedIn
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            trader={trader}
          />
        )) || <LoggedOut loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
      </Router>
    </div>
  );
}

export default App;
