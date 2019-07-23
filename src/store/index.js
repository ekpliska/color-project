import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sort } from '../reducers/color';
import stateData from '../initialState';

// Регистратор
const logger = store => next => action => {
    let result;
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();    
}

// Сохранитель
const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
}

const storeFactory = (initialSate = stateData) => {
    return (
        applyMiddleware(logger, saver)(createStore)(
            combineReducers({ colors, sort }),
            (localStorage['redux-store']) ?
                JSON.parse(localStorage['redux-store']) :
                stateData
        )
    )
}

export default storeFactory;
