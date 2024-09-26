import React from 'react';

export const TitlePrincipal = ({ children }: {children: React.ReactNode}) => {
  return (
    <h1 className="font-inter font-extrabold text-[48px] leading-[59.33px] text-left w-[500px] h-[118px] absolute top-[93px] left-[69px]">
    {children}
  </h1>
  
  );
};

export const TitleSecondary = ({ title }: { title: string }) => {
  return (
    <h1 className="font-inter text-appGray text-[16px] leading-[24px] text-left w-[424px] h-[88px] absolute top-[229px] left-[69px]">
      {title}
    </h1>
  );
};

const TitleTertiary = ({ title }: { title: string }) => {
  return (
    <h1 className='font-inter font-medium text-[18px] leading-[22.25px] text-left w-[158px] h-[22px] absolute top-[814.09px] left-[85px]  '>
      {title}
    </h1>
  );
};

const TextPrincipal = ({ text }: { text: string }) => {
  return <p className='font-inter font-normal text-[15px] leading-[24px] text-center w-[438px] h-[68px] absolute top-[574.09px] left-[275px] '>{text}</p>;
};

export default  {TitlePrincipal, TitleSecondary};