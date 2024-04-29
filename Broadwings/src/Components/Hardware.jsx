import React from 'react'
import {MdLaptop} from 'react-icons/md'
import { FaCogs } from "react-icons/fa";
import {ScrollTrigger} from 'gsap/all'
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'
import { animateWithGsap } from '../Utilities/animations';

gsap.registerPlugin(ScrollTrigger)


const Hardware = () => {

useGSAP(()=>{

     gsap.from("#par",{
            scrollTrigger:{
                trigger:"#par",
                start:'20% bottom'
            },
            opacity:0,
            scale:1,
            duration:2,
            ease:'power2.inOut'
        })

    animateWithGsap("#heading",{
        opacity: 1,
      y: -10,
      duration: 1,
      ease: "power2.inOut",
    })
},[])
  return (
    <div className='w-full md:w-[1200px] mx-auto px-2 md:px-0 py-16 '>
        <div className='py-7 grid md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-5 py-4'>
                 <h1
                 id='heading'
                 className='text-3xl md:text-5xl font-bold text-gray-300 opacity-0'>Quality <span className='text-[#8332AC]'>Hardware</span> and <br /><span className='text-[#8332AC]'>Software</span> solutions for you.</h1>
                 <p 
                 id='par'
                 className='text-[15px] w-full md:w-[90%] '>At Broadwings we excel in providing quality hardware and software support to perform daily tasks and operations</p>
            </div>

            {/* cards */}
            <div className='flex flex-col gap-4 bg-white/15 rounded-lg px-8 py-7'>
                <div className='flex gap-6 items-center'>
                    <div><FaCogs size={35} className='text-[#8332AC]'/></div>
                    <div className='flex flex-col'>
                        <h1 className='text-[17px] pb-1 text-gray-300 font-medium'>Software</h1>
                        <p className='text-[14px] pb-1 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dignissimos voluptatibus quam doloremque, soluta sint.</p>
                        <a href="" className='text-[14px] hover:text-[#8332AC]'>Learn more</a>
                    </div>

                </div>
                <div className='flex gap-6 items-center'>
                    <div><MdLaptop size={35} className='text-[#8332AC]'/></div>
                    <div className='flex flex-col'>
                        <h1 className='text-[17px] pb-1 text-gray-300 font-medium'>Hardware </h1>
                        <p className='text-[14px] pb-1 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dignissimos voluptatibus quam doloremque, soluta sint.</p>
                        <a href="" className='text-[14px] hover:text-[#8332AC]'>Learn more</a>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hardware
