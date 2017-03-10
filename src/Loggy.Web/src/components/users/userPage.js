'use strict';

var React = require('react');
var UserStore = require('../../stores/userStore');
var UserList = require('./userList');

var UserPage = React.createClass({
    getInitialState: function(){
        return {
            users: UserStore.getUsers()
        };
    },
    componentWillMount: function(){
        UserStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        UserStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
        this.setState({ users: UserStore.getUsers() });
    },
    render: function(){
        return (
            <div>
                <h1>Users</h1>
                <UserList users={this.state.users} />
            </div>
        );
    }
});

module.exports = UserPage;
