import React from 'react';
import 'tailwindcss/tailwind.css';
import EventDetailed from './EventDetailed';
import EventCollapsed from './EventCollapsed';

const isClicked: boolean = true;

const Event: React.FC = () => {
  return (
    <div className='flex flex-col items-center w-full overflow-visible m-3'>
      {!isClicked ?
        (<EventDetailed/>)
        :
        (<EventCollapsed/>)
      }
    </div>
  );
};

export default Event