import React from 'react';
const Navbar = () => {
  return (
    <nav className="flex-row justify-between bg-gradient p-5">
      <button className="btn bg-secondary p-2">Join Us</button>
      <button className="btn bg-transparent secondary p-2">Login</button>
    </nav>
  );
};

export default Navbar;
