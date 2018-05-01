import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Grid, Col, Row} from 'react-bootstrap';
import LineChart from './LineChart';
import DataTable from '../DataTable/DataTable';
import ControlPanel2 from '../ControlPanels/ControlPanel2';
import * as actions from '../../Redux/Actions';


/* Parent component for the School Comparison page. Initially displays the child component ControlPanel2
with a dropdown list of available subjects and checkboxes for determing which schools (including state background) 
to display. selectSubject and setRegionFilters methods are passed to controlPanel2 as props. Selecting a subject calls 
selectSubject method which sends an action which sets the data for that subject in the reducer. Checking and 
unckecking the checkboxes in the control panel calls setRegionFilters which sends an action which resets the 
filters in the reducer. */

class SchoolComparison extends Component {
	constructor(props) {
	  super(props);
	  this.state = {  
	  };		
    this.selectData = this.selectData.bind(this);
    this.selectSubject = this.selectSubject.bind(this);				 
  }

  subjectList = ['English', 'Maths', 'Science'];

  selectData(key) {
    this.props.actions.setRegionFilters(key);
  }

  selectSubject(subject) { 
    this.props.actions.selectSubject(subject);
  }	  
  
  render() {
  	let color = 'danger';
    let subject = this.props.subject;
    let subjectData = this.props.subjectData;
    let filters = this.props.filters;
    let table;
  	let chart;
  	// poulate chart and table with selected data based on subject and filter settings
  	if(this.props.subject) {
  		chart = <LineChart key={Math.random()} color={color} subject={subject} data={subjectData} />;
	    table = <DataTable key={Math.random()} color={color} subject={subject} data={subjectData} /> 
	 }
    
		return (
			<div>
				<Grid>
				  <Row>
				    <Col md={8}>
				      <ControlPanel2 color={color} panelWidth={6} key={Math.random()} filters={filters} list1={this.subjectList} targetNames={['Subject']} selectTarget1={this.selectSubject} selectData={this.selectData} />
				    </Col>
				  </Row>
				  <Row>
				    <Col md={6}>
				    <br/><br/>
				     {table}
				    </Col>
				    <Col md={6}>   
				     {chart}
				    </Col>
				  </Row>
				</Grid>
		  </div>			
	  );
	}
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
    subjectData: state.regionData.subjectData,
    filters: state.regionData.filters,
    subject: state.regionData.subject

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SchoolComparison);

