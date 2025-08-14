import React from 'react'
import Img1 from '../assets/FinanceSafe.avif'

const About = () => {
  return (
    <div className="w-full p-5">
      <div className='bg-[#d2f8dc] rounded-2xl py-10'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2'>
            <img src={Img1} alt="tax" />
          </div>
          <div className='md:w-1/2 p-10 flex flex-col justify-center text-[#2e4f21]'>
            <h2 className='text-3xl mb-5'>Tax Preparation & Filing</h2>
            <p>Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.</p>

            <div className='mt-5 flex gap-3'>
              <button className='text-[#2e4f21] bg-white p-2 rounded-lg text-xs'>1099 taxes</button>
              <button className='text-[#2e4f21] bg-white p-2 rounded-lg text-xs'>Dependents</button>
              <button className='text-[#2e4f21] bg-white p-2 rounded-lg text-xs'>Trust taxes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
