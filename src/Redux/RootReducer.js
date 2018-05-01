import {combineReducers} from 'redux';
import * as reducers from './Reducers'; 

const RootReducer = combineReducers({
  schoolData: reducers.setSchoolData,
  regionData: reducers.setRegionData,
  studentData: reducers.setStudentData,
  groupData: reducers.setGroupData

});

export default RootReducer; 