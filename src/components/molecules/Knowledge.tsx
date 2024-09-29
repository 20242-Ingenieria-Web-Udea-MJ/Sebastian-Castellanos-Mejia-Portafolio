import React from 'react'
import Cuadro from '@/components/atoms/cuadro';
import {TitleSecondary, TextPrincipal2} from '@/components/atoms/titles';

const Knowledge = () => {
  return (
    <div className='flex flex-col w-[970px] h-[653px] items-center gap-8'>
      
      <div className='flex flex-col items-center gap-4'>
        <TitleSecondary title={'My Knowledge'} />
        <TextPrincipal2 text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
      </div>

      <div className='flex flex-wrap gap-4 justify-center'>
        <Cuadro title={'Web Development'} text={'Blog, e-commerce'} url={'/icons/coding.png'} />
        <Cuadro title={'UI/UX Design'} text={'Mobile app, website design'} url={'/icons/illustration.png'} />
        <Cuadro title={'Sound Design'} text={'Voice Over, Beat Making'} url={'/icons/Microphone.png'} />
        <Cuadro title={'Game Design'} text={'Character Design, Props & Objects'} url={'/icons/game-development.png'} />
        <Cuadro title={'Photography'} text={'Portrait, product photography'} url={'/icons/Photographer.png'} />
        <Cuadro title={'Advertising'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.'} url={''} />
      </div>
    </div>
  );
}

export default Knowledge;