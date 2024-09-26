import { ButtonPrincipal } from '../atoms/buttoms';
import {TitlePrincipal, TitleSecondary} from '@/components/atoms/titles';
import React from 'react'


const Inicio = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[970px] h-[467px] left-[9px] gap-0  bg-white relative">
       <TitlePrincipal>
           I’m Rayan Adlrdard <span className="text-primary">Front-end</span> Developer
        </TitlePrincipal>
        <TitleSecondary title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.'}/>
        <ButtonPrincipal/>
        
    </div> 
       
  );
}; 

export default Inicio;