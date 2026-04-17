import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const FriendContext=createContext();
const Context = ({children}) => {
     const[timeLine,setTimeLine]=useState([])
        const handleTimeline=(type, expectedFriend)=>{
  setTimeLine(prev => [
    {
      id:expectedFriend.id,
      type,
      friend: expectedFriend,
      createdAt: new Date()
    },...prev]);

  toast.success(`${type.toUpperCase()} with ${expectedFriend.name}`);
}; 
    
     return (
    <FriendContext.Provider value={{timeLine,handleTimeline}}>
      {children}
      <ToastContainer />
    </FriendContext.Provider>
  );
};

export default Context;