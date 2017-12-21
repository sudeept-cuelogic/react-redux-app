import React from 'react';
import { connect } from 'react-redux';
import { SIGN_IN, USERNAME, PASSWORD } from '../constants/infoTexts';
import { logIn } from '../actions/sessionActions';
import Button from '../components/Button';
import InputField from '../components/InputField';
import LabelField from '../components/LabelField';

const mapDispatchToProps = dispatch => ({
    onValidSession: username => dispatch(logIn(username))
})

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  };

  handleBlur = (event) => {
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  };

  handleClick = (event) => {
    let userObj = this.props.user.list.filter(user => user.username === this.state.username)[0];
    if (userObj && userObj.password === this.state.password) {
      this.props.onValidSession(userObj.username);
      this.props.history.replace('users');
    }
  }

  render() {
    let divStyle = { padding: '5px' };
    return(
      <div id='sessionInfo' style={ {textAlign: 'center', paddingTop: '10%'} }>
        <div style={divStyle}>
          <LabelField
            forText='username'
            infoText={USERNAME}
          />
          <InputField
            placeholderText={USERNAME}
            attrID='username'
            inputType='text'
            onBlurEvent={this.handleBlur}
          />
        </div>
          <div style={divStyle}>
              <LabelField
                  forText='password'
                  infoText={PASSWORD}
              />
              <InputField
                  placeholderText={PASSWORD}
                  attrID='password'
                  inputType='password'
                  onBlurEvent={this.handleBlur}
              />
          </div>
          <Button
              attrID='signIn'
              buttonType='button'
              buttonText={SIGN_IN}
              onclickEvent={this.handleClick}
              elementStyle={ {backgroundColor: '#61DAFB'} }
          />
      </div>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(Session);
