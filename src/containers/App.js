import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Session from './Session';
import UserDashboard from './UserDashboard';

class App extends React.PureComponent {
  render() {
    return _.isEmpty(this.props.session.user) ? (
      <Route path='/login' component={Session} />
    ) : (
      <Route path='/users' component={UserDashboard} />
    );
  }
}

export default connect(state => state)(App);
