import{
    CHANGE_COLOR,
    CHANGE_AGE,
    CHANGE_DOGS,
    CHANGE_FOOD,
    CHANGE_MISSISSIPPI,
    SUBMIT_FAILURE,
    SUBMIT_SUCCESS,
    SUBMIT_SURVEY,
     } from './constants';
    
    export function changeDog(dog){
    return {
        type: CHANGE_DOGS,
        dog, };
    }
    
    export function changeColor(color){
        return {
        type: CHANGE_COLOR,
        color, };
    }
    
    export function changeAge(age){
        return {
        type: CHANGE_AGE,
        age, };
    }

    export function changeFood(food){
        return {
        type: CHANGE_FOOD,
        food, };
    }

    export function changeMississippi(ms){
        return {
        type: CHANGE_MISSISSIPPI,
        ms, };
    }
    
    export function surveySuccess(nextRoute){
        return {
        type: SUBMIT_SUCCESS,
        nextRoute, };
    }
    
    export function surveyFailed(error){
        return {
        type: SUBMIT_FAILURE,
        error, };
    }

    export function changeSubmit(){
        return {
        type: SUBMIT_SURVEY,
        };//no payload
    }