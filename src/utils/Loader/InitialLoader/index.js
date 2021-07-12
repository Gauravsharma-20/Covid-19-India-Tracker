import React from 'react';

import './initialPageLoadger.css'; 


const Loader = () => {
  return (
    <div className="loader-container">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  );
}
export default Loader;
