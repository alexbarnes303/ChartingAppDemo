import {Table, Panel} from 'react-bootstrap';
import React, {Component} from 'react';
import TableRow from './TableRow';

export default class Table extends Component {

	render() {
    
    const targetName = this.props.target || '';
	  const subject = this.props.subject;
	  const newData = this.props.data;
    const panelHeader = `${targetName}   Subject: ${subject}`;
    const rows = [];
    Object.keys(newData).forEach((key, i) =>  {
  	  rows.push(<TableRow key={i} group={key} data={newData[key]} />);
    });
   
		return (
			<div>
		   
				<Panel Panel header={panelHeader} bsStyle='primary'>
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
}
