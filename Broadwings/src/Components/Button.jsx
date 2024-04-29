import React from 'react'

const Button = ({value}) => {
  return (
   <button className="px-3 py-2 text-[14px] bg-[#8332AC] rounded-lg border border-transparent hover:border-white hover:bg-transparent hover:text-white">
    {value}
   </button>
  )
}

export default Button
