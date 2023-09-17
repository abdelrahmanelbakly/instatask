import React from 'react';
const EventCollapsed: React.FC = () => {
  return (
    <div className='w-[930px] h-[40px] flex flex-row justify-between text-left' >
      <div className='px-6 py-3 flex flex-row w-1/3'>
        <div className="w-[25px] h-[25px] bg-gradient-to-br from-orange-400 to-fuchsia-600 rounded-full text-center" >
            <p>A</p>
        </div>
        <h5>Abdelrahman</h5>   
      </div>
      <div className= "w-1/3 px-6 py-3 text-left">
        <h5>abdelrahman.com</h5>
      </div>
      <div className= "w-1/3 px-6 py-3 text-left">
        <h5>date</h5>
      </div>
      
    </div>
  );
};


export default EventCollapsed;