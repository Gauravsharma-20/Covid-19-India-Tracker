import React, { useState } from 'react';
import { connect } from 'react-redux';

import Table from '../Table/Table';
import Cards from '../Cards/Cards';
import StateCodes from '../utils/StateCodes.json';
import NotFound from '../utils/NotFound';

import './StateDetail.css';

const StateDetail = (props) => {
    //console.log(props.match.params.stateCode);
    //const [stateData, setStateData] = useState(JSON.parse(sessionStorage.stateData));
    const currState = props.match.params.stateCode;
    if(!(currState in StateCodes)){
      return <NotFound />;
    }


    //console.log(props.stateData[currState]);
    return (
    <React.Fragment>
      <div className="StateDetailTitle">
        <h1>{StateCodes[currState]}</h1>
      </div>
      <Cards 
        data = {props.stateData[currState]?.total}
        delta = {props.stateData[currState]?.delta7}
      />
      <Table 
          data = {props.stateData[currState]?.districts}
          primaryTitle='Districts'
        />
    </React.Fragment>
    );
};

const mapStateToProps = state => {
  return {stateData: state.stateData};
};
export default connect(mapStateToProps)(StateDetail);

/*
*/
