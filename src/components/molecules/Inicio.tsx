import {ButtonPrincipal} from '../atoms/buttoms';
import {TitlePrincipal, TextPrincipal} from '@/components/atoms/titles';
import React from 'react'


const Inicio = () => {
  return (
    <div className='flex items-center justify-between w-[970px] h-[467px] gap-4 bg-white relative'>
      <div className='flex flex-col items-center gap-4'>
        <TitlePrincipal>
          I’m Sebastián Castellanos<span className="text-primary"> Front-end</span> Developer
        </TitlePrincipal>
        <TextPrincipal text={'Soy un estudiante de Ingeniería de Sistemas de la Universidad de Antioquia con un fuerte interés en la ciberseguridad y el desarrollo Full Stack. Me apasiona aprender nuevas tecnologías y metodologías ágiles para el desarrollo de aplicaciones web, así como implementar soluciones seguras y escalables.'} />
        <ButtonPrincipal/>
      </div>
      <div>
        <img src='/images/Foto.jpeg' alt='Sebastián Castellanos' className='w-[390px] h-auto' />
      </div>
    </div> 
  );
}

export default Inicio;