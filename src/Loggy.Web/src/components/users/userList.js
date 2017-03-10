'use strict';

var React = require('react');

var UserList = React.createClass({
    propTypes: {
        users: React.PropTypes.array.isRequired
    },
    render: function(){
        var createUserRow = function(user){
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>
            );
        };

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(createUserRow, this)}
                </tbody>
            </table>
        );
    }
});

module.exports = UserList;
