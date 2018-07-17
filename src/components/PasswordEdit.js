import React, { Component } from 'react';
import { Clipboard } from 'react-native';
import { connect } from 'react-redux';
import { encrypt, decrypt } from 'react-native-simple-encryption';
import { Card, CardSection, Button, Input, Confirm } from './common';
import {
    passwordSave,
    passwordDelete
} from '../actions';

class PasswordEdit extends Component {
    state = {
        name: '',
        userName: '',
        password: '',
        showModal: false,
        hidePassword: true
    }

    componentWillMount() {
        const { name, userName, password } = this.props.password;
        const newPassword = decrypt('12345678', password);
        this.setState({ name, userName, password: newPassword });
    }

    onButtonPress() {
        const { name, userName, password } = this.state;
        const newPassword = encrypt('12345678', password);
        this.props.passwordSave({ name, userName, password: newPassword, uid: this.props.password.uid });
    }

    render() {
        const { name, userName, password } = this.state;

        return (
            <Card>

                <CardSection>
                    <Input
                        label="Name:"
                        placeholder="Google"
                        value={name}
                        onChangeText={text => this.setState({ name: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="User Name:"
                        placeholder="mail@google.com"
                        value={userName}
                        onChangeText={text => this.setState({ userName: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password:"
                        placeholder="password"
                        secureTextEntry={this.state.hidePassword}
                        value={password}
                        onChangeText={text => this.setState({ password: text })}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        title="Save Changes"
                        onPress={this.onButtonPress.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        title="Copy User Name"
                        onPress={() => Clipboard.setString(this.state.userName)}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        title="Copy Password"
                        onPress={() => Clipboard.setString(this.state.password)}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        title="Show/hide Password"
                        onPress={() => this.setState({ hidePassword: !this.state.hidePassword })}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        title="Delete Password"
                        onPress={() => this.setState({ showModal: true })}
                    />
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={() => this.props.passwordDelete({ uid: this.props.password.uid })}
                    onDecline={() => this.setState({ showModal: !this.state.showModal })}
                >
                    Are You Sure??
                </Confirm>

            </Card>
        );
    }
}

export default connect(null, {
    passwordSave,
    passwordDelete
})(PasswordEdit);
