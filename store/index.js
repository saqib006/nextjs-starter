import authReducer from './reducer/authReducer';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {authEpic} from './epic/authEpic';
import { loadState, saveState } from './persist';

const persist = loadState()
const rootReducer = combineReducers({
    authReducer
})
const rootEpic = combineEpics(
    authEpic.createUser,
    authEpic.getUser,
    authEpic.checkUser
)
export default function initStore (initialState){
    const epicMiddleware = createEpicMiddleware(rootEpic)
    const connectStoreMiddleware = applyMiddleware(epicMiddleware)
    const store = createStore(rootReducer, persist, connectStoreMiddleware)
    store.subscribe(()=>{
        saveState(store.getState())
    })
    return store
   


}


