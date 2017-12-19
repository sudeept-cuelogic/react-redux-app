import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import Session from './Session';
import UserDashboard from './UserDashboard';

class App extends React.Component {
    render() {
        if (_.isEmpty(this.props.session.user)) {
            return(
                <Session usersList={this.props.user.list} />
            );
        } else {
            return (
                <UserDashboard
                    session={this.props.session}
                    usersList={this.props.user.list}
                />
            )
        }
    }
}

export default connect(state => state)(App);
