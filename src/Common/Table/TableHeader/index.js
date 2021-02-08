import React from 'react';


const TableHeaderButton = (props) => {
  return (
  <th className="table-header-row">
    {props.title}
  </th>);
};


const TableHeader = (props) => {

    return (
    <tr className="table-header-container">
      <TableHeaderButton title={props.primaryTitle}/>
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

export default TableHeader;
