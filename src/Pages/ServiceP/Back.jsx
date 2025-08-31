import React from 'react'
import bgImg from '../../assets/sky.webp'

const Back = () => {
  return (
    <div>
      <div className='w-full h-full '>
        <img className='w-full h-[600px] lg:h-[740px] object-cover mix-blend-overlay' src={bgImg} alt="" />
       </div>
    </div>
  )
}

export default Back
