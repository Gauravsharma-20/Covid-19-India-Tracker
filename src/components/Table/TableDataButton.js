import React from 'react';
import { Link } from 'react-router-dom';

import StateCodes from '../utils/StateCodes.json';

import './Table.css';

class TableDataButton extends React.Component {

  numberFormating(val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + 'Cr';
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + 'L';
    } else if(val >= 1000) {
       val = (val/1000).toFixed(2) + 'K';
    }
    return val;
  }

  
  render() {
    
    let data = '-', delta;
    const title = this.props.title;
    
    //For Data
    if(title!=='State/UT') {

      if(['Tested', 'Vaccinated', 'Population'].includes(title)) {

        if(this.props.data!==undefined||this.props.data!==null) {
          data = this.numberFormating(this.props.data);

        }

        if(title!=='Population') {
          delta = this.numberFormating(this.props.delta);

        } else {
          delta = 'NaN';
        }

      } else {
        data = Math.round((this.props.data + Number.EPSILON) * 100) / 100; //rounding off
        data = new Intl.NumberFormat('en-IN').format(data);
        delta =  new Intl.NumberFormat('en-IN').format(this.props.delta);

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
        if(this.props.data in StateCodes) {
          data =  StateCodes[this.props.data];
        } else {
          data = this.props.data;
        }
    }

    //For Delta
    if(delta==='NaN'||delta===undefined||title==='State/UT') {
      delta = ' ';

    } else {
      delta = (
      <div className="table-data-delta" style={this.props.style}>
        {delta}
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
      );
    }


    return (
      <td className="table-button-container">
        <Link to={`/state/${this.props.currState}`}>
          <div>
            {delta}
            <div style={{textAlign: 'center'}}>
              {data}
            </div>
          </div>
        </Link>
      </td>
    );
  };
}

export default TableDataButton;
