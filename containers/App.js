import React from 'react';
import { connect } from 'react-redux';

import InputField from '../components/InputField'
import Session from './Session';
import UserDashboard from './UserDashboard';

const mapStateToProps = state => {
    return({
        session: state.sessionReducer.session,
        usersList: state.userReducer.users
    })
}

var isUserSessionPresent = (session) => {
    _.isEmpty(session.user)
}

class App extends React.Component {
    render() {
        if (_.isEmpty(this.props.session.user)) {
            return(
                <Session />
            );
        } else {
            return (
                <UserDashboard />
            )
        }
    }
}

export default connect(mapStateToProps)(App);
