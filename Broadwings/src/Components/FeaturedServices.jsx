import React from 'react'
import { featuredCardsData } from '../Utilities/Utilities'
import {Link} from 'react-router-dom'
import Button from './Button'

const FeaturedServices = () => {
  return (
    <div className='w-full md:w-[1200px] mx-auto px-2 md:px-0 py-16 '>
        <div className='w-full flex flex-col items-center justify-center bg-white/15 rounded-lg py-6 px-4'>
             <h1 className='text-4xl font-semibold pb-2'>Featured Services</h1>
             <p className='w-full md:w-[60%] md:text-center text-[14px] pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus ipsam maxime porro labore voluptatem magni omnis sit beatae perferendis?</p>
             {/* actual services */}
             <div className='grid md:grid-cols-3 gap-4 mt-3'>
                {featuredCardsData.map((card,id)=>{
                    return <div key={id} className='bg-[#07020D] flex flex-col gap-1 px-3 py-4 rounded-lg'>
                        <p className='text-white p-3 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/20 my-3'>{card.icon}</p>
                        <h1 className='text-[16px] text-gray-300 font-medium'>{card.title}</h1>
                        <p className='text-[14px]'>{card.paragraph}</p>
                        <Link className='mt-2'>
                        <Button value="Explore more"/>
                        </Link>
                    </div>
                })}
             </div>
        </div>
       
      
    </div>
  )
}

export default FeaturedServices
