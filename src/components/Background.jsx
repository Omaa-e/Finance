import React from 'react'
import bgImg from '../assets/FinanceSavy.webp'

const Background = () => {
  return (
    <div className='h-screen'>
        <div className='w-full h-[700px] '>
        <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt="" />
        </div>
    </div>
  )
}

export default Background
