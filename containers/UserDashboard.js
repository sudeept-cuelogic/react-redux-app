import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="userDashboard">
                <Header username={this.props.session.user} />
            </div>
        );
    }
}

export default connect(() => ({}), () => ({}))(UserDashboard);
