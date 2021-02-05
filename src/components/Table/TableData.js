import React from 'react';
import { Link } from 'react-router-dom';

import TableDataButton from './TableDataButton';

import './Table.css';

class TableData extends React.Component {


  render() {
    //console.log(this.props.data);
    const TableContent = Object.entries(this.props.data).map(
      ([key,value]) => {
        
        const stateCode = key;
        if(stateCode==='TT') {
          return null;
        }

        const {
          confirmed, 
          recovered, 
          deceased, 
          tested, 
          vaccinated
        } = value.total;
        
        //active data is not provided by API
        const active = confirmed-recovered-deceased;

        const population = value.meta?.population;
        const activeRatio = 100*(active/confirmed);
        const recoveryRatio = 100*(recovered/confirmed);
        const caseFatalityRatio = 100*(deceased/confirmed);
        const testPositivityRatio = 100*(confirmed/tested);

        const confirmedDelta = value.delta7?.confirmed;
        const recoverdDelta = value.delta7?.recovered;
        const deceasedDelta = value.delta7?.deceased;
        const testedDelta = value.delta7?.tested;
        const vaccinatedDelta = value.delta7?.vaccinated;

        // let testedDelta = null ,vaccinatedDelta = null;
        // try{
        //   const {tested: tested_Delta} = value.delta7; 
        //   testedDelta = tested_Delta;
        // } catch(err) {
        //   console.log(`Tested tag not avialable ${stateCode}`,err);
        // }
        // try{
        //   const {vaccinated: vaccinated_Delta} = value.delta7;
        //   vaccinatedDelta = vaccinated_Delta;
        // } catch(err) {
        //   console.log(`Vaccinated tag not avialable ${stateCode}`,err);
        // }
        console.log(vaccinated);
        return (
          <tr className="table-data-row" key={stateCode}>
            <TableDataButton 
              title='State/UT' 
              data={stateCode}
              currState={stateCode}
              style={{textAlign: 'center'}}
            />
            <TableDataButton 
              title='Confirmed' 
              data={confirmed} 
              currState={key}
              delta={confirmedDelta} 
              style={{color:'rgba(255, 7, 57, 0.89)'}}
            />
            <TableDataButton 
              title='Active' 
              currState={stateCode}
              data={active}
            />
            <TableDataButton 
              title='Recovered' 
              data={recovered} 
              currState={stateCode}
              delta={recoverdDelta} 
              style={{color: 'rgb(40, 167, 70)'}}
            />
            <TableDataButton 
              title='Deceased' 
              data={deceased} 
              currState={stateCode}
              delta={deceasedDelta} 
              style={{color:'rgba(108, 117, 125, 0.89)'}}
            />
            <TableDataButton 
            title='Tested' 
            data={tested} 
            currState={stateCode}
            delta={testedDelta} 
            style={{color:'rgba(42, 190, 190, 0.89)'}}
            />
            <TableDataButton 
            title='Vaccinated' 
            data={vaccinated} 
            currState={stateCode}
            delta={vaccinatedDelta} 
            style={{color:'#ff80b3'}}
            />
            <TableDataButton 
            title='Active Ratio' 
            data={activeRatio}
            currState={stateCode}
            />
            <TableDataButton 
            title='Recovery Ratio' 
            data={recoveryRatio}
            currState={stateCode}
            />
            <TableDataButton 
            title='Case Fatality Ratio' 
            data={caseFatalityRatio} 
            currState={stateCode}
            />
            <TableDataButton 
            title='Test Positivity Ratio' 
            data={testPositivityRatio}
            currState={stateCode}
            />
            <TableDataButton 
            title='Population' 
            data={population}
            stateCode={stateCode}
            />
      </tr>
      );
      }
    );


    return TableContent;
  }
}
export default TableData;

/*
<div className="data-button-additional">
          <button onclick={`/state/:${key}`} type="button">Move to: {key}</button>
      </div>
      
const {
          confirmed: confirmedDelta , 
          recovered: recoverdDelta, 
          deceased: deceasedDelta, 
          tested: testedDelta,
          vaccinated: vaccinatedDelta
        } = value.delta7;
      
*/
