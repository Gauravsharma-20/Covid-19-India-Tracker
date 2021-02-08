import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
  <div className="NotFound">
    <p>404 - Not Found!</p>
    <Link to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
