import authAction from '../action/authAction';
const INITIAL_STATE = {
    user:null,
    categories:[],
    searchAds:[],
    isLoad:false
}

export default function authReducer(state = INITIAL_STATE, action){
    switch(action.type){

        // user section

        case authAction.ADD_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case authAction.ADD_USER_SUC:
            return Object.assign({}, state, {isLoad:false, user:action.payload})

        case authAction.GET_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case authAction.GET_USER_SUC:
            return Object.assign({}, state, {isLoad:false, user:action.payload})

        case authAction.SIGNOUT_PRO:
            return Object.assign({}, state, {isLoad:false, user:null})
        case authAction.SIGNOUT_SUC:
            return Object.assign({}, state, {isLoad:false, user:null})

        case authAction.CHECK_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case authAction.CHECK_USER_SUC:
            return Object.assign({}, state, {isLoad:false, user:action.payload})
      
        default:
            return state

    }
} 