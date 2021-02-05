import React, { lazy, Suspense } from 'react';

import TableData from './TableData';
import Loading from '../utils/Loader';
import Loader from '../utils/Loader';

const TableHeader = lazy(()=>import('./TableHeader'));

class Table extends React.Component {
  
  
  render() {

    if(!this.props.data || this.props.data===undefined) {
      return <Loading />;
    }
    const linkFlag = this.props.primaryTitle!='Districts'? true:false;
    return (
      <div className="tableFixHead">
        <table className="covid-table">
          <thead className="myHeader">
            <Suspense fallback={<Loader />}>
            <TableHeader data={this.props.data} primaryTitle={this.props.primaryTitle}/>
            </Suspense>
          </thead>
          <tbody>
            <TableData data={this.props.data} addLink={linkFlag}/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
