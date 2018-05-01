import {Table, Panel} from 'react-bootstrap';
import StudentListRow from './StudentListRow';
import React from 'react';

export default (props) => {
  
  const school = props.school;
  const newData = props.studentList;
  const rows = [];
  newData.forEach((student, i) =>  {
	  rows.push(<StudentListRow key={i} filters={props.filters} data={{ID: student.id, name: student.name}} handleDataSelect={props.handleDataSelect} />);
  });
 
  if (school) {
		return (
			<div>  
				<Panel header={`Student List for ${school}`} bsStyle='warning'>
				  <Table striped bordered condensed hover>
	          <thead>
				      <tr>		     
				        <th></th>			     
				        <th>ID</th>		     
				        <th>Name</th>		     
				      </tr>
	    			</thead>
	    			<tbody>
	      		 {rows}
	    			</tbody>
	  			</Table>   
	  	  </Panel>
		  </div>
		);
	} else {
		return (
		  <div></div>
		)
	}
}
