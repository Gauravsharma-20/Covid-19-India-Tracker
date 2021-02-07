import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const style = {fontSize:'30px', display:'flex', justifyContent:'center',paddingTop:'150px',flexDirection:'column',alignItems:'center'};
  return (
  <div style={style}>
    <p>404 - Not Found!</p>
    <Link to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
