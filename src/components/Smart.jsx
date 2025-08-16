import React from 'react'

const Smart = () => {
  return (
    <div className='w-full p-10'>
        <div className=' flex flex-col  justify-between w-full '>
            <div className='flex flex-col md:flex-row justify-evenly '>
                <h2 className='text-3xl'>Smart Finance for everyone</h2>
                 <div className='text-[#2e4f21]  '>
                    <p className='mx-auto '>At Noble Finance, we believe that financial confidence should be accessible to everyone—whether you’re a solo entrepreneur, managing a growing family, or running a small business.</p>
                 </div>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-1 mt-15  '>
                <div className=' py-5 text-[#2e4f21]'>
                    <p className='text-xl'>Graphic Designer</p>
                    <p className='mt-2 text-sm'>Ontario, Canada</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Smart
