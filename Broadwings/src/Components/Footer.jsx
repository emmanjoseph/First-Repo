import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div  className='w-full md:w-[1200px] mx-auto px-2 md:px-0 py-14 '>
      <div className='grid md:grid-cols-4 gap-5 md:gap-4 my-4 pb-9 border-b border-b-white'>
        <div>
          <h1 className='text-xl text-gray-300 pb-1'>Location</h1>
          <p className='text-[14px] leading-normal '>Life ministry rose avenue 1st floor</p>
          <span className='text-[14px] leading-normal '>Address: PO Box 8665-00200 
Nairobi,</span>
        </div>
        <div>
          <h1 className='text-xl text-gray-300 pb-1'>Shop with us</h1>
          <ul className='text-[14px] flex flex-col  gap-1'>
            <li><a href=""></a>Laptops</li>
            <li><a href=""></a>PCs</li>
            <li><a href=""></a>Monitors</li>
            <li><a href=""></a>Printers</li>
            <li><a href=""></a>Peripherals</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl text-gray-300 pb-1'>Services</h1>
          <ul className='text-[14px] flex flex-col  gap-1'>
            <li><a href=""></a>Graphics Design</li>
            <li><a href=""></a>Software</li>
            <li><a href=""></a>Networking supply</li>
            <li><a href=""></a>Domain registration</li>
            <li><a href=""></a>Data recovery</li>
            <li><a href=""></a>Website design and development</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl text-gray-300 pb-1'>Quick links</h1>
          <ul className='text-[14px] flex flex-col  gap-1'>
            <li><a href=""></a>Products</li>
            <li><a href=""></a>More about us</li>
            <li><a href=""></a>FAQ</li>
            <li><a href=""></a>Terms of service</li>
            <li><a href=""></a>Privacy</li>
            
          </ul>
        </div>
      </div>

      {/* social media */}
      <div className='my-2 flex items-center justify-between'>
        <h1 className='text-xl text-gray-300 pb-1'>Social Media</h1>
        <div className='flex gap-4 my-1'>
          <a href=""><FaFacebook size={20}/></a>
          <a href=""><FaSquareXTwitter size={20}/></a>
          <a href=""><FaInstagram size={20}/></a>
          
        </div>
      </div>
    
    </div>
  )
}

export default Footer
