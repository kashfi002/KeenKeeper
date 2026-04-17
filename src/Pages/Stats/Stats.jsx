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
      {name:'Call',value:callCount,fill:'#0088FE'},
      { name:'Text',value:textCount,fill:'#00C49F'},
      { name:'Video',value:videoCount,fill:'#FFBB28'},
    ];
  }, [timeLine]);

    return (
       <div className='shadow p-10 my-10 rounded-md border border-slate-300 container mx-auto items-center text-center'>
        <h2 className='font-bold text-2xl mb-10'>Friendship Analytics</h2>
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
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
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