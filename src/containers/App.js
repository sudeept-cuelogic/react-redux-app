import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import ProfileDetail from './ProfileDetail';
import Session from './Session';
import UserDashboard from './UserDashboard';

class App extends React.PureComponent {
  render() {
    debugger
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Session}/>
          <Route path='/users' component={UserDashboard} />
          <Route path='/profile/:username' component={ProfileDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => state)(App);
