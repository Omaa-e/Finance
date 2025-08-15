import React from 'react'

const Profile = () => {
  return (
    <div className='w-full p-10'>
       <div className='w-full mx-auto flex flex-col  m-10'>
            <div className=' w-full mx-auto text-center max-w-md md:max-w-3xl lg:max-w-4xl '>
                <p className='text-6xl text-[#2e4f21] tracking-tighter'>Hear From Our Happy Clients</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center md:items-start mr-8 mt-19'>
                <div className='flex flex-row px-[-5rem] p-5 w-90  md:flex-col mr-8 '>
                    <div className=' py-8 px-5 bg-[#2E4F21] rounded-lg text-[#FFFFFF]'>
                        <p className='text-xl'>Graphic Designer</p>
                        <p className=' text-[#7D9276] mt-2 text-sm'>Ontario, Canada</p>
                    </div>
                     <div className=' py-8 px-4 rounded-lg text-[#2e4f21]'>
                        <p className='text-xl'>Commercial Photographer</p>
                        <p className=' text-[#7D9276] mt-2 text-sm'>Ontario, Canada</p>
                    </div>
                     <div className=' py-8 px-5 rounded-xl  text-[#2e4f21]'>
                        <p className='text-xl'>Stylist</p>
                        <p className=' text-[#7D9276] mt-2 text-sm'>Austin Texas</p>
                    </div>
                </div>
                <div className=''>
                    <div className='mx-auto text-center px-0 lg:px-10 '>
                        <p>"Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.”</p>
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
