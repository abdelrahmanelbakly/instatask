import React, { useEffect } from 'react';
import EventCollapsed from './EventCollapsed';
import EventDetailed from './EventDetailed';
import EventComponent from './EventComponent';
import {EventObj, action, employee} from '../types';
interface EventContainer{
  Events:EventObj[];
}
const actor: employee={
    id: 1,
    name: "abdelrahman",
    email: "abdelrahman.com",
    position: "CEO"
}
const target: employee={
    id: 2,
    name: "abdelrahman2",
    email: "abdelrahman2.com",
    position: "CEO2"
}
const myAction: action = {
    id:1,
    name: "myAction",
    description:"action aho"
}
const myEvent: EventObj = {
    id:7,
    actor: actor,
    target: target,
    action: myAction,
    time: new Date(),
};
const EventsContainer: React.FC<EventContainer> = ({ Events }) => {
  return (
    <div className="flex flex-col items-center h-full w-105% m-2 overflow-y-scroll no-scrollbar">
      {Events.map((Event) => (
        <EventComponent Event={Event} key={Event.id}/>
      ))}
    </div>
  );
};

export default EventsContainer;