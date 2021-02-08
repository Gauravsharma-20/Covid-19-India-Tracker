import React from 'react';

import CardItem from './CardItem';
import Vaccinated from './Vaccinated';
import Loader from '../../utils/Loader';

import './Cards.css';


class Cards extends React.Component {
  
  render() {

    if(!this.props.data||this.props.data===undefined) {
      return <Loader />;
    }

    const {confirmed, recovered, deceased} = this.props.data;
    const {confirmed: confirmedDelta , recovered: recoverdDelta, deceased: deceasedDelta} = this.props.delta;

    //active data is not provided by API
    const active = confirmed-recovered-deceased;

    //Vaccine doesn't have a delta available
    const vaccinated = this.props.data.vaccinated;

    return (
      <div>
      <div className="cards">
        <CardItem 
          title='Confirmed' 
          data={confirmed} 
          delta={confirmedDelta} 
          icon={'fa fa-check-circle'}
        />
        <CardItem 
          title='Active' 
          data={active} 
          delta={null} 
          icon={'fa fa-medkit'} 
        />
        <CardItem 
          title='Recovered' 
          data={recovered} 
          delta={recoverdDelta} 
          icon={'fa fa-heartbeat'} 
        />
        <CardItem 
          title='Deceased' 
          data={deceased} 
          delta={deceasedDelta} 
          icon={'fa fa-heart'} 
        />
      </div>
      <div className="vaccinatedContainer">
        <Vaccinated data={vaccinated} />
      </div>
      </div>
    );
  }
}

export default Cards;
