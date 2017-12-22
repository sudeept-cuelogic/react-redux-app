import React from 'react';

const InputField = (props) => {
  return (
    <input
      type={ props.inputType }
      placeholder={ props.placeholderText }
      id={ props.attrID }
      onBlur={ props.onBlurEvent }
      onClick={ props.onClickEvent }
      defaultValue={ props.valueText }
    />
  );
};

export default InputField;
