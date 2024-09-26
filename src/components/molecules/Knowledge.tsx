import React from 'react'
import Cuadro from '@/components/atoms/cuadro';
import {TitleSecondary, TextPrincipal2} from '@/components/atoms/titles';

const Knowledge = () => {
  return (
    <div className='flex flex-col bg-white w-[970px] h-[653px] items-center gap-8'>
       
        <TitleSecondary title={'my Knowledge'} />
        <TextPrincipal2 text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'}/>
        <div className='flex flex-wrap gap-4 '>
        <Cuadro title={'web development'} text={'blog, e-commerce'} url={'/icons/coding.png'} />
        <Cuadro title={'uI/uX designt'} text={'Mobile app, website design'} url={'/icons/illustration.png'} />
        <Cuadro title={'sound design'} text={'Voice Over, Beat Making'} url={'/icons/Microphone.png'} />
        <Cuadro title={'game design'} text={'Character Design, Props & Objects'} url={'/icons/game-development.png'} />
        <Cuadro title={'photography'} text={'portrait, product photography'} url={'/icons/Photographer.png'} />
        <Cuadro title={'advertising'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. '} url={''} />
      </div>
      </div>
  );
}

export default Knowledge;