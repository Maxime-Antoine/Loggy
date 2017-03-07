'use strict';

var React = require('react');

var NotFoundPage = React.createClass({
    render: function(){
        return (
            <div className="well">
                <h1>404</h1>
                <h3>There is nothing here</h3>
                <h1>:(</h1>
            </div>
        );
    }
});

module.exports = NotFoundPage;
