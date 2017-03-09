'use strict';

var React = require('react');
var UserStore = require('../../stores/userStore');

var UserPage = React.createClass({
    getInitialState: function(){
        return {
            users: UserStore.getUsers()
        };
    },
    render: function(){
        return (
            <div></div>
        );
    }
});

module.exports = UserPage;
