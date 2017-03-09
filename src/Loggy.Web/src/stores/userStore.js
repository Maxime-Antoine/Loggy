'use strict';

var Dispatcher = require('../dispatcher');
var ActionTypes = require('../actions/loginActions');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _users = [];

var UserStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    getUsers: function(){
        return _users;
    },
    getUserById: function(id){
        return _.find(_users, {id: id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionTypes.INITIALIZE:
            _users = action.initialData.users;
            UserStore.emitChange();
            break;
        case ActionTypes.USER_CREATE:
            _users.push(action.user);
            UserStore.emitChange();
            break;
        case ActionTypes.USER_DELETE:
            _.remove(_users, function(user){
                return user.id === action.userId;
            });
            UserStore.emitChange();
            break;
        default:
            //no-op
    }
});

module.exports = UserStore;
