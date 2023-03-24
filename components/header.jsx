import Link from 'next/link'
import React from 'react'
import Button from '@/components/buttons/button.jsx'


function Header({scrolled}) {
    const parent = scrolled ? 'p-2' : 'p-4';
    const headText = scrolled ? 'text-4xl' : 'text-5xl'
    const navText = scrolled ? 'text-xl':'text-2xl'
    const filter = scrolled ? 'backdrop-blur-[4px]' : ''
    const color = scrolled ? 'bg-[#DADAFB]' : ''
    const small = scrolled ? 'true' : ''

  return (
    <div className={`w-full m-[0 auto] flex ${parent} ${filter} ${color} items-center place-content-evenly border-b-2 border-[#0000000c]`}>
        <div className='w-1/6 text-center'>
            <h2  className={`font-["Rajdhani"] ${headText} text-[#4F4CEE] font-bold text-[3rem]`}>WeX</h2>

        </div>
        <div className='w-1/2 '>
            <ul className={`flex justify-evenly font-["Rajdhani"]  font-bold `}>
                <li><Link className={`hover:border-b-2 ${navText} border-[#4f4cee]`} href="/">Concerts</Link></li>
                <li><Link className={`hover:border-b-2 ${navText} border-[#4f4cee]`} href="/">Arts</Link></li>
                <li><Link className={`hover:border-b-2 ${navText} border-[#4f4cee]`} href="/">Conference</Link></li>
                <li><Link className={`hover:border-b-2 ${navText} border-[#4f4cee]`} href="/">Movies</Link></li>
                <li><Link className={`hover:border-b-2 ${navText} border-[#4f4cee]`} href="/">International</Link></li>
            </ul>
        </div>
        <div className='w-1/6 text-center place-content-evenly  flex p-2'>
            <div>
                <Button >Sign Up</Button>
            </div>
            <div>
                <Button small isWhite >Sign Up</Button>
            </div>
        </div>
    </div>
  )
}
export default Header
