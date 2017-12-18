import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NavPanel from '../components/NavPanel'
import WorkPanel from './WorkPanel';
import { logOut } from '../actions/sessionActions';

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this._handleLogout.bind(this)
    }

    _handleLogout = () => {
        this.props.dispatch(logOut());
    }

    render() {
        return(
            <div id="userDashboard">
                <Header handleLogout={this.handleLogout}/>
                <NavPanel username={this.props.session.user} />
                <WorkPanel usersList={this.props.usersList} />
            </div>
        );
    }
}

export default connect(state => state)(UserDashboard);
