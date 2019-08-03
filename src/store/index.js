import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

export default () => {
    const store = createStore(reducers, applyMiddleware(logger));
    return store;
}