import React from 'react';

import './Vaccinated.css';

const vaccinatedIcon = 'shield alternate icon';

const Vaccinated = (props) => {

  return (
    <div className="vaccinated">
      <i className={vaccinatedIcon}></i>
      {new Intl.NumberFormat('en-IN').format(props.data)} Vaccine Dosses Administered
    </div>
  );
}
export default Vaccinated;
