import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PasswordList from './components/PasswordList';
import PasswordCreate from './components/PasswordCreate';
import PasswordEdit from './components/PasswordEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="loginForm"
                        component={LoginForm}
                        title="Login"
                        titleStyle={styles.titleStyle}
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="passwordList"
                        component={PasswordList}
                        title="Passwords"
                        titleStyle={{ flex: 1 }}
                        rightTitle="ADD"
                        onRight={() => Actions.passwordCreate()}
                        rightButtonTextStyle={styles.buttonTitleStyle}
                    />
                    <Scene
                        key="passwordCreate"
                        component={PasswordCreate}
                        title="Add Password"
                        titleStyle={{ flex: 1 }}
                    />
                    <Scene
                        key="PasswordEdit"
                        component={PasswordEdit}
                        title="Edit"
                        titleStyle={{ flex: 1 }}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    titleStyle: {
        flex: 1,
        fontSize: 18
    },
    buttonTitleStyle: {
        paddingLeft: 5,
        fontSize: 18
    }
};

export default RouterComponent;
