import React from 'react'
import Inicio from '../molecules/Inicio';
import Knowledge from '../molecules/Knowledge';
import Education from '../molecules/Education';

const MainContent = () => {
    return (
      <div className='flex flex-col justify-start items-center gap-2 pt-10 '>
          <Inicio />
           <Knowledge />
           <div className=' bg-white h-[100px]'></div>
           <Education />
      </div>
    );
  };

export default MainContent;