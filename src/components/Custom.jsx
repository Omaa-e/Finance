import React from 'react'
import Img from '../assets/FinanceBrick.webp'

const Custom = () => {
  return (
    <div className='w-full h-3/4 flex flex-col justify-center items-center p-10'>
        <div>
            <div className=''>
                <img src={Img} alt="Finance Brick" className='w-1/3 h-1/2 rounded-2xl' />
            </div>
        </div>
    </div>
  )
}

export default Custom
