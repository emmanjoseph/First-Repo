import React from 'react'
import { clientsReviews } from '../Utilities/Utilities'

const Reviews = () => {
  return (
    <div className='w-full md:w-[1200px] mx-auto px-2 md:px-0 py-14 '>
        <div className='flex items-center justify-center flex-col gap-2'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-2xl md:text-5xl text-gray-300 font-bold capitalize text-center pb-2'>What our clients <br />say about us</h1>
                <p className='w-full md:w-[70%] text-[14px] md:text-[15px] text-center'>Our clients have had a great experience from us. See what they have to say about our services</p>
            </div>

            <div className='grid md:grid-cols-3 gap-4 mt-2'>
                {clientsReviews.map((review,id)=>{
                    return <div key={id} className='flex items-center gap-4 bg-white/15 py-4 px-3 rounded-lg'>
                        <img src={review.clientImg} alt="clientImg"
                        className='w-[40px] rounded-full'
                        />
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[16px] text-gray-300 '>{review.clientName}</h1>
                            <p className='text-[14px]'>{review.review}</p>
                        <span className='text-[13px] text-[#8332AC]'>{review.date}</span>
                        </div>
                        
                    </div>
                })}
            </div>

        </div>
    </div> 
  )
}

export default Reviews
