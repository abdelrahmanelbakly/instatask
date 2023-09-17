import React from 'react';
import EventCollapsed from './components/EventCollapsed';
import EventDetailed from './components/EventDetailed';
import Search from './components/Search';
import EventContainer from './components/EventsContainer';

function App() {
  return (
    <div className="flex flex-col flex-start items-center h-[700px] w-3/5 rounded-lg border overflow-visible">
      <div className="flex flex-col justify-between items-center bg-gray-200 h-1/6 w-full rounded-t-lg">
        <Search/>
        <div className="flex flex-row justify-between w-full font-semibold text-neutral-400 " >
          <h2 className="w-1/3 px-6 py-3 text-left">ACTOR</h2>
          <h2 className="w-1/3 px-6 py-3 text-left">ACTION</h2>
          <h2 className="w-1/3 px-6 py-3 text-left">DATE</h2>
        </div>
      </div>
      <EventContainer/>
      <div className="flex justify-center items-center bg-gray-200 w-full h-7.5% rounded-b-lg">
      <button
      className="bg-gray-200 hover:bg-gray-400 text-neutral-400 font-semibold my-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">LOAD MORE
    </button>
      </div>
    </div>
  );
}

export default App;
