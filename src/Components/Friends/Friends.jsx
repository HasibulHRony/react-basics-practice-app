import  { use } from 'react';

const Friends = ({friendsPromise}) => {
    const friends = use(friendsPromise)
    
    return (
        <div>
            <h1>total friends: {friends.users.length}</h1>
        </div>
    );
};

export default Friends;