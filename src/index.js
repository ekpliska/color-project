import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const colors = [
    {
        "id": "1",
        "title": "Ocean at dusk",
        "color": "#00c4e2",
        "rating": 5
    },
    {
        "id": "2",
        "title": "Lawn",
        "color": "26ac56",
        "rating": 3
    },
    {
        "id": "3",
        "title": "Bright red",
        "color": "#ff0000",
        "rating": 0
    },
];

ReactDOM.render(<App colors={colors} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
