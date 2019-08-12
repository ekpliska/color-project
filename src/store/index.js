// Хранилище

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { colors } from '../reducers/colors';
import stateData from '../initialState';


const storeFactory = (initialState = stateData) =>
    applyMiddleware(logger)(createStore)(
        combineReducers({ colors }), stateData
    )

export default storeFactory;