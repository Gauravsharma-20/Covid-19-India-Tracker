import React from 'react';

import './CardItem.css'

const CardItem = (props) => {

  const delta = props.delta?`+${new Intl.NumberFormat('en-IN').format(props.delta)}`:null;
  
  return (
    <div className={`card-item ${props.title}`} >
      <h3>{props.title}<i className={props.icon} aria-hidden="true"></i></h3>
      <h5>{delta?delta:<br/>}</h5>
      <h4>{new Intl.NumberFormat('en-IN').format(props.data)}</h4>
    </div>
  );

};

export default CardItem;
