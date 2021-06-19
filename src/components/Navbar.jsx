import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex-row justify-between bg-gradient p-5">
      <Link className="btn bg-secondary p-2" to="/join-us">
        Join Us
      </Link>
      <Link className="btn bg-transparent secondary p-2" to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
