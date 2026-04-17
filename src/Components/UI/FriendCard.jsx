import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    const Tag_badge = {
  college: "badge badge-soft badge-info",
  friend: "badge badge-soft badge-success",
  work: "badge badge-soft badge-warning",
  family: "badge badge-soft badge-accent",
  home: "badge badge-soft badge-secondary",
  school: "badge badge-soft badge-error",
};
const Status_badge = {
  'almost due': "badge badge-warning text-white",
  'on-track': "badge badge-success text-white",
  'overdue': "badge badge-error text-white",
};
    return (
            <Link to={`/details/${friend.id}`} className="card bg-base-100 w-96 shadow-sm px-[30px]">
  <figure className="px-5 pt-10">
    <img src={friend.picture}
      alt="Shoes"
      className="w-24 h-24 rounded-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>{friend.days_since_contact}d ago</p>
   <div>
    <div className='flex gap-2 items-center'>
    {
        friend.tags.map(tag=>{
            return(
                <div key={tag} className={Tag_badge[tag]}>{tag}</div>
            )
        })
    }
    </div>
    </div>
    <div>
    <div className={Status_badge[friend.status]}>{friend.status}</div>
   </div>
  </div>
</Link>
        
    );
};

export default FriendCard;