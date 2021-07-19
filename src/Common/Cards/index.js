import React from 'react';

import CardItem from './CardItem';
import Vaccinated from './Vaccinated';
import Loader from '../../utils/Loader';

import './Cards.css';


const icons = {
  recovered: 'fa fa-heartbeat',
  active: 'fa fa-medkit',
  confirmed: 'fa fa-check-circle',
  deceased: 'fa fa-heart',
};


const Cards = (props) => {

    if(!props.data||props.data===undefined) {
      return <Loader />;
    }

    const {confirmed, recovered, deceased} = props.data;
    const {confirmed: confirmedDelta , recovered: recoverdDelta, deceased: deceasedDelta} = props.delta;

    //active data is not provided by API
    const active = confirmed-recovered-deceased;

    //Vaccine doesn't have a delta available
    const vaccinated1 = props.data.vaccinated1;
    const vaccinated2 = props.data.vaccinated2;

  return (
    <div>
      <div className="cards">
        <CardItem 
          title='Confirmed' 
          data={confirmed} 
          delta={confirmedDelta} 
          icon={icons.confirmed}
        />
        <CardItem 
          title='Active' 
          data={active} 
          delta={null} 
          icon={icons.active} 
        />
        <CardItem 
          title='Recovered' 
          data={recovered} 
          delta={recoverdDelta} 
          icon={icons.recovered} 
        />
        <CardItem 
          title='Deceased' 
          data={deceased} 
          delta={deceasedDelta} 
          icon={icons.deceased} 
        />
      </div>
      <div className="vaccinatedContainer">
        <Vaccinated vaccinated1={vaccinated1} vaccinated2={vaccinated2} />
      </div>
    </div>
  );
};

export default Cards;
