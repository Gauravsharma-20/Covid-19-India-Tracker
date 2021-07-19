import React from 'react';

import { numberFormating } from '../../../utils/Helper';

import './Vaccinated.css';

const vaccinatedIcon = 'shield alternate icon';

const Vaccinated = (props) => {

  const vaccinated1 = numberFormating(props.vaccinated1);
  const vaccinated2 = numberFormating(props.vaccinated2);
  let syringeIcon = <i class="fas fa-syringe vaccinatedIcon" ></i>;
  
  return (
    <div className="vaccinated">
      <span>
      <i className={vaccinatedIcon}></i>
      Vaccine Dosses Administered  &nbsp; {syringeIcon} {vaccinated1} &nbsp; {syringeIcon}{syringeIcon} {vaccinated2}
      </span>
      <span>
       
      </span>
      <span>
       
      </span>
    </div>
  );
}
export default Vaccinated;
