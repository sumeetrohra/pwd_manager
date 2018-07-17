import {
    PASSWORD_FORM_NAME_CHANGED,
    PASSWORD_FORM_USER_NAME_CHANGED,
    PASSWORD_FORM_PASSWORD_CHANGED,
    PASSWORD_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    userName: '',
    password: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PASSWORD_FORM_NAME_CHANGED:
            return { ...state, name: action.payload };

        case PASSWORD_FORM_USER_NAME_CHANGED:
            return { ...state, userName: action.payload };

        case PASSWORD_FORM_PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case PASSWORD_SAVE_SUCCESS:
            return INITIAL_STATE;

        default:
            return state;
    }
};
