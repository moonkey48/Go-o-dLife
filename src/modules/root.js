import { combineReducers } from 'redux';
import { authReducer } from './user/user';

const rootReducer = combineReducers({
    authReducer
})
export default rootReducer;