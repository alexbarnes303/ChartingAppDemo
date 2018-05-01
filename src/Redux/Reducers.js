import {RegionData, SchoolData, StudentData} from '../Data/ChartData';
import mathjs from 'mathjs';


//// helper functions


/* takes newData object containing data for the selected subject and builds the subjectData object
using the current settings in the filters object. It also takes in and passes on the 'subject' 
property but it does not use it */  

function filterRegionData(subject, newData, filters) {
  let subjectData = {};
  for (let group in newData) { 
    if (newData.hasOwnProperty(group)) {   
      if (filters[group] === true) {
        subjectData[group] = newData[group];
      }
    } 
  } 
  return {
    subject,
    subjectData,
    filters
  }
}


/* takes newData object containg data for the selected school and year and then builds schoolData
object for each subject using the current settings in the filters object. It also takes in and passes 
on 'school' and 'year' properties but does not use them */

function filterSchoolData(school, year, newData, filters) {
  let schoolData = {english:{}, maths:{}, science:{}};
  for (let subject in newData) { 
    if (newData.hasOwnProperty(subject)) {         
      for (let group in newData[subject]) {  
        if(newData[subject].hasOwnProperty(group)) {   
          if (filters[group] === true) {       
            schoolData[subject][group] = newData[subject][group];
          } 
        }       
      }
    }
  }  
  return {
    school,
    year,
    schoolData,
    filters
  }
}



/* filters data for NaplanSchoolData component. Selects dataset by
school and year and then optionally displays any combination of
all, male & female scores for all subjects depending on filter settings
Any change to school, year or filters is passed through the filterSchoolData 
function to rebuild the schoolData object in state */

const initialState1 = {
  filters: {all: true, female: true, male: true},
  school: '',
  year: '',
  schoolData: {}
}

export function setSchoolData(state = initialState1, action) {
  let newData;
  let filters; 
  let newState; 
  let school;
  let year;
  switch (action.type) {     
    case 'SET_SCHOOL_FILTERS':
      // sets gender filters using checkbox input to flip filter values
      let key = action.payload;
      let oldvalue = state.filters[key];
      let newvalue = !oldvalue;
      let newFilters = Object.assign(
        {}, state.filters, {[key]: newvalue}
      );
      school = state.school;
      filters = newFilters;
      year = state.year;
      newData = SchoolData[school][year]; 
      // rebuild schoolData object in State using current year and school with new gender filters    
      newState = filterSchoolData(school, year, newData, filters);
      return newState;
    case 'SELECT_SCHOOL':  
      school = action.payload;
      year = state.year;
      filters = state.filters;
      newData = SchoolData[school][year];
      // rebuild schoolData object in State using current filters and newData for selected school
      newState = filterSchoolData(school, year, newData, filters); 
      return newState;
    case 'SELECT_YEAR': 
      year = action.payload;
      school = state.school;
      filters = state.filters;
      newData = SchoolData[school][year];
      // rebuild schoolData object in State using existing school and filters with new year value
      newState = filterSchoolData(school, year, newData, filters); 
      return newState;

    default:
      return state;
 } 
}


/* filters data for SchoolComparison component. Selects dataset by
subject then optionally displays any combination of
state and any number of schools depending on filter setting.
Any change to subject or filters is passed through the filterRegionData 
function to rebuild the current dsubjectData object in state */

const initialState2 = {
  filters: {State: true, School1: false, School2: false, School3: false, School4: false, School5: false},
  subject: '',
  subjectData: {}
}

export function setRegionData(state = initialState2, action) {
  let newData;
  let filters; 
  let newState; 
  let subject;
  switch (action.type) {   
    case 'SELECT_SUBJECT':     
      subject = action.payload;
      newData = RegionData[subject];
      filters = state.filters;
      // rebuild dataset with newData object for selected school and current filters
      newState = filterRegionData(subject, newData, filters);
      return newState;
    case 'SET_REGION_FILTERS': 
      let key = action.payload;
      // flip filter value
      let oldvalue = state.filters[key];
      let newvalue = !oldvalue;
      // build newFilters
      let newFilters = Object.assign(
        {}, state.filters, {[key]: newvalue}
      );
      subject = state.subject;
      newData = RegionData[subject];
      filters = newFilters;
      // rebuild dataset with newData object for current subject and new filters
      newState = filterRegionData(subject, newData, filters);
      return newState;
    default:
      return state;
  }
}



/* Builds datasets for the CustomGroups component. Data is built on the fly 
for the selected group of students using the student scores data for
the currently selected school. Each group is an object with 3 properties: school, 
groupName & groupSet(a Set of student id numbers which defines the group). This set is 
used to pull student scores array for each student from the dataset for the current
school */

const initialState3 = {
  groupData: [],
  group:{}
}

