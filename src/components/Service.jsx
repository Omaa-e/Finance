import React from 'react'

const Service = () => {
  return (
    <div className='w-full my-15'>
        <div className=' flex flex-col mx-auto text-center '>
            <div> <p className='text-green-950 '>Services</p></div>
           
            <div className='py-5 text-center'>
                <h2 className='text-green-950 text-3xl md:text-5xl'>Let us handle the numbers,<br/>so you can handle your success.</h2>
                <p className='text-green-950 pt-7'>Serving individuals and small businesses since 1987</p>
                <div className='m-10'>
                    <a className='bg-green-950 text-white text-sm hover:bg-green-300 hover:text-green-900 rounded-3xl py-3 px-3' href="">Schedule a call</a>
                </div>
                
            </div>
        </div>
    </div>
 )
}

export default Service
