import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Grid, Col, Row} from 'react-bootstrap';
import BarChart from './BarChart';
import DataTable from '../DataTable/DataTable';
import ControlPanel2 from '../ControlPanels/ControlPanel2';
import * as actions from '../../Redux/Actions';


/* Parent component for Naplan School Data page. Initially displays child component ControPanel2 which
displays a list of available schools and years plus a set of checkboxes for selecting which genders to 
display data for. selectScool, selectYear and selectData methods are passed as props to ControlPanel2. These
methods trigger actions which filter the data in the reducer to build a new data set. Tables and charts 
are conditionally rendered once a school and year have been selected using the current settings in the filter object */

class NaplanSchoolData extends Component {
	constructor(props) {
	  super(props);
	  this.state = {  
	  };
    this.selectData = this.selectData.bind(this);
    this.selectSchool = this.selectSchool.bind(this);		
    this.selectYear = this.selectYear.bind(this);			 
  }

  schoolsList = ['School 1', 'School 2'];
  yearList = ['Year 7', 'Year 9'];

  selectData(key) {
    this.props.actions.setSchoolFilters(key);
  }

  selectSchool(school) { 
    this.props.actions.selectSchool(school);
  }	  

  selectYear(year) { 
    this.props.actions.selectYear(year);
  }
  
  render() {
  	let color = 'success';
    const tables = [];
    const charts = [];
    const school = this.props.school;
    const year = this.props.year;
    const target = `${school} - ${year}`;
    const schoolData = this.props.schoolData;
    const filters = this.props.filters; 
    // build tables and charts for each subject based on selected school, year and filters
    Object.keys(schoolData).forEach(subject => {
  	  tables.push(<DataTable key={Math.random()} color={color} target={target}  subject={subject} data={schoolData[subject]} />);  
  	  charts.push(<BarChart key={Math.random()} subject={subject}  data={schoolData[subject]} />);
	  });
    
	  return (
			<div>
				<Grid>
				  <Row>
				    <Col md={8}>
				      <ControlPanel2 color={color} panelWidth={8} key={Math.random()} filters={filters} list1={this.schoolsList} list2={this.yearList} targetNames={['School', 'Year']} school={school} year={year} selectTarget1={this.selectSchool} selectTarget2={this.selectYear} selectData={this.selectData} />
				    <br/><br/>
				    </Col>
				  </Row>

				  { year.length > 0  &&
					  <Row>
					    <Col md={6}>
					     {tables[0]}
					     <br/><br/>
					    </Col>
					    <Col md={6}>   
					     {charts[0]}
					    <br/>
					    </Col>
					  </Row>
				  }

				  { year.length > 0 &&
					  <Row>
					    <Col md={6}>
					     {tables[1]}
					    <br/><br/>
					    </Col>
					    <Col md={6}>   
					      {charts[1]}
					    <br/>
					    </Col>
					  </Row>
				  }

				  { year.length >0 &&
					  <Row>
					    <Col md={6}>
					     {tables[2]}
					    </Col>
					    <Col md={6}>   
					      {charts[2]}
					    </Col>
					  </Row>
				  }

				</Grid>
		  </div>			
	  );
	}
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
  schoolData: state.schoolData.schoolData,
  filters: state.schoolData.filters,
  school: state.schoolData.school,
  year: state.schoolData.year
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NaplanSchoolData);
