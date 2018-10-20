import { combineReducers, createStore, applyMiddleware } from 'redux'
import {buyReducer} from "./reducers/";
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    buy:buyReducer
})

const store= createStore(rootReducer,applyMiddleware(thunk))

export {store}