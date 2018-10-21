import { combineReducers, createStore, applyMiddleware } from 'redux'
import {homeReducer} from "./reducers/";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const rootReducer = combineReducers({
    home:homeReducer
})

const store= createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export {store}