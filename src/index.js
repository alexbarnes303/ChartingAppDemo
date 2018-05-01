import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from './Components/Layout/AppContainer';
import NaplanSchoolData from './Components/NaplanSchoolData/NaplanSchoolData';
import SchoolComparison from './Components/SchoolComparison/SchoolComparison';
import CustomGroups from './Components/CustomGroups/CustomGroups';
import GroupChart from './Components/CustomGroups/GroupChart';
import 'bootstrap/dist/css/bootstrapSandstone.css';
import store from './Redux/Store';
  
const target = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={NaplanSchoolData}/>
        <Route path="SchoolComparison" component={SchoolComparison}/>
        <Route path="CustomGroups" component={CustomGroups}/>
        <Route path="GroupChart" component={GroupChart}/>
      </Route>
    </Router>
  </Provider>
 
),
  target 
);