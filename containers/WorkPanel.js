import React from 'react';

export default class WorkPanel extends React.Component {
    render() {
        return(
            <div>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Age/Gender</th>
                    </tr>
                    {this.props.usersList.map((user, index) => {
                        return (<tr >
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.age} / {user.gender}</td>
                        </tr>)
                    })}
                </table>
            </div>
        );
    }
}
