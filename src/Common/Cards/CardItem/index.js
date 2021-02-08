import React from 'react';

import './CardItem.css'

class CardItem extends React.Component {
  
  render() {

    const delta = this.props.delta?`+${new Intl.NumberFormat('en-IN').format(this.props.delta)}`:null;
    
    return (
      <div className={`card-item ${this.props.title}`} >
        <h3>{this.props.title}<i className={this.props.icon} aria-hidden="true"></i></h3>
        <h5>{delta?delta:<br/>}</h5>
        <h4>{new Intl.NumberFormat('en-IN').format(this.props.data)}</h4>
      </div>
    );
  }

}

export default CardItem;
