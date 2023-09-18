import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import EventDetailed from './EventDetailed';
import EventCollapsed from './EventCollapsed';
import {EventObj} from '../types'

interface EventComponentProps{
  Event: EventObj;
}
const Event: React.FC<EventComponentProps>= ({Event}) => {
  const [isClicked,setClicked] = useState(false);
  const handleClick = (state: boolean): void => {
    setClicked(state);
  }
  return (
    <div className='flex flex-col items-center w-full overflow-visible m-3'>
      {isClicked ?
        (<EventDetailed Event={Event} onClick={async () => {handleClick(false);console.log("sdfa")}}/>)
        :
        (<EventCollapsed Event={Event} onClick={async () => {handleClick(true);console.log("sdfa")}}/>)}
    </div>
  );
};

export default Event