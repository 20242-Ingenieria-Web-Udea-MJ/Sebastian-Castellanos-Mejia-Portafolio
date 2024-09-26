import React from 'react'
import { TitleSecondary } from '../atoms/titles'
import Index from '../atoms/ProgressBar'

const Languages = () => {
  return (
    <div className=''>
        <TitleSecondary title={'Languages'}/>
        <Index title={'Spanish'} percentage={100}/>
        <Index title={'English'} percentage={50}/>
    </div>
  );
}

export default Languages;