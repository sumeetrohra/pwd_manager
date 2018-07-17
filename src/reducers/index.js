import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PasswordFormReducer from './PasswordFormReducer';
import PasswordReducer from './PasswordReducer';

export default combineReducers({
    auth: AuthReducer,
    passwordForm: PasswordFormReducer,
    passwords: PasswordReducer
});
