import React from 'react';

import './Table.css';

//functional- inside tabble header
const TableHeaderButton = (props) => {
    return (
    <th className="table-header-row">
      {props.title}
    </th>);
};

export default TableHeaderButton;
