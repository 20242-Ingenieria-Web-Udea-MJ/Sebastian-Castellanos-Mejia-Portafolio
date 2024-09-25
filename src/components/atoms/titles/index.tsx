import React from 'react';

const TitlePrincipal = ({ title }: { title: string }) => {
  return (
    <h1 className="font-inter font-thin text-[48px] leading-[59.33px] text-left w-[500px] h-[118px] absolute top-[93px] left-[69px] opacity-0">
    {title}
  </h1>
  
  );
};

const TitleSecondary = ({ title }: { title: string }) => {
  return (
    <h1 className="font-inter font-bold text-[32px] leading-[39.55px] text-left w-[232px] h-[40px] absolute top-[509.09px] left-[387px] opacity-0">
      {title}
    </h1>
  );
};

const TitleTertiary = ({ title }: { title: string }) => {
  return (
    <h1 className='font-inter font-medium text-[18px] leading-[22.25px] text-left w-[158px] h-[22px] absolute top-[814.09px] left-[85px] opacity-0 '>
      {title}
    </h1>
  );
};

const TextPrincipal = ({ text }: { text: string }) => {
  return <p className='font-inter font-normal text-[15px] leading-[24px] text-center w-[438px] h-[68px] absolute top-[574.09px] left-[275px] opacity-0'>{text}</p>;
};

export { TitlePrincipal, TitleSecondary, TitleTertiary };