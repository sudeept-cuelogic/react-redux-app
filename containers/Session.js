import React from 'react';
import { connect } from 'react-redux';
import { SIGN_IN, USERNAME, PASSWORD } from '../constants/infoTexts';
import { logIn } from '../actions/sessionActions';
import Button from '../components/Button';
import InputField from '../components/InputField';
import LabelField from '../components/LabelField';

const mapDispatchToProps = dispatch => ({
    handleClick: username => {
        console.log('username', username);
    }
})

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        },
        this.handleBlur = this._handleBlur.bind(this),
        this.handleClick = this._handleClick.bind(this)
    }

    _handleBlur = event => {
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    _handleClick = event => {
        let userObj = this.props.usersList.filter(user => user.username === this.state.username)[0];
        (userObj && userObj.password === this.state.password) ?
            this.props.dispatch(logIn(userObj.username))
        :
            console.log('session invalid');
    }

    render() {
        return(
            <div id="sessionInfo">
                <LabelField
                    forText={"username"}
                    infoText={USERNAME}
                />
                <InputField
                    placeholderText={USERNAME}
                    attrID={"username"}
                    inputType="text"
                    onBlurEvent={this.handleBlur}
                /> <br/>
                <LabelField
                    forText={"password"}
                    infoText={PASSWORD}
                />
                <InputField
                    placeholderText={PASSWORD}
                    attrID={"password"}
                    inputType="password"
                    onBlurEvent={this.handleBlur}
                /> <br/>
                <Button
                    attrID="signIn"
                    buttonType="button"
                    buttonText={SIGN_IN}
                    onclickEvent={this.handleClick}
                />
            </div>
        );
    }
}

export default connect(state => state)(Session);
