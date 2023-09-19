import React, { useEffect } from 'react';
import EventCollapsed from './EventCollapsed';
import EventDetailed from './EventDetailed';
import EventComponent from './EventComponent';
import {EventObj} from '../types';
interface EventContainer{
  Events:EventObj[];
}
const EventsContainer: React.FC<EventContainer> = ({ Events }) => {
  Events.map((event)=>(console.log(event.id)));
  return (
    <div className="flex flex-col items-center h-full w-105% m-2 overflow-y-scroll no-scrollbar">
      {Events.map((Event) => (
        <EventComponent Event={Event} key={Event.id}/>
      ))}
    </div>
  );
};

export default EventsContainer;