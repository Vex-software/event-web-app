import Link from 'next/link'
import React from 'react'
import Button from '@/components/form/button'
import ButtonV2 from '@/components/form/buttonV2'
import H2 from '@/components/texts/h2'
import Li from '@/components/texts/li'

function Header() {
  return (
    <div className='w-full  flex p-4 items-center border-b-2 border-[#0000000c]'>
        <div className='w-1/4 text-center'>
            <H2 size='3rem' color="#4F4CEE">WeX</H2>
        </div>
        <div className='w-1/2 '>
            <ul className='flex justify-evenly font-["Rajdhani"] '>
                <li><Link className='text-2xl font-bold hover:border-b-2 border-[#4f4cee] ' href="/">Concerts</Link></li>
                <li><Link className='text-2xl font-bold hover:border-b-2 border-[#4f4cee] ' href="/">Arts</Link></li>
                <li><Link className='text-2xl font-bold hover:border-b-2 border-[#4f4cee] ' href="/">Conference</Link></li>
                <li><Link className='text-2xl font-bold hover:border-b-2 border-[#4f4cee] ' href="/">Movies</Link></li>
                <li><Link className='text-2xl font-bold hover:border-b-2 border-[#4f4cee] ' href="/">International</Link></li>
            </ul>
        </div>
        <div className='w-1/4 text-center font-["Rajdhani"] text-xl font-bold'>

            <Button size='1.2rem' margin="3px" padding=".5rem 2.5rem" >Sign Up</Button>
            <ButtonV2 size='1.2rem' margin="3px" padding=".5rem 2.5rem">Log In</ButtonV2>


        </div>
    </div>
  )
}
export default Header
