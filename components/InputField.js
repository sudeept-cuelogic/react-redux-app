import React from 'react';
import { connect } from 'react-redux';

const InputField = props => {
    return(
        <input
            type={props.inputType}
            placeholder={props.placeholderText}
            id={props.attrID}
        />
    );
}

export default connect(() => ({}), () => ({}))(InputField);
