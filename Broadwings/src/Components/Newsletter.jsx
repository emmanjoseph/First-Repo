import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../Utilities/animations';


const Newsletter = () => {
 useGSAP(()=>{
    animateWithGsap("#newsHeading",{
      opacity: 1,
      y: -10,
      duration: 1,
      ease: "power2.inOut",
    })

    animateWithGsap("#newsParagraph",{
      opacity: 1,
      y: -10,
      duration: 1,
      ease: "power2.inOut",
      stagger:1.2
    })
  })
  return (
    <div className='w-full md:w-[1200px] mx-auto px-2 md:px-0 py-14 '>
        <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-2/4 flex flex-col gap-2'>
                <h1 
                id='newsHeading'
                className='text-2xl md:text-5xl font-bold text-gray-300 opacity-0'>Get the latest <br />updates </h1>
                <p
                id='newsParagraph'
                className='w-full md:w-[70%] md:text-justify text-[14px] md:text-[15px] py-2 opacity-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur unde numquam iure earum molestiae distinctio sit sequi inventore vero?</p>
            </div>
            <div className='w-full md:w-2/4 flex flex-col gap-2'>
                <form action="" method="post" className='flex flex-col gap-2 text-black'>
                  <h1 className='text-[20px] text-gray-300'>Create a free account </h1>
                  <div className='w-full flex items-center gap-4 my-3'>
                    <IoMdMail size={20} className='text-[#8332AC]'/>
                    <input type="email" name="" id="" placeholder='Email Address' 
                    className='py-3 px-4 rounded-lg w-full md:w-[450px]'
                    />
                  </div>
                  <div className='w-full flex items-center gap-4 my-3'>
                    <FaLock size={20} className='text-[#8332AC]'/>
                    <input type="password" name="" id="" placeholder='Password' 
                    className='py-3 px-4 rounded-lg w-full md:w-[450px]'
                    />
                  </div>
                  <button type="submit"
                  className="w-full md:w-[200px] px-4 py-3 text-[14px] text-white bg-[#8332AC] rounded-lg border border-transparent hover:border-white hover:bg-transparent hover:text-white"
                  >
                    Submit
                  </button>
                </form>
            </div>

        </div>
        
      
    </div>
  )
}

export default Newsletter
