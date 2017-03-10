'use strict';

var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');

var UserActions = {
    createUser: function(user){
        Dispatcher.dispatch({
            actionType: ActionTypes.USER_CREATE,
            user: user
        });
    },
    deleteUser: function(id){
        Dispatcher.dispatch({
            actionType: ActionTypes.USER_DELETE,
            userId: id
        });
    },
    updateUser: function(updatedUser){
        Dispatcher.dispatch({
            actionType: ActionTypes.USER_UPDATE,
            updatedUser: updatedUser
        });
    }
};

module.exports = UserActions;
