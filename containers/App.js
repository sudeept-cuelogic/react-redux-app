import React from 'react';
import { connect } from 'react-redux';

import InputField from '../components/InputField'
import Session from './Session';

class App extends React.Component {
    render() {
        return(
            <Session />
        );
    }
}

export default connect(state => state)(App);
