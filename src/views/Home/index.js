import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import Loader from '../../utils/Loader';

import './Home.css';


const Table = lazy(()=>import('../../Common/Table'));
const Cards = lazy(()=>import('../../Common/Cards'));


const Home = (props) => {

  const primaryHomeTitle = 'INDIA';

  return (
    <div>
      <div className="homePrimaryTitle">
        <h1>{primaryHomeTitle}</h1>
      </div>
      <Suspense fallback={<Loader />}>
        <Cards 
          data = {props.stateData.TT?.total}
          delta = {props.stateData.TT?.delta7}
          />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Table
          data ={props.stateData}
          primaryTitle='State/UT'
          />
      </Suspense>
    </div>
  );
};


const mapStateToProps = state => {
  return { stateData: state.stateData };
};


export default connect(mapStateToProps)(Home);
