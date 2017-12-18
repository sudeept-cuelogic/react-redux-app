import React from 'react';
import { SIGN_IN, USERNAME, PASSWORD } from '../constants/infoTexts';
import Button from '../components/Button';
import InputField from '../components/InputField';
import LabelField from '../components/LabelField';

export default class Session extends React.Component {
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
                /> <br/>
                <LabelField
                    forText={"password"}
                    infoText={PASSWORD}
                />
                <InputField
                    placeholderText={PASSWORD}
                    attrID={"password"}
                    inputType="password"
                /> <br/>
                <Button
                    attrID="signIn"
                    buttonType="button"
                    buttonText={SIGN_IN}
                />
            </div>
        );
    }
}
