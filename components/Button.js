import React from 'react';

export default class Button extends React.Component {
    render() {
        return(
            <button id={this.props.attrID} type={this.props.buttonType}> {this.props.buttonText} </button>
        )
    }
}
