import React from 'react'
import bgImg from '../assets/FinanceSavy.webp'

const Background = () => {
  return (
    <div className=''>
        <div className='w-full h-full '>
        <img className='w-full object-cover mix-blend-overlay' src={bgImg} alt="" />
        </div>
    </div>
  )
}

export default Background
