import React from 'react'
import Inicio from '../molecules/Inicio';
import Knowledge from '../molecules/Knowledge';

const MainContent = () => {
    return (
      <div className='flex flex-col justify-start items-center gap-4 pt-10 '>
          <Inicio />
           <Knowledge />
      </div>
    );
  };

export default MainContent;