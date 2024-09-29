import React from 'react'
import { TitleSecondary } from '../atoms/titles';

const Extraskills = () => {
  return (
    <div className="w-[186px] h-[148px]">
         <TitleSecondary title={'Extra Skills'} />
  
         <div className="flex items-center">
              <img src="/icons/icons.png" alt="" className="text-appGray -4 h-4 mr-2" />
              <h1 className='text-appGray w-[156px] h-[24px] text-[15px]'>GitHub</h1>
        </div>
        <div className="flex items-center">
              <img src="/icons/icons.png" alt="" className="text-appGray -4 h-4 mr-2" />
              <h1 className='text-appGray w-[156px] h-[24px] text-[15px]'>Bases De Datos</h1>
        </div>
         <div className="flex items-center">
              <img src="/icons/icons.png" alt="" className="text-appGray -4 h-4 mr-2" />
             <h1 className='text-appGray w-[156px] h-[24px] text-[15px]'>GitHub</h1>
         </div>
  </div>
  );
}
export default Extraskills;