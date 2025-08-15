import React from 'react'

const Profile = () => {
  return (
    <div className='w-full h-screen  '>
       <div className='w-full mx-auto text-center'>
            <div className=' w-full mx-auto text-center max-w-md md:max-w-3xl lg:max-w-4xl '>
                <p className='text-6xl text-[#2e4f21] tracking-tighter'>Hear From Our Happy Clients</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center  gap-8 mt-8'>
                <div className='grid grid-cols-3 md:grid-cols-1 gap-y-16  '>
                    <div className=' py-5  rounded-xl text-[#2e4f21]'>
                        <p className='text-xl'>Graphic Designer</p>
                        <p className='mt-2 text-sm'>Ontario, Canada</p>
                    </div>
                     <div className=' py-5 rounded-xl text-[#2e4f21]'>
                        <p className='text-xl'>Graphic Designer</p>
                        <p className='mt-2 text-sm'>Ontario, Canada</p>
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
