import authReducer from './reducer/authReducer';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {authEpic} from './epic/authEpic';



const rootReducer = combineReducers({
    authReducer
})

const rootEpic = combineEpics(
    userEpic.createUser,
    userEpic.getUser,
    userEpic.checkUser
)

export default function initStore (initialStore){
    const epicMiddleware = createEpicMiddleware(rootEpic)
    const connectStoreMiddleware = applyMiddleware(epicMiddleware)
    const store = createStore(rootReducer, initialStore, connectStoreMiddleware)
    return store
}


