import React, { useEffect, useRef, useState } from 'react';
import EventsContainer from './components/EventsContainer';
import { EventObj,employee,action } from './types';


function App() {
  //setup required states
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [Events, setEvents] = useState<EventObj[]>([]);
  const [searchTerm,setSearchTerm] = useState<string>("");
  const [isReady, setIsReady] = useState(false); // State to track readiness
  let usedEffect = false;
  const nextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    handleFetchEvents()
  };
  const fetchEvents = async (
    page: number,
    limit: number = 5,
    searchTerm: string,
  ) => {
    const queryParams = new URLSearchParams();
    queryParams.append('page', page.toString());
    queryParams.append('limit', limit.toString());
    queryParams.append('searchTerm', searchTerm);
    try {
      const response = await fetch(`http://localhost:4000/events?${queryParams.toString()}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Map the response data to conform to the Event interface
      const mappedEvents: EventObj[] = data.map((item: any) => ({
        id:item.id,
        actor: item.actor,
        target: item.target,
        action: item.action,
        time: new Date(item.time),
      }));

      setEvents((Events)=>Events.concat(mappedEvents)); // Update the events state with the mapped data
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Example usage of fetchEvents function
  const handleFetchEvents = () => {
    fetchEvents(pageNumber, 10, searchTerm); // Call the function with your desired parameters
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEvents([]);
    setPageNumber(0);
    const newValue = event.target.value;
    setSearchTerm(newValue)
    handleFetchEvents();
  };
  useEffect(() => {
    if(usedEffect){
      return;
    }else{
      usedEffect = true;
    }
    fetchEvents(1, 10, "")
      .then((result) => {
        setIsReady(true); // Set isReady to true when the data is ready
        setPageNumber(2);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsReady(true); // Set isReady to true even if there's an error
      });
  }, []);
  return (
    <div className="flex flex-col flex-start items-center h-[700px] w-3/5 rounded-lg border overflow-visible">
      <div className="flex flex-col justify-between items-center bg-gray-200 h-1/6 w-full rounded-t-lg">
        <input
          onChange={handleInputChange}
          type="text"
          id="searchInput"
          placeholder="Search name, email or action..."
          className=" w-11/12 py-2 my-3 px-4 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"/>
        <div className="flex flex-row justify-between w-full font-semibold text-neutral-400 " >
          <h2 className="w-1/3 px-6 py-3 text-left">ACTOR</h2>
          <h2 className="w-1/3 px-6 py-3 text-left">ACTION</h2>
          <h2 className="w-1/3 px-6 py-3 text-left">DATE</h2>
        </div>
      </div>
      {isReady ? (
        <EventsContainer Events={Events} />
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex justify-center items-center bg-gray-200 w-full h-7.5% rounded-b-lg">
      <button
        onClick={nextPage}
        className="bg-gray-200 hover:bg-gray-300 hover:text-gray-500 text-neutral-400 font-semibold my-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">LOAD MORE
    </button>
      </div>
    </div>
  );
}

export default App;
