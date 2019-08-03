import reducer from '../reducers';
import stateData from '../initialState';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'

const store = applyMiddleware(createLogger)(createStore)(reducer, stateData);

export default store;

// // Регистратор
// const logger = store => next => action => {
//     let result;
//     console.groupCollapsed('dispatching', action.type);
//     console.log('prev state', store.getState());
//     console.log('action', action);
//     result = next(action);
//     console.log('next state', store.getState());
//     console.groupEnd();    
// }

// // Сохранитель
// const saver = store => next => action => {
//     let result = next(action);
//     localStorage['redux-store'] = JSON.stringify(store.getState());
//     return result;
// }


// const storeFactory = (initialSate = stateData) => {
//     return (
//         applyMiddleware(logger, saver)(createStore)(
//             combineReducers({ colors, sort }),
//             (localStorage['redux-store']) ?
//                 JSON.parse(localStorage['redux-store']) :
//                 stateData
//         )
//     )
// }

