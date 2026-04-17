import React, { useContext, useMemo } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../Components/Context/Context';

const Stats = () => {
    const { timeLine } = useContext(FriendContext);
    const data=useMemo(()=>{
    const callCount=timeLine.filter(i=>i.type==='call').length;
    const textCount=timeLine.filter(i=>i.type==='text').length;
    const videoCount=timeLine.filter(i=>i.type==='video').length;

    return [
      {name:'Call',value:callCount,fill:'#244D3F'},
      { name:'Text',value:textCount,fill:'#84b067'},
      { name:'Video',value:videoCount,fill:'#0047AB'},
    ];
  }, [timeLine]);

    return (
       <div className='shadow p-10 my-10 rounded-md border border-slate-300 container mx-auto'>
        <h2 className='font-bold text-4xl mb-10'>Friendship Analytics</h2>
        <p className='text-[#244D3F] text-2xl'>By Interaction Type</p>
       <PieChart style=
       {{ width: '100%',
        margin:'auto',
         maxWidth: '500px',
          maxHeight: '80vh',
           aspectRatio: 1 }}
        responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend />
      <Tooltip />
    </PieChart>
    </div>
    );
};

export default Stats;