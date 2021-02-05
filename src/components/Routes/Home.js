import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import Loader from '../utils/Loader';

const Table = lazy(()=>import('../Table/Table'));
const Cards = lazy(()=>import('../Cards/Cards'));


class Home extends React.Component {
  render() {
    console.log(this.props.stateData);
    return (
      <div>
        <Suspense fallback={<Loader />}>
        <Cards 
          data = {this.props.stateData.TT?.total}
          delta = {this.props.stateData.TT?.delta7}
          />
        </Suspense>
        <Suspense fallback={<Loader />}>
        <Table
          data ={this.props.stateData}
          primaryTitle='State/UT'
          />
        </Suspense>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return { stateData: state.stateData };
};

export default connect(mapStateToProps)(Home);


/*

*/
