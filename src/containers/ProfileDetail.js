import React, { Component } from 'react';

import InputField from '../components/InputField';
import LabelField from '../components/LabelField';
import Button from '../components/Button';
import NavPanel from '../components/NavPanel';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => {

}

class ProfileDetail extends Component {

  handleLogout = () => {
    this.props.onLogOut();
    this.props.history.replace('login');
  }

  render() {
    debugger
    return (
      <div>
        <Header onLogOutEvent={this.handleLogout} />
        <p>My Profile Component</p>
      </div>
    );
  }
}

export default ProfileDetail;
