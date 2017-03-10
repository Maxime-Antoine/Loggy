'use strict';

var _ = require('lodash');

//FAKE implementation so far
var _users = [
            {id: 0, name: 'test 1'},
            {id: 1, name: 'test 2'},
            {id: 2, name: 'test3'}
];

var UserAPI = {
    getUsers: function(){
        return _users;
    },
    getUserById: function(id){
        return _users.find(_users, {id: id});
    },
    deleteUser: function(id){
        return _.remove(_users, function(user){
            return user.id === id;
        });
    },
    createUser: function(createdUser){
        _users.push(createdUser);
        return createdUser;
    },
    updateUser: function(updatedUser){
        _user.remove(_users, {id: updatedUser.id});
        _users.push(updatedUser);
        return updatedUser;
    }
};

module.exports = UserAPI;
