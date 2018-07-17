import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import {
    passwordFetch
} from '../actions';
import ListItem from './ListItem';

class PasswordList extends Component {
    componentWillMount() {
        this.props.passwordFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ passwords }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(passwords);
    }

    renderRow(password) {
        return <ListItem password={password} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const passwords = _.map(state.passwords, (val, uid) => {
        return { ...val, uid };
    });
    return { passwords };
};

export default connect(mapStateToProps, {
    passwordFetch
})(PasswordList);
