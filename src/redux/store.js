import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware' // this is the fulfilled , pending
import authReducer from './authReducer'
import fbReducer from './fbReducer'

const rootReducer = combineReducers({
    authReducer,
    fbReducer
})


export default createStore(rootReducer, applyMiddleware(promiseMiddleware))

//have to have middleware if doing axios calls in redux
//doing the axios calls in the component you don't have to use middleware