import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Customer from '../assets/CustomerSupport.png'
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../Utilities/animations'

const Help = () => {
  useGSAP(()=>{
    animateWithGsap("#helpHeading",{
      opacity: 1,
      y: -10,
      duration: 1,
      ease: "power2.inOut",
    })

    animateWithGsap("#helpParagraph",{
      opacity: 1,
      y: -10,
      duration: 1,
      ease: "power2.inOut",
      stagger:1.2
    })
  })
  return (
    <div className='w-full md:w-[1200px] mx-auto px-2 md:px-0 py-16 '>
        <div className='flex flex-col md:flex-row items-center gap-3'>
             {/* picture */}
            <div className='w-full md:w-2/4 flex items-center justify-center'>
                <img src={Customer} 
                className='w-[350px]'
                alt="CustomerImg" />
            </div>
            {/* intro */}
            <div className='w-full md:w-2/4 flex flex-col'>
                <h1
                id='helpHeading'
                className='text-5xl font-bold text-gray-300 pb-3 opacity-0'><span className='text-[#8332AC]'>Let us</span> <br /> help you</h1>
                <p 
                id='helpParagraph'
                className='w-full md:w-[80%]  md:text-justify text-[15px] py-3 opacity-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis autem reprehenderit iusto dignissimos ipsam at dolores nihil culpa ullam, dicta eum provident doloribus error dolore assumenda magnam consectetur numquam rem..</p>

                <Link className='py-5'>
                <Button value="Go to help center"/>
                </Link> 
            </div>
           
            
        </div>
      
    </div>
  )
}

export default Help
