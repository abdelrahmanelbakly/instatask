import React from 'react';
import EventCollapsed from './EventCollapsed';
import EventDetailed from './EventDetailed';
import EventComponent from './EventComponent';
const EventContainer: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center h-full w-105% m-2 overflow-y-scroll no-scrollbar">
        <EventComponent/>
        <EventComponent/>
        <EventComponent/>
        <EventComponent/>
    </div>
  );
};

export default EventContainer;