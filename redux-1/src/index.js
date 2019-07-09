import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './assets/css/index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import todoApp from './reducers'

const store =createStore(todoApp)
ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
