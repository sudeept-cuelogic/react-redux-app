import React from 'react';

export default class WorkPanel extends React.Component {
    render() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Age/Gender</th>
                        </tr>
                        {this.props.usersList.map((user, index) => {
                            return (<tr key={`row_${index}`}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.age} / {user.gender}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
