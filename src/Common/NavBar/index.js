import React from 'react';
import { Link } from 'react-router-dom';

import Mode from './Mode';
import NotificationComponent from './Notification'; 
import SearchBar from '../SearchBar';

import './NavBar.css';


const NavBar = (props) => {

    return (
      <div className="navbar-container">
        <Link to="/">
          <div className="covid19-logo">{`Covid-19`}</div>
        </Link>
        <div>
          <SearchBar />
        </div>
        <div className="navbar-utils">
          <Mode />
          <NotificationComponent />
        </div>
      </div>
    );
};

export default NavBar;
