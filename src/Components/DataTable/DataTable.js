import {Table, Panel} from 'react-bootstrap';
import React from 'react';
import DataTableRow from './DataTableRow';

export default (props) => {
  
  const targetName = props.target;
  const subject = props.subject;
  const newData = props.data;
  const color = props.color;
  const panelHeader =  targetName ? `${targetName} - ${subject}` :`${subject}`;
  const rows = [];
  Object.keys(newData).forEach((key, i) =>  {
	  rows.push(<DataTableRow key={newData[key]} group={key} data={newData[key]} />);
  });
 
	return (
		<div>  
			<Panel header={panelHeader} bsStyle={color}>
			  <Table striped bordered condensed hover>
          <thead>
			      <tr>
			        <th>Group</th>
			        <th>2013</th>
			        <th>2014</th>
			        <th>2015</th>
			        <th>2016</th>
			      </tr>
    			</thead>
    			<tbody>
      		  {rows}
    			</tbody>
  			</Table>
  	 </Panel>
	  </div>
	);
}

