import React from 'react'
import { UserRound, FolderClosed, Calculator } from 'lucide-react'

function Smart() {
    const smart = [
        {
            id: '1',
            icon: <FolderClosed />,
            title: 'For Freelancers',
            pretitle: 'Simplicity & Control',
            description: 'Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies—so you can focus on doing what you love.'
        },
        {
            id: '2',
            icon: <UserRound className='fill-[#2e4f21]' />,
            title: 'For Families',
            pretitle: 'Stability & Security',
            description: 'From budgeting tools to tax-saving insights, we help you plan for the future, maximize refunds, and keep your household finances running smoothly'
        },
        {

            id: '3',
            icon: <Calculator />,
            title: 'For Small Businesses',
            pretitle: 'Stability & Security',
            description: 'Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can spend less time on finances and more time scaling your business.'
        }
    ]
    return (
        <div className='w-full px-4 py-12 md:p-10'>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col md:flex-row justify-center w-full md:w-[100%] '>
                    <h2 className='text-3xl text-[#2e4f21] mb-6 md:w-[50%] md:text-5xl lg:text-6xl'>Smart Finance for everyone</h2>
                    <div className='text-[#2e4f21] md:w-[50%] md:pl-15 md:pb-4 '>
                        <p className=''>At Noble Finance, we believe that financial confidence should be accessible to everyone—whether you’re a solo entrepreneur, managing a growing family, or running a small business.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 mt-15 '>
                    {smart.map((smart, index) => {
                        return (
                            <div key={smart.id} className='border-t-[1px] border-[#7D9276] py-5 text-[#2e4f21] xl:pl-3 xl:border-l-[1px] xl:border-t-[0px] '>
                                <div className='w-[90%] space-y-5 xl:pl-10'>
                                    <p>{smart.icon}</p>
                                    <h2 className='text-2xl mb-4 xl:text-3xl'>{smart.title}</h2>
                                    <p className='mt-2 mb-4'>{smart.pretitle}</p>
                                    <p className=' mb-4'>{smart.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Smart
