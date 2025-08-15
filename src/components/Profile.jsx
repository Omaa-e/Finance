import React from 'react'

const Profile = () => {
    return (
        <div className='w-full p-10'>
            <div className='w-full mx-auto flex flex-col  m-10'>
                <div className=' w-full mx-auto text-center max-w-md md:max-w-3xl lg:max-w-4xl '>
                    <p className='text-6xl text-[#2e4f21] tracking-tighter'>Hear From Our Happy Clients</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:items-start  mt-16">
                    <div className="md:w-[300px]">
                        <div className="flex flex-row justify-between px-auto md:flex-col md:mr-8">
                            <div className="py-3 px-2 md:py-8 md:px-5 bg-[#2E4F21] rounded-lg text-[#FFFFFF] ">
                                <div className='border-t-[1px] border-[#7D9276] w-full'>
                                    <p className="text-xs md:text-xl mt-1 font-medium w-1/2 md:w-full">Graphic Designer</p>
                                    <p className="text-[#7D9276] mt-2 text-xs md:text-sm">Ontario, Canada</p>
                                </div>

                            </div>
                            <div className="py-3 px-2 md:py-8 md:px-3 rounded-lg text-[#2e4f21]">
                                <div className='border-t-[1px] border-[#7D9276] '>
                                    <p className="text-xs w-1/2 md:w-full md:text-xl mt-1 font-medium">Commercial Photographer</p>
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

                    <div className="flex-1">
                        <div className="mx-auto text-center lg:px-10 mt-3">
                            <p>
                                "Managing my taxes as a freelancer used to be overwhelming, but Noble
                                Finance made it effortless.”
                            </p>
                            <div>
                                <p>Margaret L., 24 years old</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
