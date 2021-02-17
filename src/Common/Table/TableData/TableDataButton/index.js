import React from 'react';
import { Link } from 'react-router-dom';

import StateCodes from '../../../../utils/StateCodes.json';
import { numberFormating } from '../../../../utils/Helper';

import '../../Table.css';


const TableDataButton = (props) => {


  const ConditionalWrapper = ({ link, children }) => (link?
    <Link to={`/state/${props.currState}`}>
      {children}
    </Link>
    : children
  );
  

  let data = '-', delta;
  const title = props.title;
  
  //For Data
  if(title!=='State/UT') {

    if(['Tested', 'Vaccinated', 'Population'].includes(title)) {

      if(props.data!==undefined||props.data!==null) {
        data = numberFormating(props.data);

      }

      if(title!=='Population') {
        delta = numberFormating(props.delta);

      } else {
        delta = 'NaN';
      }

    } else {
      data = Math.round((props.data + Number.EPSILON) * 100) / 100;
      data = new Intl.NumberFormat('en-IN').format(data);
      delta =  new Intl.NumberFormat('en-IN').format(props.delta);

    }

    if(data==='NaN') {
      data = 0;
    }

    if(title.includes('Ratio')) {
      data += '%';
    }

    if(data===undefined) {
      data = '-';
    }
    
  } else {
      if(props.data in StateCodes) {
        data =  StateCodes[props.data];
      } else {
        data = props.data==='Unknown'?'-':props.data;
      }
  }


  //For Delta
  if(delta==='NaN'||delta===undefined||title==='State/UT') {
    delta = ' ';

  } else {
    delta = (
    <div className="table-data-delta" style={props.style}>
      {delta}
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </div>
    );
  }


  return (
    <td className="table-button-container">
      <ConditionalWrapper link={props.link}>
        <div>
          {delta}
          <div style={{textAlign: 'center'}}>
            {data}
          </div>
        </div>
      </ConditionalWrapper>
    </td>
  );
}

export default TableDataButton;
