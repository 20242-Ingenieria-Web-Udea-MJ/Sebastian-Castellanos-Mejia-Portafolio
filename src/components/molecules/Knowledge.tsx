import React from 'react'
import Cuadro from '@/components/atoms/cuadro';
import {TitleSecondary, TextPrincipal2} from '@/components/atoms/titles';

const Knowledge = () => {
  return (
    <div className='flex flex-col w-[970px] h-[653px] items-center gap-8'>
      
      <div className='flex flex-col items-center gap-4'>
        <TitleSecondary title={'Mis conocimientos'} />
        <span> </span>
        <TextPrincipal2 text={'Estas son algunas de las áreas en las que he trabajado y en las que puedo aportar para generar valor.'} />
      </div>

      <div className='flex flex-wrap gap-4 justify-center'>
        <Cuadro title={'Diseño Web'} text={'Experiencia en el diseño de proyectos web personalizados utilizando Figma para crear interfaces atractivas y funcionales.'} url={'/icons/coding.png'} />
        <Cuadro title={'Front-end'} text={'Crear interfaces de usuario y experiencias de usuario.'} url={'/icons/illustration.png'} />
        <Cuadro title={'Backend-end'} text={'He trabajado en la creación de API REST, utilizando Nodejs, Express y Spring Boot.'} url={'/icons/coding.png'} />
        <Cuadro title={'Control de versiones'} text={'Experiencia en la gestión de proyectos utilizando Git para control de versiones y colaboración eficiente.'} url={'/icons/git.png'} />
      </div>
    </div>
  );
}

export default Knowledge;