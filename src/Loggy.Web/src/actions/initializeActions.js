'use strict';

var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');
var UserAPI = require('../api/userApi');

var InitializeActions = {
    initApp: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                users: UserAPI.getUsers()
            }
        });
    }
};

module.exports = InitializeActions;
