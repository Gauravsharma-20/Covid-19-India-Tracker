import React, { lazy, Suspense } from 'react';

import TableData from './TableData';
import Loader from '../../utils/Loader';

const TableHeader = lazy(()=>import('./TableHeader'));

class Table extends React.Component {
  
  
  render() {

    if(!this.props.data || this.props.data===undefined) {
      return <Loader />;
    }
    const linkFlag = this.props.primaryTitle!='Districts'? true:false;
    return (
      <div className="tableFixHead">
        <Suspense fallback={<Loader />}>
          <table className="covid-table">
            <thead className="myHeader">
              <TableHeader data={this.props.data} primaryTitle={this.props.primaryTitle}/>
            </thead>
            <tbody>
              <TableData data={this.props.data} addLink={linkFlag}/>
           </tbody>
         </table>
        </Suspense>
      </div>
    );
  }
}

export default Table;
