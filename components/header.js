import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='w-full  flex p-4 items-center border-b-2 border-[#0000000c]'>
        <div className='w-1/4 text-center'>
            <h2 className="font-['Rajdhani'] text-4xl font-black text-[#4f4cee]">
                WeX
            </h2>
        </div>
        <div className='w-1/2 '>
            <ul className='flex justify-evenly font-["Rajdhani"] text-xl font-bold'>
                <li><Link className=' hover:border-b-2 border-[#4f4cee] ' href="/">Concerts</Link></li>
                <li><Link className=' hover:border-b-2 border-[#4f4cee] ' href="/">Arts</Link></li>
                <li><Link className=' hover:border-b-2 border-[#4f4cee] ' href="/">Conference</Link></li>
                <li><Link className=' hover:border-b-2 border-[#4f4cee] ' href="/">Movies</Link></li>
                <li><Link className=' hover:border-b-2 border-[#4f4cee] ' href="/">International</Link></li>
            </ul>
        </div>
        <div className='w-1/4 text-center font-["Rajdhani"] text-xl font-bold'>
            <button className='mr-5    border-2 px-3 py-1 rounded border-[#4F4CEE]'>Log In</button>
            <button className='border-2 border-[#4F4CEE] px-3 py-1 rounded bg-[#4F4CEE] text-white'>Sign Up</button>
        </div>
    </div>
  )
}
export default Header
