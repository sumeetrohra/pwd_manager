import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    PASSWORD_FORM_NAME_CHANGED,
    PASSWORD_FORM_USER_NAME_CHANGED,
    PASSWORD_FORM_PASSWORD_CHANGED,
    PASSWORD_SAVE_SUCCESS,
    PASSWORD_FETCH_SUCCESS
} from './types';

export const passwordFormNameChange = (text) => {
    return {
        type: PASSWORD_FORM_NAME_CHANGED,
        payload: text
    };
};

export const passwordFormUserNameChanged = (text) => {
    return {
        type: PASSWORD_FORM_USER_NAME_CHANGED,
        payload: text
    };
};

export const passwordFormPassswordChanged = (text) => {
    return {
        type: PASSWORD_FORM_PASSWORD_CHANGED,
        payload: text
    };
};

export const addPassword = ({ name, userName, password }) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/passwords`)
            .push({ name, userName, password })
            .then(() => {
                dispatch({ type: PASSWORD_SAVE_SUCCESS });
                Actions.pop();
            });
    };
};

export const passwordFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/passwords`)
        .on('value', snapshot => {
            dispatch({
                type: PASSWORD_FETCH_SUCCESS,
                payload: snapshot.val()
            });
        });
    };
};

export const passwordSave = ({ name, userName, password, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/passwords/${uid}`)
        .set({ name, userName, password })
        .then(() => {
            dispatch({ type: PASSWORD_SAVE_SUCCESS });
            Actions.pop();
        });
    };
};

export const passwordDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/passwords/${uid}`)
        .remove()
        .then(() => Actions.pop());
    };
};
