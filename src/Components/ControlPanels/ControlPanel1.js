import {Grid, Row, Col, ButtonToolbar, DropdownButton, Panel} from 'react-bootstrap';
import React, {Component} from 'react';
import TargetList from './TargetList';

// used as dropdown control panel by CustomGroups- renders TargetList with a list of schools

export default class ControlPanel1 extends Component {

  constructor(props){
  	super(props);
    this.handleDataSelect = this.handleDataSelect.bind(this);
  };

  handleDataSelect(key) {
  	this.props.selectData(key);	
  } 

  render() {

  	const list = this.props.list;
    const title = 'Select School' ;
  	const items = list.map((target, index)=>{ 
  		return <TargetList key={target} target={target} selectTarget={this.props.selectTarget}/>
    })

  	return  (
  		<Panel header='Select School' bsStyle='warning'>
  		  <Grid>
  		    <Row>
  		      <Col md={4}>
              <ButtonToolbar>
                <DropdownButton  bsSize="xsmall" title={title} id="select_target" >
                  {items}       
                </DropdownButton>        
               </ButtonToolbar>
            </Col>
				  </Row>
			  </Grid>
  		</Panel>
  	);
  }
}