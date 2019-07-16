import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { colors, sort } from './reducers/color';

const initialState = {
    colors: [
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
    ],
    sort: "SORTED_BY_TITLE"
}

const store = createStore(
    combineReducers({ colors, sort }), initialState);
console.log('createStore', store.getState().colors.length);
store.dispatch({
    type: "ADD_COLOR",
    id: 4,
    title: "Party Pink",
    color: "#f142ff",
    timestamp: "Thu Mar 10 2016 15:00:00 GMT-0800 (PST)"
});
store.dispatch({
    type: "RATE_COLOR",
    id: 4,
    rating: 5
});
console.log('createStore', store.getState());

ReactDOM.render(<App colors={initialState.colors} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
