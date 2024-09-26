import React from 'react'
import Cuadro from '@/components/atoms/cuadro';

const Knowledge = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
        <span className='TitlePrincipal'>my Knowledge</span>
        <span className='text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</span>
        <Cuadro title={'web development'} text={'blog, e-commerce'} />
        <Cuadro title={'uI/uX designt'} text={'Mobile app, website design'} />
        <Cuadro title={'sound design'} text={'Voice Over, Beat Making'} />
        <Cuadro title={'game design'} text={'Character Design, Props & Objects'} />
        <Cuadro title={'photography'} text={'portrait, product photography'} />
        <Cuadro title={'advertising'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. '} />
    </div>
  );
}

export default Knowledge;