import React, { lazy, Suspense, useState } from 'react';

import TableData from './TableData';
import Loader from '../../utils/Loader';

const TableHeader = lazy(()=>import('./TableHeader'));


const Table = (props) => {
  
  const [deltaDays, setDeltaDays] = useState(7);

  if(!props.data || props.data===undefined) {
    return <Loader />;
  }
    
  const linkFlag = props.primaryTitle!=='Districts'? true:false;

  const handleClick = () => {
    setDeltaDays(deltaDays===1? 7 : 1);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="delta-switch">
        <button type="button" onClick={handleClick}>{`${deltaDays}D`}</button>
        <h5>{deltaDays===7?'Weekly Changes':'Daily Changes'}</h5>
      </div>
      <table className="covid-table">
        <thead className="myHeader">
          <TableHeader data={props.data} primaryTitle={props.primaryTitle}/>
        </thead>
        <tbody>
          <TableData data={props.data} addLink={linkFlag} deltaDays={deltaDays}/>
        </tbody>
      </table>
    </Suspense>
  );
};

export default Table;
