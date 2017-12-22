import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import ProfileDetail from './ProfileDetail';
import Session from './Session';
import UserDashboard from './UserDashboard';

class App extends React.PureComponent {
  render() {
    return(
      <Switch>
        <Route path='/login' component={Session} />
        <Route path='/users' component={UserDashboard} />
        <Route path='/profile' component={ProfileDetail} />
      </Switch>
    );
  }
}

export default connect(state => state)(App);
