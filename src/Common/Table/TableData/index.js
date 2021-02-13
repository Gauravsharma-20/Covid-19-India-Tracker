import React from 'react';

import TableDataButton from './TableDataButton';

import '../Table.css';

class TableData extends React.Component {


  render() {
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

        let deltaDays = this.props.deltaDays===7? 'delta7':'delta';

        const confirmedDelta = value[deltaDays]?.confirmed;
        const recoverdDelta = value[deltaDays]?.recovered;
        const deceasedDelta = value[deltaDays]?.deceased;
        const testedDelta = value[deltaDays]?.tested;
        const vaccinatedDelta = value[deltaDays]?.vaccinated;


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
const {
          confirmed: confirmedDelta , 
          recovered: recoverdDelta, 
          deceased: deceasedDelta, 
          tested: testedDelta,
          vaccinated: vaccinatedDelta
        } = value.delta7;
      
*/
