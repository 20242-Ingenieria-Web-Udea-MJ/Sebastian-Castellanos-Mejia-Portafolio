import React from 'react'
import Profile from '../molecules/Profile'
import About from '../molecules/About';
import Languages from '../molecules/Languages';
import Skills from '../molecules/Skills';
import Extraskills from '../molecules/Extraskills';
import Index from '../atoms/division/index';

const LeftMenu = () => {
    return (
      <div className='flex flex-col justify-between w-[305px] items-center bg-white gap-6 pt-10'>
        <Profile/>
        <Index/>
        <About/>
        <Index/>
        <Languages/>
        <Index/>
        <Skills/>
        <Index/>
        <Extraskills/>
      </div>
    );
  }
export default LeftMenu;