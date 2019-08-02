import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import storeFactory from './store/index';
import { Provider } from 'react-redux';

const store = storeFactory();

window.React = React;
window.store = store;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)