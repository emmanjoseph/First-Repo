import React from 'react'
import { Stats } from '../Utilities/Utilities'
import {FaArrowRight} from 'react-icons/fa'
import Button from './Button'
const Hero = () => {
  return (
    <div className='w-full h-[95vh]'>
        <img src="https://wallpaperaccess.com/full/2255132.jpg" alt='heroImg'
        className='w-full h-[95vh] object-cover'
        />
        <div className='absolute top-0 left-0 w-full bg-black/85 h-[95vh] flex items-center '>
            <div className='w-full md:w-[1200px] mx-auto flex flex-col px-5 md:px-0 mt-24'>
                <h1 className='text-3xl md:text-5xl font-bold pb-3'>Broadwings <span className='text-[#8332AC]'>Technologies</span></h1>
                <span className='text-[16px] md:text-[20px] py-2 font-semibold'>Home of Computers, Software, Network Graphics Office System & Technical Support </span>
                <p className='w-full md:w-[65%] text-[15px] pt-2 pb-5 text-justify leading-normal text-gray-300'>We provide high quality and affordable services including website development, Graphic 
designs, Android applications, Hardware & Software support, distribution of computers with 
associated accessories, office equipment with associated consumables specifically for Kenyan 
market & e-commerce solutions.  </p>
<div className='py-2 flex gap-7 items-center'>
    <Button value="Explore More "/>
    <a href=""
    className='flex items-center justify-center gap-1 hover:gap-2 duration-150 transition-all'
    ><p>Discover More</p><FaArrowRight/></a>
</div>
{/* statistics */}
            <div className='w-full md:w-[80%] hidden md:grid md:grid-cols-3 mt-5 gap-2'>
                {Stats.map((stat,id)=>{
                    return <div className='flex flex-col gap-2' key={id}>
                        <h1 className='text-2xl font-bold '>{stat.number}</h1>
                        <p>{stat.paragraph}</p>
                    </div>
                })}
            </div>

            </div>
           
        </div>
    </div>
  )
}

export default Hero
