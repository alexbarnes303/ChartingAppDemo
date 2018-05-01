export function loadSchoolData(data) {
  return {
    type: 'LOAD_SCHOOL_DATA',
    payload: data
  };
}


export function setSchoolFilters(key) {
  return {
    type: 'SET_SCHOOL_FILTERS',
    payload: key
  };
}


export function selectSchool(school) {
  return {
    type: 'SELECT_SCHOOL',
    payload: school
  };
}

export function selectYear(year) {
  return {
    type: 'SELECT_YEAR',
    payload: year
  };
}


export function loadRegionData(data) {
  return {
    type: 'LOAD_REGION_DATA',
    payload: data
  };
}


export function setRegionFilters(key) {
  return {
    type: 'SET_REGION_FILTERS',
    payload: key
  };
}


export function selectSubject(subject) {
  return {
    type: 'SELECT_SUBJECT',
    payload: subject
  };
}


export function loadStudentData(school) {
  return {
    type: 'LOAD_STUDENT_DATA',
    payload: school
  };
}


export function createGroup(group, data) {
  return {
    type: 'CREATE_GROUP',
    payload: {group: group, studentData: data}
  };
}

export function loadGroups(school) {
  return {
    type: 'LOAD_GROUPS',
    payload: school
  };
}

export function saveGroup(group) {
  return {
    type: 'SAVE_GROUP',
    payload: group
  };
}

export function deleteGroup(group) {
  return {
    type: 'DELETE_GROUP',
    payload: group
  };
}