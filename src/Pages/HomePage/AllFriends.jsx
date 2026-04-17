import React, { use } from 'react';
import FriendCard from '../../Components/UI/FriendCard';
const friendPromise=fetch('/data.json').then(res=>res.json());
const AllFriends = () => {
const friends=use(friendPromise);
    return (
        <div className='container mx-auto'>
            <h1 className='font-bold'>Your Friends</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                friends.map(friend=>{
                    return(
                        <FriendCard key={friend.id} friend={friend}></FriendCard>
                    )
                })
            }
            </div>
        </div>
    );
};

export default AllFriends;