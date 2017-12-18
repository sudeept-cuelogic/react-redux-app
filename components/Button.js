import React from 'react';
import { connect } from 'react-redux';

const Button = props => {
    return(
        <button attrID={props.attrID} type={props.buttonType}> {props.buttonText} </button>
    )
}

export default connect(() => ({}), () => ({}))(Button);
