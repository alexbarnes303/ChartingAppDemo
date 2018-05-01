import {Grid, Row, Col, ButtonToolbar, DropdownButton, Checkbox, Panel, FormGroup} from 'react-bootstrap';
import React, {Component} from 'react';
import TargetList from './TargetList';

/* Control panel used by NaplanSchoolData page and SchoolComparison page. Accepts 1 or 2 variable length dynamically 
named lists for use in generating dropdown selection menus(ie year, school subject etc) and a filterList object which 
is a variable length object of filters with dynamic names(ie gender, school etc) used to build a set of checkboxes. 
Also accepts 'width' as props for dynamically setting width of checkbox controols element.
Accepts three methods as props from parent component- selectData for managing checkboxes and selectTarget1 and 
selectTarget2 (if supplied) for managing dropdown selection */

export default class ControlPanel2 extends Component {

  constructor(props){
  	super(props);
    this.handleDataSelect = this.handleDataSelect.bind(this);
  };

  handleDataSelect(key) {
  	this.props.selectData(key);	
  } 

  render() {
    const filters = this.props.filters;  
    const filterControls = [];
    // Build filter list of named checkboxes from filters object
    const filterList = Object.keys(filters);
    filterList.forEach((filter, i) => {
      filterControls.push(
        <Checkbox key={filter} inline checked={filters[filter]} onChange={this.handleDataSelect.bind(this, filter)}>
          {filter}
        </Checkbox> 
      )
    })

    let width = this.props.panelWidth;
  	let list1 = this.props.list1;
    let list2 = this.props.list2;
    let items1 = [];
    let items2 = [];
    let title1 = 'Select ' + this.props.targetNames[0];
    let title2 = 'Select ' + this.props.targetNames[1];
    let school = this.props.school;
    let year = this.props.year;
    let color = this.props.color;
    // Build dynamic headers for control panel and generate dropdown lists
    let panelHeader = school ? `Control Panel - School: ${school} - Year: ${year}` : `Control Panel`;
      items1 = list1.map((target, index)=>{ 
  		  return <TargetList key={Math.random()} target={target} selectTarget={this.props.selectTarget1}/>
    });
    if (list2) {
      items2 = list2.map((target, index)=>{ 
        return <TargetList key={Math.random()} target={target} selectTarget={this.props.selectTarget2}/>
      })
    };
  	return  (
  		<Panel header={panelHeader} bsStyle={color}>
  		  <Grid>
  		    <Row>
  		      <Col md={2}>
              <ButtonToolbar>
                <DropdownButton bsSize="xsmall" title={title1} id="select_target" >
                  {items1}       
                </DropdownButton>        
               </ButtonToolbar>
            </Col>

            { items2.length > 0 &&
              <Col md={2}>
                <ButtonToolbar>
                  <DropdownButton bsSize="xsmall" title={title2} id="select_target" >
                    {items2}       
                  </DropdownButton>        
                </ButtonToolbar>
              </Col>
            }

            <Col md={width}>
              <FormGroup>
                {filterControls}
					    </FormGroup>
					  </Col>
				  </Row>
			  </Grid>
  		</Panel>
  	);
  }
}