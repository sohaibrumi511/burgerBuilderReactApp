import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={'/home'}>
          <img
            alt="logo"
            className="image"
            src={require('../images/logo.png')}
          ></img>
        </Link>
      </div>
      <Link to={'/'}>
        <button className="button">Sign In</button>
      </Link>
    </div>
  );
};

export default Navbar;
