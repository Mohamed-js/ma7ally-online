import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Navbar = ({ loggedIn, setLoggedIn }) => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem('Ma7ally-Online-token'));

  const Logout = () => {
    sessionStorage.removeItem('Ma7ally-Online-token');
    setLoggedIn(false);
    history.push('/login');
  };

  if (loggedIn || user) {
    return (
      <nav className="flex-row justify-between align-center p-4">
        <Link to="/">
          <h1 className="btn tertiary p-1 pt-2 pb-0 nav-logo">Ma7ally</h1>
          <h6 className="tertiary p-1 pt-0">Online</h6>
        </Link>

        <button
          onClick={() => Logout()}
          className="btn bg-transparent secondary p-2">
          Logout
        </button>
      </nav>
    );
  } else {
    history.push('/');
    return (
      <nav className="flex-row justify-between align-center p-4 logged-out">
        <Link className="btn bg-secondary p-2" to="/join-us">
          Join Us
        </Link>
        <Link className="btn bg-transparent secondary p-2" to="/login">
          Login
        </Link>
      </nav>
    );
  }
};

export default Navbar;
