import React from 'react'
import { Navlinks, Stats } from '../Utilities/Utilities'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='w-full py-3 px-5 absolute top-0 left-0 z-10 bg-transparent'>
        <div className='flex items-center justify-between bg-transparent'>

            <h1 className='px-3 py-2 bg-white/15 rounded-lg text-[14px]'>Broadwings</h1>
            {/* navLinks */}
            <div className=' hidden md:flex gap-5 bg-transparent'>
               {Navlinks.map((link,id)=>(
                <Link 
                className='text-[14px] text-gray-200 bg-transparent'
                to={link.to}
                key={id}>
                {link.Name}
                </Link>
               ))}
            </div>
            {/* login and signUp */}
            <div className='flex items-center gap-3 bg-transparent'>
                <Link
                className='text-[14px] text-gray-200 bg-transparent'
                >login</Link>
               <Link>
               <Button value="SignUp"/>
               </Link>
            </div>

            
        </div>
      
    </div>
  )
}

export default Navbar
