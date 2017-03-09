'use strict';

var React = require('react'); // eslint-disable-line no-unused-vars
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app');
var HomePage = require('./components/home/homePage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./components/notFoundPage');

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);

module.exports = routes;
