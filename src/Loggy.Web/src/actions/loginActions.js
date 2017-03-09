'use strict';

var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');

var LoginActions = {
    login: function(user, password){

        if (user === 'test' && password === 'test')
            Dispatcher.dispatch({
                actionType: ActionTypes.USER_LOGIN,
            });
        else
            Dispatcher.dispatch({
                actionType: ActionTypes.FAILED_LOGIN,

            });
    }
};

module.exports = LoginActions;
