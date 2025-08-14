import React from 'react'
import Img1 from '../assets/FinanceSafe.jpeg'

const About = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
        <div className='bg-green-100 rounded-3xl mx-auto max-w-[1240px] flex p-10 m-2'>
            <div className='w-full  p-10'>
                 <img src={Img1}/>
            </div>
            <div>
                <h2>Tax Preparation & Filing</h2>
                <p>Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.</p>
            </div>
        </div>

       
     
    </div>
  )
}

export default About
