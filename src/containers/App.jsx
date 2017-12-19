import React from 'react';
import { connect } from 'react-redux';

import InputField from '../components/InputField'
import Session from './Session';
import UserDashboard from './UserDashboard';

const mapStateToProps = state => {
    debugger
    return({
        session: state.sessionReducer.session,
        usersList: state.userReducer.users
    })
}

class App extends React.Component {
    render() {
        if (_.isEmpty(this.props.session.user)) {
            return(
                <Session usersList={this.props.usersList} />
            );
        } else {
            return (
                <UserDashboard
                    session={this.props.session}
                    usersList={this.props.usersList}
                />
            )
        }
    }
}

export default connect(mapStateToProps)(App);
