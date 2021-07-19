import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';


const NotFound = ({error='404 - Not Found!'}) => {
  return (
  <div className="not-found-container">
    <p>{error}</p>
    <Link to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
