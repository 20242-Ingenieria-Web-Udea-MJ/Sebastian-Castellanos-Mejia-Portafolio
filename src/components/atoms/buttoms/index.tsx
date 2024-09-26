import React from 'react';

const ButtonPrincipal = () => {
  return ( 
    <button className=' bg-primary w-[156px] h-[51px] rounded-md top-[342px] left-[69px] absolute '>
    <span className='font-inter text-secondary text-[16px] font-medium top-[16px] left-[32px]'>
      HIRE ME
      <img src="/Frame.png" alt="icon" className="inline-block w-4 h-4 top-[17px] left-[106px]" />
    </span>
  </button>
  );
};

const ButtonRedes = ({ iconSrc }: { iconSrc: string }) => {
  return (
    <button className='inline-block w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
  <img src={iconSrc} alt="icon" className="w-7 h-7" />
    </button>

  );
};

export {ButtonPrincipal, ButtonRedes};