export function setGroupData(state = initialState3, action) {
  let avgArray = [];
  let trendArray = [];
  let studentRows = [];
  let groupStatistics = {};
  let avg, groupAvg, groupStdDev, studentStdDev, studentTrend, groupTrend;
  switch (action.type) {   
    case 'CREATE_GROUP':
      let group = action.payload.group;
      let groupSet = group.groupData;
      let studentData = action.payload.studentData;
       // filter current school studentData for selected students based on ids in groupSet
      let filteredList = studentData.filter(student => {
        return groupSet.has(student.id)        
      });
      // if group has >0 members calculate data for each student and the group
      if (filteredList.length > 0) {
        filteredList.forEach((student, i) =>  {
          avg = (student.scores.reduce((a,b) => {
            return a+b;
          }, 0)/student.scores.length); 
          // calculate std dev and trend for each student
          studentStdDev = (mathjs.std(student.scores, 'uncorrected')).toFixed(2);
          studentTrend = student.scores[3] - student.scores[0];  
          // push student data object to studentRows array          
          studentRows.push(
            {
              student,
              studentTrend,
              avg:avg.toFixed(1),
              studentStdDev
            }
          ); 
          // add student data to group totals   
          trendArray.push(studentTrend);
          avgArray.push(avg); 
        });

        // calculate group summary data based on final group totals
        groupAvg = ((avgArray.reduce((a,b) => {
          return a+b;
        },0)/avgArray.length)).toFixed(2);

        groupStdDev = (mathjs.std(avgArray, 'uncorrected')).toFixed(2);

        groupTrend = ((trendArray.reduce((a,b) => {
          return a+b;
        },0)/trendArray.length)).toFixed(2);
     
        groupStatistics = {
          groupStdDev, 
          groupTrend,
          groupAvg 
        }
      };
      // build groupData object and assign to state
      return state = Object.assign(
        {}, 
        state, 
        {group}, 
        {
          groupData: {
            studentRows,
            groupStatistics
          }
        }
      );
    default:
      return state;
  }
}


/* Manages the display of existing groups for the selected school and manages saving new groups 
and deleting existing groups. Groups are are an object consisting of a Set of student ids
a groupName property and a school property idetifying the school the group belongs to. 
There are three objects being managed: studentData- a list of studdents
for the current selected school, allGroups- all groups for all schools, and currentGroups- the groups
to be displayed for the currently  selected school */

const initialState4 = {
  school: '',
  studentData: [],
  // sample groups
  allGroups:{
    'School 1': {
    
    groups: [
      {
        school: 'School 1',
        groupName: 'sample 1',
        groupData: new Set([132, 224, 566])
      },
      { 
        school: 'School 1',
        groupName: 'sample 2',
        groupData: new Set([347, 343, 553])
      }
    ]
  },
    'School 2': {
      groups:[
         {
        school: 'School 2',
        groupName: 'sample 3',
        groupData: new Set([531, 456])
      },
      ]
    }
  },

  currentGroups:[]
}

export function setStudentData(state = initialState4, action) {
  let groupsArray = [];
  let currentSchool;
  let group;
  let newAllGroups;
  let groupToDelete;
  switch (action.type) {   
    case 'LOAD_STUDENT_DATA':
    // load list of students for selected school
      currentSchool = action.payload;      
      return state = Object.assign({}, state, {school: currentSchool}, {studentData: StudentData[currentSchool].data});
    case 'LOAD_GROUPS':
    // load currentGroups array for selected school from allGroups object
      currentSchool = action.payload; 
      groupsArray = state.allGroups[currentSchool].groups;
      return state = Object.assign({}, state, {currentGroups: groupsArray});
    case 'SAVE_GROUP':
    // generate new group object and push object to array of groups for all schools
      group = action.payload;
      currentSchool = state.school;
      groupsArray = state.allGroups[currentSchool].groups;       
      groupsArray.push(group); 
    // rebuild allGroups object and currentGroups object 
      newAllGroups = Object.assign({}, state.allGroups, {[currentSchool]: {groups: groupsArray}});
      return state = Object.assign({}, state, {currentGroups: groupsArray}, {allGroups: newAllGroups}); 
    case 'DELETE_GROUP':
    // delete selected group based on groupName property from array of groups for that school
      group = action.payload;
      groupToDelete = group.groupName;
      currentSchool = state.school;
      groupsArray = state.allGroups[currentSchool].groups;
      groupsArray.forEach((group, i) => {
        if(group.groupName === groupToDelete) {
          groupsArray.splice(i,1);
        }
      });
      // rebuild allGroups and currentGroups with updated array
      newAllGroups = Object.assign({}, state.allGroups, {[currentSchool]: {groups: groupsArray}});
      return state = Object.assign({}, state, {currentGroups: groupsArray}, {allGroups: newAllGroups}); 
    default:
      return state;
  }
}



