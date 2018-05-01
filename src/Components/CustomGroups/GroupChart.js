import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import * as actions from '../../Redux/Actions';


// to be completed
class StudentChart extends Component {
	constructor(props) {
 	  super(props);
 	  this.state = {}
  }

 render() {
 	return (
 		<div>
 		  <Grid>
 		    <Row>
 		      <Col md={2}>
 			       <LinkContainer to="/CustomGroups">
              <Button bsStyle='warning' bsSize="small" >
                Return to Custom Groups
              </Button>  
            </LinkContainer> 
          </Col>
          <Col md={10}>
 			       Group Chart goes here
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
  groupData: state.groupData,
  studentData: state.studentData.studentData,
  groups: state.studentData.groups,
  school: state.studentData.school
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentChart);