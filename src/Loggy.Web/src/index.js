'use strict';

var React = require('react'); // eslint-disable-line no-unused-vars
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;
var routes = require('./routes');

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
