import React, { useContext} from 'react';
import { IoCallOutline } from "react-icons/io5";
import { IoMdText} from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { FriendContext } from '../Context/Context';


const DetailsCard = ({ expectedFriend }) => {
  const {handleTimeline}=useContext(FriendContext)

     const Tag_badge = {
  college: "badge badge-soft badge-info",
  friend: "badge badge-soft badge-success",
  work: "badge badge-soft badge-warning",
  family: "badge badge-soft badge-accent",
  home: "badge badge-soft badge-secondary",
  school: "badge badge-soft badge-error",
};
const Status_badge = {
  'almost due': "badge badge-error text-white",
  'on-track': "badge badge-success text-white",
  'overdue': "badge badge-warning text-white",
};
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 container mx-auto mt-[40px] gap-[20px]'>
         <div className='col-span-2 lg:col-span-1 gap-2 py-[10px]'>
            <div className='flex flex-col gap-4 shadow-md rounded-2xl items-center py-[10px] mb-[20px]'> 
                <img 
                 className="w-24 h-24 rounded-full object-cover"
                src={expectedFriend.picture} alt="" />
                 <div className={Status_badge[expectedFriend.status]}>{expectedFriend.status}</div>
                 <div className='flex gap-2 items-center'>
                 {
        expectedFriend.tags.map(tag=>{
            return(
                <div key={tag} className={Tag_badge[tag]}>{tag}</div>
            )
        })
    }
    </div>
                </div>
            <div className='flex flex-col gap-2'>
                <button className='btn rounded-xl shadow-md w-full'>Snooze 2 weeks</button>
                <button className='btn rounded-xl shadow-md w-full'>Snooze 2 weeks</button>
                <button className='btn rounded-xl shadow-md w-full'>Snooze 2 weeks</button>
            </div>
         </div>
         <div className='col-span-2'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-full'>
                <div className='shadow-md rounded-md text-center py-[10px]'>
                    <h1 className='text-xl font-bold text-green-900'>{expectedFriend.days_since_contact}</h1>
                    <p>Days Since Contact</p>
                </div>
                <div className='shadow-md rounded-md text-center py-[10px]'>
                    <h1 className='text-xl font-bold text-green-900'>{expectedFriend.goal}</h1>
                    <p>Goal (Days)</p>
                </div>
                <div className='shadow-md rounded-md text-center py-[10px]'>
                    <h1 className='text-xl font-bold text-green-900'>{expectedFriend.next_due_date}</h1>
                    <p>Next Due Date</p>
                </div>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='shadow-md rounded-md p-[20px] mt-[20px]'>
                    <div className='flex justify-between'>
                        <h1>Relationship Goal</h1>
                        <button className='btn'>Edit</button>
                    </div>
                    <p>Connect Every:{expectedFriend.goal} days</p>
                    </div>
                </div>
            <div className='shadow-md rounded-md p-[20px]'>
                <h1 className='text-2xl font-bold mb-4'>Quick Check-In</h1>
                <div className='grid grid-cols-3 items-center mt-[10px]'>
                    <div 
                    onClick={()=>handleTimeline("call",expectedFriend)}
                    className='shadow-md rounded-md p-[20px] items-center'>
                        <h1 className='text-bol'><IoCallOutline /></h1>
                        <p>Call</p>
                    </div>
                    <div
                    onClick={()=>handleTimeline("text",expectedFriend)}
                     className='shadow-md rounded-md p-[20px] items-center'>
                        <h1><IoMdText /></h1>
                        <p>Text</p>
                    </div>
                    <div 
                    onClick={()=>handleTimeline("video",expectedFriend)}
                     className='shadow-md rounded-md p-[20px] items-center'>
                        <h1><CiVideoOn /></h1>
                        <p>Video</p>
                    </div>
                </div>
            </div>
         </div>
         </div>
    );
};

export default DetailsCard;