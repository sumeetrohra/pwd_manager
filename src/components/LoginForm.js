import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
    return (<Button title="Login" onPress={this.onButtonPress.bind(this)} />);
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email:"
                        placeholder="email@gmail.com"
                        value={this.props.email}
                        onChangeText={text => this.props.emailChanged(text)}
                    />
                </CardSection>
                

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password:"
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={text => this.props.passwordChanged(text)}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                   {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',

    },
}; 

const mapStateToProps = (state) => {
    const { email, password, loading, error } = state.auth;
    return { email, password, loading, error };
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
