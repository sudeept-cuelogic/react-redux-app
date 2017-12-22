import React from 'react';

const getTableRow = (user) => {
  return(
    <tr key={`row_${user.username}`}>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.age} / {user.gender}</td>
    </tr>
  );
};

const UserList = (props) => {
  return(
    <div style={ { backgroundColor: 'aliceblue', float: 'left', width: '80%'} }>
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Age/Gender</th>
            </tr>
            { props.usersList.map(user => getTableRow(user)) }
          </tbody>
        </table>
    </div>
  );
};

export default UserList;
