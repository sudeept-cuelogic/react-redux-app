import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NavPanel from '../components/NavPanel'
import WorkPanel from './WorkPanel';

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="userDashboard">
                <Header />
                <NavPanel username={this.props.session.user} />
                <WorkPanel usersList={this.props.usersList} />
            </div>
        );
    }
}

export default connect(() => ({}), () => ({}))(UserDashboard);
