import React from 'react';
import Profile from './Profile';

export default class NavPanel extends React.Component {
    render() {
        return(
            <div id="navigationPanel" style={{ float: 'left', width: '20%' }}>
                <Profile username={this.props.username} />
            </div>
        );
    }
}
