import React, { use } from 'react';

const Users = ({fetchUsers}) => {
    const users = use(fetchUsers)
    return (
        <div>
            <h1>Total Users: {users.length}</h1>
        </div>
    );
};

export default Users;