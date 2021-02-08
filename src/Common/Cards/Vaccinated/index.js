import React from 'react';

import './Vaccinated.css';


const Vaccinated = (props) => {
  
  return (
    <div className="vaccinated">
    <i className="shield alternate icon"></i>
    {new Intl.NumberFormat('en-IN').format(props.data)} Vaccine Dosses Administered
    </div>
  );
}
export default Vaccinated;
