import React from 'react';

const LabelField = (props) => {
  return <label htmlFor={props.forText}> {props.infoText} </label>
};

export default LabelField;
