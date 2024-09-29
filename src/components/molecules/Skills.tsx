import { TitleSecondary } from '../atoms/titles'
import Index from '../atoms/ProgressBar'
import React from 'react'

const Skills = () => {
  return (
    <div className=''>
        <TitleSecondary title={'Lenguajes'}/>
        <Index title={'HTML'} percentage={80}/>
        <Index title={'CSS'} percentage={70}/>
        <Index title={'JS'} percentage={65}/>
        <Index title={'Python'} percentage={80}/>
        <Index title={'Java'} percentage={80}/>
    </div>
  )
}

export default Skills