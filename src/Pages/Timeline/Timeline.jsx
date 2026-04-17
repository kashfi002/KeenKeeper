import React, { useContext, useState } from 'react';
import { FriendContext } from '../../Components/Context/Context';
import textImg from '../../assets/text.png';
import callImg from '../../assets/call.png';
import videoImg from '../../assets/video.png';

const Timeline=()=>{
  const { timeLine } = useContext(FriendContext);
  const [filter, setFilter] = useState('all');

  const getIcon=(type)=>{
    if(type==='call'){
    return callImg;
    }
    if(type==='text'){
        return textImg;
    }
    if (type==='video'){
        return videoImg;
    }
    return '';
  };

  const filteredTimeline=filter==='all'?timeLine:timeLine.filter(item=>item.type.toLowerCase()===filter.toLowerCase());

  return(
    <div className="container mx-auto my-[60px]">
      <h1 className="font-bold text-2xl mb-4">Timeline</h1>
      <select value={filter}onChange={(e)=>setFilter(e.target.value)}
      className="select select-bordered mb-6"
      >
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
      <div>
        {filteredTimeline.map(item =>(
          <div
            key={item.id} className="flex items-center gap-4 mb-4 shadow-md p-[20px] rounded-md">
            <img
              src={getIcon(item.type)}
              className="w-8 h-8"/>

            <div>
              <h1 className="capitalize font-semibold">
                {item.type} with {item.friend.name}
              </h1>
              <p className="text-sm text-gray-500">
                {item.createdAt.toLocaleString()}
              </p>
            </div>
          </div>
        ))}

        {
        filteredTimeline.length===0 &&(
          <p className="text-gray-500">Your TimeLine is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;