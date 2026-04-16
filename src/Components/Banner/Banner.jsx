import React from 'react';

const Banner = () => {
    return (
        <div>
        <div className='flex flex-col justify-between items-center text-center p-[60px] gap-2 mb-[40px]'>
            <h1 className='text-4xl font-bold'>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
       relationships that matter most.</p>
       <button className='bg-green-900 px-[10px] py-[5px] rounded-md text-white'>+Add a Friend</button>
        </div>
        <div className='container mx-auto gap-8 grid gap-2 grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col justify-between items-center text-center shadow-md py-[20px] rounded-xl'>
                <h1 className='text-xl text-green-900 font-bold'>10</h1>
                <p className='text-gray-500'>Friends</p>
            </div>
            <div className='flex flex-col justify-between items-center text-center shadow-md py-[20px] rounded-xl'>
                <h1 className='text-xl text-green-900 font-bold'>3</h1>
                <p className='text-gray-500'>On Track</p>
            </div>
            <div className='flex flex-col justify-between items-center text-center shadow-md py-[20px] rounded-xl'>
                <h1 className='text-xl text-green-900 font-bold'>6</h1>
                <p className='text-gray-500'>Need Attention</p>
            </div>
            <div className='flex flex-col justify-between items-center text-center shadow-md py-[20px] rounded-xl'>
                <h1 className='text-xl text-green-900 font-bold'>12</h1>
                <p className='text-gray-500'>Interactions this month</p>
            </div>
        </div>
        </div>
        
    );
};

export default Banner;