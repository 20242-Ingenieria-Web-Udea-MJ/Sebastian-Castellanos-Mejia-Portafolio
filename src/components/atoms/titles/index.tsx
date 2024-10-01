import React from 'react';

export const TitlePrincipal = ({ children }: {children: React.ReactNode}) => {
  return (
    <h1 className="font-inter font-extrabold text-[37px] leading-[59.33px] text-left w-[500px] h-[118px] absolute top-[93px] left-[69px]">
    {children}
  </h1>
  
  );
};

export const TitleSecondary = ({ title }: { title: string }) => {
  return (
    <h2 className='font-inter font-bold text-[32px] leading-[40px] text-center w-[232px] h-[40px] mb-4'>
      {title}
    </h2>
  );
};

export const TitleTertiary= ({ title }: { title: string }) => {
  return (
    <h2 className='font-inter font-medium text-[32px]  text-left w-[232px] h-[40px] absolute top-[510px] left-[387px]'>
      {title}
    </h2>
  );
};

export const TextPrincipal = ({ text }: { text: string }) => {
  return(
  <h3 className='font-inter text-appGray text-[16px] leading-[24px] text-left w-[424px] h-[88px] absolute top-[229px] left-[69px]'>
    {text}
  </h3>
  );
}

export const TextPrincipal2 = ({ text }: { text: string }) => {
  return(
    <h3 className='font-inter text-appGray text-[15px] leading-[24px] text-center w-[424px] h-[88px] mb-4'>
      {text}
    </h3>
  );
};

export default  {TitlePrincipal, TitleSecondary, TitleTertiary, TextPrincipal,TextPrincipal2};