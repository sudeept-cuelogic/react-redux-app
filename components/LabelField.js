import React from 'react';
import { connect } from 'react-redux';

const LabelField = props => {
    return(
        <label htmlFor={props.forText}> {props.infoText} </label>
    );
}

export default connect(() => ({}), () => ({}))(LabelField);
