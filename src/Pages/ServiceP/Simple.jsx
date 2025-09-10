import React from 'react'
import Img1 from '../../assets/pencil.webp'
import Img2 from '../../assets/Currency.webp'
import Img3 from '../../assets/rubix.webp'

function Simple () {
    const simple =[
        {
            id:1,
            title: 'Our tax advisors write you a plan',
            text: 'Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.',
            image: Img1
        },

        {
            id:2,
            title: 'Onboard us to your finances',
            text: 'Offer expert guidance and representation to resolve tax audits and disputes with confidence.',
            image: Img2
        },

        {
            id:3,
            title: 'We solve the rest',
            text: 'Maintain organized financial records and provide clear reports to support business growth and financial health.',
            image: Img3
        }
    ]
  return (
    <div className='w-full h-auto py-20 px-20 '>
        <div className='flex flex-col gap-10'>
            <div className='text-[#2e4f21]'>
                <p>How it works</p>
                <h1 className='text-5xl py-6'>A simple onboarding</h1>
                <p className=''>Serving individuals and small businesses since 1987</p>
            </div>
            <div className='flex flex-col text-[#2e4f21] mt-15  '>
               {simple.map((simple,index)=>{
                return(
                     <div className='flex flex-col mt-4  xl:flex-row xl:px-28'>
                     <h1 className='text-9xl mb-8 w-[26%] h-40 xl:w-[24%] '>{simple.id}</h1>
                    <div className='flex flex-col rounded-2xl px-6 pt-5 xl:flex-row xl:pb-20  '>
                        <div className='flex flex-col xl:w-[55%] xl:px-20'>
                            <h2 className='text-4xl mb-6'>{simple.title}</h2>
                            <p className=''>{simple.text}</p>
                        </div>
                       
                        <div className='flex pt-16 xl:pt-0'>
                        <div className='bg-[#F4F7F5] rounded-2xl flex items-end justify-center w-full h-190 xl:w-100 xl:h-85'>
                            <img src={simple.image} alt="" className='h-[100%] w-auto object-contain self-end' />
                        </div>
                    </div>
                    </div>
                   
                </div>
                )
               })}
               
            </div>
        </div>
    </div>
  )
}

export default Simple