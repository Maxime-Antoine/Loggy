'use strict';

var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');

var UserActions = {
    createUser: function(user){
        //create user

        Dispatcher.dispatch({
            actionType: ActionTypes.USER_LOGIN,
            user: user
        });
    }
};

module.exports = UserActions;