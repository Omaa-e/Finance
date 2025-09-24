import React from 'react'
import Img1 from '../assets/FinanceSafe.avif'
import Img2 from '../assets/FinanceChart.webp'
import Img3 from '../assets/FinanceBox.webp'

function About()  {
    const about =[
        {
            id: 1,
            title: 'Tax Preparation & Filing',
            description: 'Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.',
            image: Img1,
            buttons: ['1099 taxes', 'Dependents', 'Trust Taxes']
        },
        {
            id: 2,
            title: 'IRS Audit Assistance',
            description: 'Offer expert guidance and representation to resolve tax audits and disputes with confidence.',
            image: Img2,
            buttons: ['1099 taxes', 'Dependents', 'Trust Taxes']
        },
        {
            id: 3,
            title: 'Bookkeeping & Accounting',
            description: 'Maintain organized financial records and provide clear reports to support business growth and financial health.',
            image: Img3,
            buttons: ['1099 taxes', 'Dependents', 'Trust Taxes']
           
        }
    ]
  return (
    <div className="w-full p-5">
        {about.map((about,index) =>{
            return (
                <div key={about.id} className='bg-[#d2f8dc] mb-4 rounded-2xl py-10 md:mb-10 '>
                    <div className='flex flex-col md:flex-row'>
                        <div className='md:w-1/2 flex justify-center'>
                            <img className='md:max-w-[400px]' src={about.image} alt="tax" />
                        </div>
                        <div className='md:w-1/2 p-10 flex flex-col justify-center text-[#2e4f21]'>
                            <h2 className='text-3xl mb-5'>{about.title}</h2>
                            <p>{about.description}</p>

                            <div className='mt-10 flex gap-3 flex-wrap '>
                                {about.buttons.map((button,idx) => {
                                    return (
                                         <button className='text-[#2e4f21] bg-white p-2 rounded-lg text-xs'>{button}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )
 })}
      
       
    </div>
  )
}

export default About
