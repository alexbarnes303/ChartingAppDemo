import React, {Component} from 'react';
import * as actions from '../../Redux/Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid, Col, Row, Button, FormControl, FormGroup, Panel, ListGroup} from 'react-bootstrap';
import StudentList from './StudentList';
import GroupTable from './GroupTable';
import GroupList from './GroupList';
import ControlPanel1 from '../ControlPanels/ControlPanel1';
import Modal from 'react-modal';

/* Parent component for the CustomGroups page. It initially displays child component ControlPanel1 with a list of schools. 
selectSchool is passed to ControlPanel1 and conditonally renders the GroupList component with a list of student groups 
for that school and the StudentList component with a list of all students from that school. handleDatSelect is passed to 
StudentList as props and builds a Set of selected students. The saveGroup method fires an action that generates a group
using the Set of ids built by handleDataSelect and adds that new group to the groups array for the current school. The
createGroup method is passed to the GroupList component and fires an action which generates data for that group and 
conditionally renders the GroupTable component which displays that data. The deleteGroup method is passed to GrouList
and fires an action which deletes the currently displayed group from the groups array */

class CustomGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      showModal: false,
      studentSet: new Set()
    };

    this.handleDataSelect = this.handleDataSelect.bind(this);
    this.saveGroup = this.saveGroup.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.selectSchool = this.selectSchool.bind(this);  
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  schoolsList = ['School 1', 'School 2'];
  
  /* handles school selection - displays student list and groups for selected school and clears data from the current
  studentSet(the Set used to build new groups of selected students for the saveGroup method) and clears the currently 
  displayed group data */
  selectSchool(school) {
    this.props.actions.loadStudentData(school);
    this.props.actions.loadGroups(school)
    this.setState({studentSet: new Set()})
    this.props.actions.createGroup('',[]);
  } 
  
  // handles the checkboxes on the student list to build a Set of ids for use by the saveGroup method
  handleDataSelect(key) {
    let set = this.state.studentSet;
    if (set.has(key)) {
      set.delete(key);
    } else {
      set.add(key); 
    }
    this.setState({studentSet: set});
  }
  
  // handles group name for saveGroup
  updateInput(ev) {
    ev.preventDefault();
    this.setState({
      input: ev.target.value,
    }) 
  }

  /* generates a group for display in the GroupTable component. Data is pulled grom the studentData for the current school
  based on the list of ids in the selected group */ 
  createGroup(group) {
    this.props.actions.createGroup(group, this.props.studentData);
  }

  // calls the saveGroup action and clears the current studentSet and group name box
  saveGroup() {   
    if (this.state.input !== '' ) {
      this.props.actions.saveGroup({school: this.props.school, groupName:this.state.input, groupData: this.state.studentSet});
      this.setState({
        input: '',
        studentSet: new Set()
      })  
    }
  }
  
  // triggers delete warning modal
  deleteGroup() {
    this.setState({ showModal: true });   
  } 
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  // triggers the delete action on the selected group
  handleDelete () {
    this.props.actions.deleteGroup(this.props.groupData.group);
    this.setState({ showModal: false });
  }

  render() {
    
    const customStyles = {
        content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        border                : '2px solid black',
        borderRadius          : '5px',
        transform             : 'translate(-50%, -50%)'
      }
    }

    const school = this.props.school;
    const studentList = this.props.studentData; 
    const groups = this.props.groups;  
    const groupData =this.props.groupData;
    const filters = this.state.studentSet;

    return (
      <div>
        <Grid>
          <Row>
          
            { school.length > 0 &&
              <Col md={2}>
                <Panel header='Groups' bsStyle='warning'>    
                  <ListGroup>  
                    <GroupList groups={groups} createGroup={this.createGroup}/> 
                  </ListGroup>
                </Panel> 
                <Button bsStyle='warning' bsSize="small" type="submit" onClick={this.deleteGroup}>
                  Delete Group
                </Button>
              </Col>
            }   

            <Col md={4}>
              <ControlPanel1 list={this.schoolsList} key={school} selectTarget={this.selectSchool}/>           
              <StudentList key={Math.random()} filters={filters} studentList={studentList} school={this.props.school} handleDataSelect={this.handleDataSelect}/> 
            
            { school.length > 0 &&
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.input}
                  placeholder="Enter group name"
                  onChange={this.updateInput}
                />
              </FormGroup>
            }

            { school.length > 0 &&             
              <Button bsStyle='warning' bsSize="small" type="submit" onClick={this.saveGroup}>
                Save Custom Group
              </Button>
            }

            </Col>            
            <Col md={6}>
              <GroupTable school={this.props.school} key={school} data={groupData}/>         
            </Col>
          </Row>
        </Grid>
        
        <Modal 
          isOpen={this.state.showModal}
          contentLabel="Delete warning"
          style={customStyles}
        >
          <h2 >Are you sure you want to delete the {groupData.group.groupName} group?</h2>
          <button onClick={this.handleDelete}>Yes</button>
          {' '}{' '}{''}
          <button onClick={this.handleCloseModal}>No</button>
        </Modal>
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
  groups: state.studentData.currentGroups,
  school: state.studentData.school
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomGroups);