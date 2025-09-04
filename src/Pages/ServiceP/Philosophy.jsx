import React from 'react'

function Philosophy  () {
    const philosophy=[
        {
            id:"01",
            text:"In empowering individuals and small businesses with the knowledge and tools they need to achieve lasting financial confidence."
        },
        {
            id:"02",
            text:"That personalized, trusted guidance, built on decades of experience, is the foundation of a successful financial partnership."
        },
        {
            id:"03",
            text:"In simplifying complex financial matters, providing clear, actionable strategies that pave the way for your financial well-being."
        }
    ]
  return (
    <div className='w-full h-full px-10 border-t-1 border-[#C7C7C7]'>
      <div className='flex flex-col gap-10 my-10 text-[#2e4f21]'>
        <div className='space-y-3 text-center'>
            <p className='text-sm'>Philosophy</p>
            <h1 className='text-5xl'>We believe:</h1>
        </div>
        
        <div className='flex flex-col justify-center gap-8 '>
            {philosophy.map((philosophy,index)=>{
                return(
                    <div className='text-center bg-[#E6FBEC] p-10 rounded-3xl space-y-5 flex flex-col  items-center' key={index}>
                         <p>{philosophy.id}</p>
                        <p className='text-3xl font-4xl'>{philosophy.text}</p>
                    </div>
                    
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Philosophy
