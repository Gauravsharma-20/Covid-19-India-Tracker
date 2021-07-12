import React, { lazy, Suspense, useState } from 'react';

import TableData from './TableData';
import Loader from '../../utils/Loader';

const TableHeader = lazy(()=>import('./TableHeader'));


const Table = (props) => {
  
  const [deltaDays, setDeltaDays] = useState(7);

  if(!props.data || props.data===undefined) {
    return <Loader />;
  }
    
  const linkFlag = props.primaryTitle !== 'Districts'? true:false;  

  return (
    <Suspense fallback={<Loader />}>
      <React.Fragment>
      <div className="deltaSwitchContainer">
        <h5 className="delta-switch-tag">{deltaDays===7?'Weekly Changes':'Daily Changes'}</h5>
        <label className="switch">
          <input type="checkbox" onClick={()=>setDeltaDays(deltaDays===1? 7 : 1)}/>
          <span className="slider-round"></span>
        </label>
      </div>
      </React.Fragment>
      
      <table className="covid-table">
        <thead className="myHeader">
          <TableHeader data={props.data} primaryTitle={props.primaryTitle}/>
        </thead>
        <tbody>
          <TableData
           data={props.data}
           addLink={linkFlag}
           deltaDays={deltaDays}
           link={props.primaryTitle!=='Districts'?true:false} 
           />
        </tbody>
      </table>
    </Suspense>
  );
};

export default Table;

/*
<div className="delta-switch">
        <button type="button" onClick={handleClick}>{`${deltaDays}D`}</button>
        
      </div>
*/ 
