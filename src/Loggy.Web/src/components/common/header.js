'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">L</Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="user">User</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
