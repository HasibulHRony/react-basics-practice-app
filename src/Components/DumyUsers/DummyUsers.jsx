import React, { use } from 'react';
import './DumyStyles.css'

const DummyUsers = ({dummyUsersPromise}) => {
    const dummyUsers = use(dummyUsersPromise)
    console.log(dummyUsers)
    return (
        <div>
            <h1>{dummyUsers.length}</h1>
            {
                dummyUsers.map((user)=>{
                    return(
                        <div className="infoCard"  key={user.id}>
                            <h1>Name: {user.name}</h1>
                            <p>Email: {user.email}</p>
                            <p>Role: {user.role}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DummyUsers;