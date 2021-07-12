import React from 'react';

import TableDataButton from './TableDataButton';

import '../Table.css';

const TableData = (props) => {

  const confirmedDeltaArrowColor = 'rgba(255, 7, 57, 0.89)';
  const recoveredDeltaArrowColor = 'rgb(40, 167, 70)';
  const deceasedDeltaArrowColor = 'rgba(108, 117, 125, 0.89)';
  const testedDeltaArrowColor = 'rgba(42, 190, 190, 0.89)';
  const vaccinatedDeltaArrowColor = '#ff80b3';
  

  const TableContent = Object.entries(props.data).map(
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
        vaccinated1
      } = value.total;
      
      //active data is not provided by API
      const active = confirmed-recovered-deceased;

      const population = value.meta?.population;
      const activeRatio = 100*(active/confirmed);
      const recoveryRatio = 100*(recovered/confirmed);
      const caseFatalityRatio = 100*(deceased/confirmed);
      const testPositivityRatio = 100*(confirmed/tested);

      let deltaDays = props.deltaDays===7? 'delta7':'delta';

      const confirmedDelta = value[deltaDays]?.confirmed;
      const recoverdDelta = value[deltaDays]?.recovered;
      const deceasedDelta = value[deltaDays]?.deceased;
      const testedDelta = value[deltaDays]?.tested;
      const vaccinatedDelta = value[deltaDays]?.vaccinated1;

      const {link: addLink} = props;

      return (
        <tr className={`{addLink? "state-data-row": ""} table-data-row`} key={stateCode}>
          <TableDataButton 
            title='State/UT' 
            data={stateCode}
            currState={stateCode}
            style={{textAlign: 'center'}}
            link={addLink}
          />
          <TableDataButton 
            title='Confirmed' 
            data={confirmed} 
            currState={key}
            delta={confirmedDelta} 
            style={{color: confirmedDeltaArrowColor}}
            link={addLink}
          />
          <TableDataButton 
            title='Active' 
            currState={stateCode}
            data={active}
            link={addLink}
          />
          <TableDataButton 
            title='Recovered' 
            data={recovered} 
            currState={stateCode}
            delta={recoverdDelta} 
            style={{color: recoveredDeltaArrowColor}}
            link={addLink}
          />
          <TableDataButton 
            title='Deceased' 
            data={deceased} 
            currState={stateCode}
            delta={deceasedDelta} 
            style={{color:deceasedDeltaArrowColor}}
            link={addLink}
          />
          <TableDataButton 
          title='Tested' 
          data={tested} 
          currState={stateCode}
          delta={testedDelta} 
          style={{color:testedDeltaArrowColor}}
          link={addLink}
          />
          <TableDataButton 
          title='Vaccinated' 
          data={vaccinated1} 
          currState={stateCode}
          delta={vaccinatedDelta} 
          style={{color:vaccinatedDeltaArrowColor}}
          link={addLink}
          />
          <TableDataButton 
          title='Active Ratio' 
          data={activeRatio}
          currState={stateCode}
          link={addLink}
          />
          <TableDataButton 
          title='Recovery Ratio' 
          data={recoveryRatio}
          currState={stateCode}
          link={addLink}
          />
          <TableDataButton 
          title='Case Fatality Ratio' 
          data={caseFatalityRatio} 
          currState={stateCode}
          link={addLink}
          />
          <TableDataButton 
          title='Test Positivity Ratio' 
          data={testPositivityRatio}
          currState={stateCode}
          link={addLink}
          />
          <TableDataButton 
          title='Population' 
          data={population}
          stateCode={stateCode}
          link={addLink}
          />
    </tr>
    );
    }
  );

  return TableContent;
};

export default TableData;
