import React, { useContext } from 'react';
import { FriendContext } from '../../Components/Context/Context';
import textImg from '../../assets/text.png';
import callImg from '../../assets/call.png';
import videoImg from '../../assets/video.png';

const Timeline = () => {
    const{timeLine}=useContext(FriendContext);
     const getIcon = (type) => {
    if (type === 'call') return callImg;
    if (type === 'text') return textImg;
    if (type === 'video') return videoImg;
    return '';
  };

    return (
        <div className='container mx-auto my-[60px]'>
          <h1 className='font-bold text-2xl'>TimeLine</h1>
          <div className=''> 
            {timeLine.map(item=>{
                return(
                    <div key={item.id} className='flex items-center gap-4 mb-4 shadow-md p-[20px]'>
                    <div><img src={getIcon(item.type)} alt="" /></div>
                    <div>
                        <h1>{item.type} with {item.friend.name}</h1>
                        <p>{item.createdAt.toLocaleString()}</p>
                    </div>
                    </div>
                )
            })}
          </div>
        </div>
    );
};

export default Timeline;