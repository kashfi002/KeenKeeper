import React, {use} from 'react';
import { useParams } from 'react-router';
import DetailsCard from '../Components/UI/DetailsCard';

const friendPromise=fetch('/data.json').then(res=>res.json());
const FriendDetails = () => {
    const friends=use(friendPromise);
    const { id } = useParams();
const expectedFriend = friends.find(friend=>friend.id==(id)
);
    return (
        <div>
            <DetailsCard expectedFriend={expectedFriend} />
        </div>
    );
};

export default FriendDetails;