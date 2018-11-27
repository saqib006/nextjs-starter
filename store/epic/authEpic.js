import authAction from '../action/authAction';
import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

export class authEpic{

    static url = "http://localhost:3000";
    
    static createUser(action$){
        return action$.ofType(authAction.ADD_USER_PRO).mergeMap(({payload})=>{
            return ajax.post(`${authEpic.url}/auth/register`,payload).map(res=>{
                return{
                    type:authAction.ADD_USER_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }

    static getUser(action$){
        return action$.ofType(authAction.GET_USER_PRO).mergeMap(({payload})=>{
            return ajax.post(`${authEpic.url}/auth/login`, payload).map(res=>{
                return{
                    type:authAction.GET_USER_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }

    static logout(action$){
        return action$.ofType(authAction.SIGNOUT_PRO).mergeMap(()=>{
            return ajax.get(`${authEpic.url}/auth/logout`).map(()=>{
                return {
                    type:authAction.SIGNOUT_SUC
                }
            })
        })
    }


    static checkUser(action$){
        return action$.ofType(authAction.CHECK_USER_PRO).mergeMap(({payload})=>{
            return ajax.post('/user/session', payload).map(res=>{
                console.log('from epic', res)
                return{
                    type:authAction.CHECK_USER_SUC,
                    payload:res.response.userInfo
                }
            })
           
            })
    }


    
}
