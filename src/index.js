import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './containers/App';
import MyProfile from './containers/MyProfile';
import Session from './containers/Session';
import UserDashboard from './containers/UserDashboard';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/' component={App} />
                <Route path='/users' component={UserDashboard} />
                <Route path='/login' component={Session} />
                <Route path='/my_profile' component={MyProfile} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
