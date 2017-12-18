import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './containers/App';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('app')
);
