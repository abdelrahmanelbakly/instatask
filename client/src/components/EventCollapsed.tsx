import React, { useEffect } from 'react';
import {EventObj} from '../types';
interface EventCollapsedProps{
    onClick: ()=>void;
    Event: EventObj;
}
const formatDate = (date:Date)=>{

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[date.getDay()]; // Get the day of the week
  const dayOfMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  const formattedDate = `${dayOfWeek} ${dayOfMonth}, ${hours}:${minutes}`;
  return formattedDate;
}

const EventCollapsed: React.FC<EventCollapsedProps> = ({ onClick,Event }) => {
  return (
    <div className='w-[930px] h-[40px] flex flex-row justify-between text-left' onClick={onClick} >
      <div className='px-6 py-3 flex flex-row w-1/3'>
        <div className="w-[25px] h-[25px] bg-gradient-to-br from-orange-400 to-fuchsia-600 rounded-full text-center" >
            <p>{Event.actor.name[0].toUpperCase()}</p>
        </div>
        <h5>{Event.actor.name}</h5>   
      </div>
      <div className= "w-1/3 px-6 py-3 text-left">
        <h5>{Event.actor.email}</h5>
      </div>
      <div className= "w-1/3 px-6 py-3 text-left">
        <p>{formatDate(Event.time)}</p>
      </div>
      
    </div>
  );
};


export default EventCollapsed;