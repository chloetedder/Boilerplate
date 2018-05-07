import {fromJS} from 'immutable';
import {
CHANGE_EMAIL,
CHANGE_PASSWORD,
LOGIN_FAILURE,
LOGIN_SUCCESS, 
} from './constants';

const initialState = fromJS({
email: '',
password: '',
error: false,
});

function homeReducer(state = initialState, action){
switch(action.type){
    case CHANGE_EMAIL:
        return state
        .set('email', action.email);
    case CHANGE_PASSWORD:
        return state
        .set('password', action.password);
    case LOGIN_SUCCESS:
        return state
        .set('password', '');
    case LOGIN_FAILURE:
        return state
        .set('error', action.error);
    default:
        return state;
}
}

export default homeReducer;