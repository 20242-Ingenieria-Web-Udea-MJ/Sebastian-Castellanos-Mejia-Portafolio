import React from 'react';

const ButtonPrincipal = () => {
  return ( 
    <button className='bg-primary w-[156px] h-[51px] rounded-md p-4 flex items-center justify-center gap-2'>
    <span className="font-inter text-[16px] font-medium leading-[19.36px] text-center flex items-center gap-2">
      HIRE ME
      <img src="/Frame.png" alt="icon" className="inline-block w-4 h-4" />
    </span>
  </button>
  );
};

const ButtonRedes = () => {
  return (
    <button>
       <img src="/Frame.png" alt="icon" className="inline-block w-4 h-4" />
    </button>
  )
};

export {ButtonPrincipal, ButtonRedes};