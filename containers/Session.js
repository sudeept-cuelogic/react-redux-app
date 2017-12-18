import React from 'react';
import { connect } from 'react-redux';
import { SIGN_IN, USERNAME, PASSWORD } from '../constants/infoTexts';
import { logIn, logOut } from '../actions/sessionActions';
import Button from '../components/Button';
import InputField from '../components/InputField';
import LabelField from '../components/LabelField';

const mapDispatchToProps = dispatch => ({
    onLogin: () => {
        debugger
        console.log('Login button clicked');
    }
})

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        },
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleBlur = event => {
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
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
                    onclickEvent={this.props.onLogin.bind(this)}
                />
            </div>
        );
    }
}

export default connect(() => ({}), mapDispatchToProps)(Session);
