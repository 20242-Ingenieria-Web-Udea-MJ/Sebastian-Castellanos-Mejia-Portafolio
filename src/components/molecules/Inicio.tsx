import {ButtonPrincipal} from '../atoms/buttoms';
import {TitlePrincipal, TextPrincipal} from '@/components/atoms/titles';
import React, { useState } from 'react'
import Contact from './Contact';


const Inicio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='flex items-center justify-between w-[970px] h-[467px] gap-4 bg-white relative'>
      <div className='flex flex-col items-start gap-4'>
        <TitlePrincipal>
          I’m Sebastián Castellanos<span className="text-primary"> Front-end</span> Developer
        </TitlePrincipal>
        <TextPrincipal text={'Soy un estudiante de Ingeniería de Sistemas de la Universidad de Antioquia con un fuerte interés en la ciberseguridad y el desarrollo Full Stack. Me apasiona aprender nuevas tecnologías y metodologías ágiles para el desarrollo de aplicaciones web, así como implementar soluciones seguras y escalables.'} />
        <ButtonPrincipal onClick={toggleModal} />
      </div>
      <div className='flex items-center justify-center'>
        <img src="/images/Foto.jpeg" alt="Imagen de perfil" className='w-[400px] h-auto object-cover' />
      </div>
      {isModalOpen && <Contact toggleModal={toggleModal} />}
    </div>
  );
}
export default Inicio;