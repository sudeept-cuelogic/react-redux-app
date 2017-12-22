import React from 'react';

const Button = (props) => {
  return (
    <button
      id={ props.attrID }
      type={ props.buttonType }
      onClick={ props.onclickEvent }
      style={ props.elementStyle }> { props.buttonText }
    </button>
  );
};

export default Button;
