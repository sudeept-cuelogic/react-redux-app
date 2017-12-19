import React from 'react';
import { connect } from 'react-redux';

export default class LabelField extends React.Component {
    render() {
        return(
            <label htmlFor={this.props.forText}> {this.props.infoText} </label>
        );
    }
}
