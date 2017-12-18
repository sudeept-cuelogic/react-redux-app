import React from 'react';

export default class InputField extends React.Component {
    render() {
        return(
            <input
                type={this.props.inputType}
                placeholder={this.props.placeholderText}
                id={this.props.attrID}
            />
        );
    }
}
