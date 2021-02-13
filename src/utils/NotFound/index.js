import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
  return (
  <div className="not-found-container">
    <p>404 - Not Found!</p>
    <Link to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
