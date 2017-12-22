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

  handleOnBlur = event => {
    let newUsername = event.target.value;
    let oldName = this.state.username;
    this.setState((prevState) => ({ editUsername: !prevState.editUsername, username: newUsername }));
    this.props.usernameChange(oldName, newUsername);
  }

  handleUsernameChange = () => {
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
