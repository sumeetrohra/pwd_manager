import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCCaVTzy4ZWAtviZEIwkS8y065TVt6SmXg',
            authDomain: 'pwd-manager-9d7e3.firebaseapp.com',
            databaseURL: 'https://pwd-manager-9d7e3.firebaseio.com',
            projectId: 'pwd-manager-9d7e3',
            storageBucket: 'pwd-manager-9d7e3.appspot.com',
            messagingSenderId: '870989888599'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Router />
        </Provider>        
        );
    }
}
export default App;
