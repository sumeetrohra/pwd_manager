import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        console.log(this.props);
        const { name, userName } = this.props.password;

        return (
            <TouchableWithoutFeedback
                onPress={() => Actions.PasswordEdit({ password: this.props.password })}
            >
                <View>
                    <CardSection style={{ flexDirection: 'column' }}>
                        <Text style={styles.textStyle}>
                            {name}
                        </Text>
                        <Text style={styles.textStyle}>
                            {userName}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

export default ListItem;
