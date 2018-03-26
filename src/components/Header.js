import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="Header">
      <nav className="navbar">
        {/* <div className="container"> */}
        <div className="navbar-header">
          <div>NYC</div>
          <Link to="/" className="navbar-brand">
            <i className="fa fa-female" />
          </Link>
        </div>
        <ul className="nav navbar-right">
          <li className="active">
            <Link to="/">
              <i className="fa fa-female" />Home
            </Link>
          </li>
          <li>
            <Link to="/signUp">
              <i class="fa fa-user-plus" />Sign Up
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <i class="fa fa-sign-in" />
              Login
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Header;
