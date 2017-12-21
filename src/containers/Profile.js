import React from 'react';

export default class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editUsername: false,
      username: props.username
    };
  }

  getUsernameElement() {
    if (this.state.editUsername) {
      return (
        <input type="text" defaultValue={this.props.username} onBlur={this.handleOnBlur} />
      );
    };
    return (
      <div onClick={this.handleUsernameChange}>{this.props.username}</div>
    );
  }

  _handleOnBlur = event => {
    let oldName = this.state.username;
    this.setState({ editUsername: !this.state.editUsername, username: event.target.value });
    this.props.usernameChange(oldName, event.target.value);
  }

  _handleUsernameChange = () => {
    this.setState({ editUsername: !this.state.editUsername });
  }

  render() {
    return(
      <div id="profile">
        {this.getUsernameElement()}
      </div>
    );
  }
}
