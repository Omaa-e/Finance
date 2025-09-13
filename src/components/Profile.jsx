import React from 'react'
import Img from '../assets/hr.webp'

function Profile () {
    const profile =[
        {
            id: 1,
            title: "Graphic Designer",
            text: "Ontario, Canada"
        },

        {
            id:2,
            title: "Commercial Photographer",
            text: "Ontario, Canada"
        },

        {
            id:3,
            title: "Stylist",
            text: "Austin Texas"
        }
    ]
    return (
        <div className='w-full p-[7%] md:m-[]'>
            <div className='w-full flex flex-col p-5 md:p-0 '>
                <div className=' w-full mx-auto text-center max-w-md md:max-w-3xl lg:max-w-4xl '>
                    <p className='text-4xl sm:text-5xl md:text-3xl lg:text-5xl text-[#2e4f21] tracking-tighter'>Hear From Our Happy Clients</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:items-start mt-10  md:mt-16 w-full ">
                    <div className="md:w-[300px]  md:border-r-[1px] border-[#7D9276]">
                        <div className="flex flex-row md:justify-between  md:flex-col">
                            <div className="sm:py-3 px-8 md:py-8 md:px-4 bg-[#2E4F21] rounded-lg text-[#FFFFFF] ">
                                <div className='border-t-[1px] border-[#7D9276] w-full'>
                                    <p className="text-xs md:text-xl mt-1 w-4/5 md:w-full">Graphic Designer</p>
                                    <p className="text-[#7D9276] mt-2 text-xs md:text-sm">Ontario, Canada</p>
                                </div>

                            </div>
                            <div className="py-3 px-8 md:py-8 md:px-3 rounded-lg text-[#2e4f21]">
                                <div className='border-t-[1px] border-[#7D9276] '>
                                    <p className="text-xs w-1/2 md:w-full md:text-xl mt-1 ">Commercial Photographer</p>
                                    <p className="text-[#7D9276] mt-2 text-xs md:text-sm">Ontario, Canada</p>
                                </div>
                            </div>
                            <div className="py-3 px-2 md:py-8 md:px-5 rounded-xl text-[#2e4f21]">
                                <div className='border-t-[1px] border-[#7D9276]'>
                                    <p className="text-xs md:text-xl mt-1">Stylist</p>
                                    <p className="text-[#7D9276] mt-2 text-xs md:text-sm">Austin Texas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex-col md:m-10">
                        <div className="mx-auto mt-5 md:mt-[-2rem] ">
                            <p className='text-xl text-[#2e4f21] '>
                            "Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.”</p>
                            <div className='flex mt-8'>
                                <img className='w-10 h-11 rounded-xl object-cover' src={Img} alt="" />
                                <div className='my-3 '>
                                     <p className='ml-9 text-[#2e4f21]'>Margaret L., 24 years old</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
