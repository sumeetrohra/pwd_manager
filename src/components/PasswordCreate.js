import React, { Component } from 'react';
import { connect } from 'react-redux';
import { encrypt } from 'react-native-simple-encryption';
import {
    passwordFormNameChange,
    passwordFormUserNameChanged,
    passwordFormPassswordChanged,
    addPassword
} from '../actions';
import { Card, CardSection, Button, Input } from './common';

class PasswordCreate extends Component {
    onButtonPress() {
        const { name, userName, password } = this.props;
        const newPassword = encrypt('12345678', password);
        this.props.addPassword({ name, userName, password: newPassword });
    }

    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                        label="Name:"
                        placeholder="Google"
                        value={this.props.name}
                        onChangeText={text => this.props.passwordFormNameChange(text)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="User Name:"
                        placeholder="mail@google.com"
                        value={this.props.userName}
                        onChangeText={text => this.props.passwordFormUserNameChanged(text)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password:"
                        placeholder="password"
                        secureTextEntry
                        value={this.props.password}
                        onChangeText={text => this.props.passwordFormPassswordChanged(text)}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        title="Add Password"
                        onPress={this.onButtonPress.bind(this)}
                    />
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, userName, password } = state.passwordForm;
    return { name, userName, password };
};

export default connect(mapStateToProps, {
    passwordFormNameChange,
    passwordFormUserNameChanged,
    passwordFormPassswordChanged,
    addPassword
})(PasswordCreate);
