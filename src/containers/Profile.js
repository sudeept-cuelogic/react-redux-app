import React from 'react';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editUsername: false,
            username: this.props.username
        }
        this.handleUsernameChange = this._handleUsernameChange.bind(this);
        this.handleOnBlur = this._handleOnBlur.bind(this)
    }

    _handleUsernameChange = () => {
        this.setState({ editUsername: !this.state.editUsername });
    }

    _handleOnBlur = event => {
        let oldName = this.state.username;
        this.setState({ editUsername: !this.state.editUsername, username: event.target.value });
        this.props.usernameChange(oldName, event.target.value);
    }

    getUsernameElement = () => {
        if (this.state.editUsername) {
            return(
                <input type="text" defaultValue={this.props.username} onBlur={this.handleOnBlur} />
            )
        } else {
            return(
                <div onClick={this.handleUsernameChange}>{this.props.username}</div>
            )
        }
    }

    render() {
        return(
            <div id="profile">
                {this.getUsernameElement()}
            </div>
        );
    }
}
