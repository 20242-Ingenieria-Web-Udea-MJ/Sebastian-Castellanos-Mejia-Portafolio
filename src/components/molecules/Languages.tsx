import React from 'react'
import { TitleSecondary } from '../atoms/titles'
import Index from '../atoms/ProgressBar'

const Languages = () => {
  return (
    <div className=''>
        <TitleSecondary title={'Idiomas'}/>
        <Index title={'Español'} percentage={100}/>
        <Index title={'Ingles'} percentage={50}/>
    </div>
  );
}

export default Languages;