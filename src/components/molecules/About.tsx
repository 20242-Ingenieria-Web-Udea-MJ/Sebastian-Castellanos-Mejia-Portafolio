
import React from 'react'

const About = () => {
  return (
    <div className=' text-secondary w-[220px] h-[126px]  flex flex-col gap-[10px]'>
        <h1 className='flex justify-between'><span>Edad:</span><span>22</span></h1>
        <h1 className='flex justify-between'><span>Residencia:</span><span>Colombia</span></h1>
        <h1 className='flex justify-between'><span>Address:</span><span>Medellín, Antioquia</span></h1>
        <h1 className='flex justify-between'><span>Freelance:</span><span>Disponible</span></h1>
    </div>
  );
}
export default About;