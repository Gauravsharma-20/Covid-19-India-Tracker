import React from 'react';

import TableHeaderButton from './TableHeaderButton';

class TableHeader extends React.Component {
  render() {

    return (
    <tr className="table-header-container">
      <TableHeaderButton title={this.props.primaryTitle}/>
      <TableHeaderButton title='Confirmed'/>
      <TableHeaderButton title='Active'/>
      <TableHeaderButton title='Recovered'/>
      <TableHeaderButton title='Deceased'/>
      <TableHeaderButton title='Tested'/>
      <TableHeaderButton title='Vaccinated'/>
      <TableHeaderButton title='Active Ratio'/>
      <TableHeaderButton title='Recovery Ratio'/>
      <TableHeaderButton title='Fatality Ratio'/>
      <TableHeaderButton title='Positivity Ratio'/>
      <TableHeaderButton title='Population'/>
    </tr>);
  }
}

export default TableHeader;
