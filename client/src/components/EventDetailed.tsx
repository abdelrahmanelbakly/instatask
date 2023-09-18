import React from 'react';
import {EventObj} from '../types';
interface EventDetailedProps{
    onClick:()=>{};
    Event:EventObj;
}
//Format date
const formatDate = (date:Date)=>{

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const formattedDate = `${dayOfWeek} ${dayOfMonth}, ${hours}:${minutes}`;
    return formattedDate;
  }
const EventDetailed: React.FC<EventDetailedProps> = ({ onClick,Event }) => {

  return (
    <div className="bg-white rounded-lg border w-full" onClick = {onClick}>
        <table className="table w-full" >
            <thead className="text-neutral-400 text-sm font-medium uppercase">
            <tr>
                <th className="w-1/3 px-6 py-3 text-left">ACTOR</th>
                <th className="w-1/3 px-6 py-3 text-left">ACTION</th>
                <th className="w-1/3 px-6 py-3 text-left">DATE</th>
            </tr>
            </thead>
            <tbody>
            <tr >
                <td className="px-6 py-1">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">Name</p>
                        <p className="col-span-3">{Event.actor.name}</p>
                    </div>
                </td>
                <td className="px-6 py-1">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">Name</p>
                        <p className="col-span-3">{Event.action.name}</p>
                    </div>
                </td>
                <td className="px-6 py-1">
                    <div className="grid grid-cols-5">
                        <p className="text-neutral-400 col-span-2">Readable</p>
                        <p className="col-span-3">{formatDate(Event.time)}</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-1">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">Email</p>
                        <p className="col-span-3">{Event.actor.email}</p>
                    </div>
                </td>
                <td className="px-6 py-1">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">Object</p>
                        <p className="col-span-3">{Event.action.description}</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-1">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">ID</p>
                        <p className="col-span-3">{Event.actor.id}</p>
                    </div>
                </td>
                <td className="px-6 py-1">
                    <div className="grid grid-cols-4"> 
                        <p className="text-neutral-400 col-span-1">ID</p>
                        <p className="col-span-3">{Event.action.id}</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="px-6 py-4">
                    <div className="grid grid-rows-2"> 
                        <p className="text-neutral-400 col-span-1">METADATA</p>
                        <p>-</p>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <div className="grid grid-rows-2"> 
                        <p className="text-neutral-400 col-span-1">TARGET</p>
                        <p>{Event.target? Event.target.name:"-"}</p>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  );
};

export default EventDetailed;