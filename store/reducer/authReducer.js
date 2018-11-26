import userAction from '../action/userAction';
import adAction from '../action/adAction';
import firebase from '../firebase/config';
const INITIAL_STATE = {
    user:null,
    categories:[],
    searchAds:[],
    isLoad:false
}

export default function authReducer(state = INITIAL_STATE, action){
    switch(action.type){

        // user section

        case userAction.ADD_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case userAction.ADD_USER_SUC:
            return Object.assign({}, state, {isLoad:false, user:action.payload})

        case userAction.GET_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case userAction.GET_USER_SUC:
            return Object.assign({}, state, {isLoad:false, user:action.payload.userInfo})

        case userAction.SIGNOUT_PRO:
            return Object.assign({}, state, {isLoad:false, user:null})
        case userAction.SIGNOUT_SUC:
            return Object.assign({}, state, {isLoad:false, user:null})

        case userAction.CHECK_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case userAction.CHECK_USER_SUC:
            return Object.assign({}, state, {isLoad:false, user:action.payload})

      

        default:
            return state

    }
} 