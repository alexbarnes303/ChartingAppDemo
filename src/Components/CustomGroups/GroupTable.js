import {Button, Table, Panel} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import React from 'react';
import GroupTableRow from './GroupTableRow';
import GroupStats from './GroupStats';

export default (props) => {
 
  const studentRows = props.data.groupData.studentRows;
  const groupStats = props.data.groupData.groupStatistics;
  const name = props.data.group.groupName;
  const rows = [];
  let groupStatistics; 
  if (name !== undefined) {

    // if group exists map student data
    studentRows.forEach((row, i) =>
    // push student data to groupTableRow
      rows.push(
        <GroupTableRow 
          key={Math.random()} 
          data={row.student} 
          trend={row.studentTrend} 
          avg={row.avg}
          stdDev={row.studentStdDev}
        />
      )
    );  
    // generate group statistics component     
    groupStatistics = <GroupStats key={groupStats} trend={groupStats.groupTrend} avg={groupStats.groupAvg} stdDev={groupStats.groupStdDev} />   
  }
  
  // conditionally render table if group exists
  if (name !== undefined) {
    return (
      <div>        
        <Panel header='Select Data Set' bsStyle='warning'>
          Subject/Data-set selection panel goes here
        </Panel>

        <Panel header={`${name}`} bsStyle='warning'>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Test1</th>
                <th>Test2</th>
                <th>Test3</th>
                <th>Test4</th>
                <th>Mean</th>
                <th>StDev</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </Panel>

        <Panel header={'Group Statistics'} bsStyle='warning'>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Group Mean</th>
                <th>Std Deviaton</th>
                <th>Trend</th>
              </tr> 
            </thead>
            <tbody>
              {groupStatistics}
            </tbody>
          </Table>        
        </Panel> 

        <LinkContainer to="/GroupChart">
          <Button bsStyle='warning' bsSize="small" >
            View Group Chart
          </Button>  
        </LinkContainer> 
          
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
}
