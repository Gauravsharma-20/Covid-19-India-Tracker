import React, { useState } from 'react';
import { connect } from 'react-redux';

import Table from '../../Common/Table';
import Cards from '../../Common/Cards';

import StateCodes from '../../utils/StateCodes.json';
import NotFound from '../../utils/NotFound';

import './StateDetail.css';


const StateDetail = (props) => {

  const currState = (props.match.params.stateCode).toUpperCase();
  
  if(!(currState in StateCodes)){
    return <NotFound />;
  }

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
