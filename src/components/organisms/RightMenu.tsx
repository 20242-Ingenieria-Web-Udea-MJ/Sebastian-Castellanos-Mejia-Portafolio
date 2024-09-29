import React from 'react'
import { TitleSecondary } from '../atoms/titles';
import { ButtonRedes } from '../atoms/buttoms';

const RightMenu = () => {
  return (
    <div className='flex flex-col items-center justify-start w-[95px] bg-white pt-20'>
        <TitleSecondary title={'Links'} />
        <div className='flex flex-col gap-4 pt-10'>
        <ButtonRedes iconSrc={'/icons/instagram.png'} Pagina={'https://www.instagram.com/sebastian_17z/'}/>
        <ButtonRedes iconSrc={'/icons/facebook.png'} Pagina={'https://www.facebook.com/SebasCaste317'}/>
        <ButtonRedes iconSrc={'/icons/twitter.png'} Pagina={'https://x.com/Sebascast317'}/>
        <ButtonRedes iconSrc={'/icons/linkedin.png'} Pagina={'https://www.linkedin.com/in/sebastiancastellanos613103328/'}/>
        <ButtonRedes iconSrc={'/icons/github.png'} Pagina={'https://github.com/SebastianCastellanosM'}/>
        </div>
    </div>
  );
}
export default RightMenu;