import React from 'react'
import { TextPrincipal2, TitleSecondary } from '../atoms/titles'

const Education = () => {
  return (
    <div className='flex flex-col w-[970px] h-[653px] items-center'>
      
      <div className='flex flex-col items-center gap-4'>
        <TitleSecondary title={'Educación'} />
        <span> </span>
        <TextPrincipal2 text={'Esta es la ruta educativa que he trazado a lo largo de mi vida.'} />
      </div>
      <div className="flex justify-between items-start w-full p-8 bg-white rounded-lg shadow-md">
  <div className="flex flex-col items-start w-1/2">
    <h3 className="text-xl font-semibold">Universidad de Antioquia</h3>
    <p className="text-sm mb-2">Estudiante</p>
    <div className="bg-primary text-white px-3 py-1 rounded-full text-xs">
      2019 - Actualidad
    </div>
  </div>
  <div className="flex flex-col items-start w-2/3">
    <h3 className="text-xl font-semibold">Ingeniería de Sistemas</h3>
    <p className="text-sm text-gray-600">
      El programa de Ingeniería de Sistemas sigue un modelo pedagógico basado en la investigación que se centra en tres pilares: ser, saber y hacer, y enfatiza la resolución de problemas y el desarrollo de competencias. Engloba el estudio de elementos científicos y tecnológicos para la investigación, la innovación, la modelización y la gestión de sistemas físicos o abstractos.
    </p>
  </div>
</div>





    </div>
  )
}

export default Education