import {fromJS} from 'immutable';
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

const initialState = fromJS({
color: '',
age: '',
dog: '',
mississippi: '',
food: '',
error: false,
});

function homeReducer(state = initialState, action){
switch(action.type){
    case CHANGE_COLOR:
        return state
        .set('color', action.color);
    case CHANGE_AGE:
        return state
        .set('age', action.age);
    case CHANGE_DOGS:
        return state
        .set('dog', action.dog);
    case CHANGE_MISSISSIPPI:
        return state
        .set('mississippi', action.mississippi);
    case CHANGE_FOOD:
        return state
        .set('food', action.food);
    case SUBMIT_SUCCESS:
        return state
        .set('error', false);
    case SUBMIT_FAILURE:
        return state
        .set('error', action.error);
    default:
        return state;
}
}

export default homeReducer;