import React from 'react';

const ButtonPrincipal = () => {
  return ( 
    <button className=' bg-primary w-[156px] h-[51px] rounded-md top-[390px] left-[69px] absolute '>
    <span className='font-inter text-secondary text-[16px] font-medium top-[16px] left-[32px]'>
      CONTACTAME
      <img src="/Frame.png" alt="icon" className="inline-block w-4 h-4 top-[17px] left-[106px]" />
    </span>
  </button>
  );
};

const ButtonRedes = ({ iconSrc, Pagina }: { iconSrc: string, Pagina: string }) => {
  return (
    <button
      className='inline-block w-12 h-12 bg-primary rounded-full flex items-center justify-center'
      onClick={() => window.open(Pagina, '_blank')} // Abre en una nueva pestaña
    >
      <img src={iconSrc} alt="icon" className="w-7 h-7" />
    </button>
  );
};



export {ButtonPrincipal, ButtonRedes};