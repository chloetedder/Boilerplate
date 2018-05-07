import{
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    SUBMIT_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE } from './constants';
    
    export function changeEmail(email){
    return {
    type: CHANGE_EMAIL,
    email, };
    }
    
    export function changePassword(password){
        return {
        type: CHANGE_PASSWORD,
        password, };
    }
    
    export function changeSubmitLogin(){
        return {
        type: SUBMIT_LOGIN,
        };//no payload
    }
    
    export function loginSuccess(nextRoute, email){
        return {
        type: LOGIN_SUCCESS,
        nextRoute,
        email };
    }
    
    export function loginFailed(error){
        return {
        type: LOGIN_FAILURE,
        error,};
    }