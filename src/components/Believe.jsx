import React from 'react';
import { Link } from "react-router-dom"; 

const Believe = () => {
  return (
    <div className='bg-[#F9F9F9] w-full mx-auto'>
      <div className='text-center flex flex-col py-43'>
        <div className='text-center text-[#2e4f21] space-y-5 px-7 md:px-21 xl:px-24 '>
          <h2 className=' text-[2rem] leading-8 md:text-[2.9rem] md:leading-12 xl:text-[3.7rem] xl:leading-15  tracking-tight sm:px-0'>We believe that tax filing should be seamless, accurate, and stress-free. Get started with Noble Finance today!</h2>
        </div>


        <div className='mt-12'>
          <Link to="/book">
            <button className='bg-[#2e4f21] text-white hover:bg-green-300 hover:text-green-900 rounded-full py-5 px-7 transition cursor-pointer'>Connect with our experts</button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Believe
