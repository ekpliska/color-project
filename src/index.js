import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storeFactory from './store/index';
import { Provider } from 'react-redux';

const store = storeFactory();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)