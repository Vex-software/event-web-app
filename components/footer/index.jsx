import Link from 'next/link'
import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


function Footer() {
  return (

    <div className='w-full bg-[#4F4CEE]  text-white '>
      <div className="pt-10 border-b-2 flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
          <div className='md:w-1/5 w-full '>
              <h2 className='text-7xl text-center font-["Rajdhani"]'>WeX</h2>
          </div>
          {/* ///////////////////////////////////// */}
          <div className='md:w-1/5 w-full md:border-none md:my-0 md:px-0 border-b-2 border-[#0000000c] my-8 px-2'>
              <ul className='leading-9 font-thin font-["Rajdhani"] flex flex-row justify-center flex-wrap'>
                <li className=' w-full '><Link href="/" className='font-bold text-xl border-b-2 md:border-none'>About</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">About</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">How it works</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Careers</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Press</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Blog</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Forum</Link></li>
              </ul>
          </div>
          {/* ///////////////////////////////////// */}
          <div className='md:w-1/5 w-full md:border-none md:my-0 md:px-0 border-b-2 border-[#0000000c] mb-8 px-2'>
          <ul className='leading-9 font-thin font-["Rajdhani"] flex flex-row justify-center flex-wrap'>
                <li className=' w-full '><Link href="/" className='font-bold text-xl border-b-2 md:border-none'>Partner With Us</Link></li>
                <li className='md:w-full w-2/5'><Link href="/">Partnership Programs</Link></li>
                <li className='md:w-full w-2/5'><Link href="/">Affiliate Program</Link></li>
                <li className='md:w-full w-2/5'><Link href="/">Connectivity Partners</Link></li>
                <li className='md:w-full w-2/5'><Link href="/">Promotions and events</Link></li>
                <li className='md:w-full w-2/5'><Link href="/">Integrations</Link></li>
                <li className='md:w-full w-2/5'><Link href="/">Community</Link></li>
                <li className='md:w-full w-2/5'><Link href="/">Loyalty program</Link></li>
              </ul>
          </div>
          {/* ///////////////////////////////////// */}
          <div className='md:w-1/5 w-full md:border-none md:my-0 md:px-0 border-b-2 border-[#0000000c] mb-8 px-2'>
          <ul className='leading-9 font-thin font-["Rajdhani"] flex flex-row justify-center flex-wrap'>
          <li className=' w-full '><Link href="/" className='font-bold text-xl border-b-2 md:border-none'>Support</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Help Center</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Contact us</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Privacy policy</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Terms of service</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Trust and safety</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Accessibility</Link></li>
              </ul>
          </div>
          {/* ///////////////////////////////////// */}
          <div className='md:w-1/5 w-full md:my-0 md:px-0 mb-8 px-2'>
          <ul className='leading-9 font-thin font-["Rajdhani"] flex flex-row justify-center flex-wrap'>
          <li className=' w-full '><Link href="/" className='font-bold text-xl border-b-2 md:border-none'>Get The App</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Wex.com for Android</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">WeX.com for İOS</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Mobile site</Link></li>
                <li className='md:w-full w-1/3'><Link href="/">Press</Link></li>
              </ul>
            {/* <img src="../img/footer/app-store.svg" alt='App Store' /> */}
          </div>
        </div>
        <div className='font-["Rajdhani"] w-full md:py-2 py-10 md:px-24 items-center md:justify-between flex md:flex-row flex-col text-center  md:mr-40 '>
          <div className='md:w-1/6 flex justify-center my-5'>
             <Link href="/"><BsInstagram className='text-xl mx-4 md:mr-4'></BsInstagram></Link>
             <Link href="/"> <BsFacebook className='text-xl mx-4 md:mr-4'></BsFacebook></Link>
             <Link href="/"><BsTwitter className='text-xl mx-4 md:mr-4'></BsTwitter></Link>
          </div>
          <div className='items-center'>
              <p className='text-xl md:m-0 mt-2 mb-10'>© 2023 WeX - All Rigth Reserved</p>
          </div>
        </div>
    </div>
  )
}
export default Footer
