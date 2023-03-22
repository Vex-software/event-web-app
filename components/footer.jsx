import Link from 'next/link'
import React from 'react'


function Footer() {
  return (

    <div className='w-full bg-[#4F4CEE]  text-white '>
      <div className='flex border-b-2 p-10'>
          <div className='w-1/5'>
              <h2 className='text-5xl text-center font-["Rajdhani"]'>WeX</h2>
          </div>
          {/* ///////////////////////////////////// */}
          <div className='w-1/5'>
              <ul className='leading-9 font-thin font-["Rajdhani"]'>
                <li><Link href="/" className='font-bold text-xl'>About</Link></li>
                <li><Link href="/">About WeX.com</Link></li>
                <li><Link href="/">How it workss</Link></li>
                <li><Link href="/">Careers</Link></li>
                <li><Link href="/">Press</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Forum</Link></li>
              </ul>
          </div>
          {/* ///////////////////////////////////// */}
          <div className='w-1/5'>
              <ul className='leading-9 font-thin font-["Rajdhani"]'>
                <li><Link href="/" className='font-bold text-xl'>Partner With Us</Link></li>
                <li><Link href="/">Partnership Programs</Link></li>
                <li><Link href="/">Affiliate Program</Link></li>
                <li><Link href="/">Connectivity Partners</Link></li>
                <li><Link href="/">Promotions and events</Link></li>
                <li><Link href="/">Integrations</Link></li>
                <li><Link href="/">Community</Link></li>
                <li><Link href="/">Loyalty program</Link></li>
              </ul>
          </div>
          {/* ///////////////////////////////////// */}
          <div className='w-1/5'>
              <ul className='leading-9 font-thin font-["Rajdhani"]'>
                <li><Link href="/" className='font-bold text-xl'>Support</Link></li>
                <li><Link href="/">Help Center</Link></li>
                <li><Link href="/">Contact us</Link></li>
                <li><Link href="/">Privacy policy</Link></li>
                <li><Link href="/">Terms of service</Link></li>
                <li><Link href="/">Trust and safety</Link></li>
                <li><Link href="/">Accessibility</Link></li>
              </ul>
          </div>
          {/* ///////////////////////////////////// */}
          <div className='w-1/5'>
              <ul className='leading-9 font-thin font-["Rajdhani"]'>
                <li><Link href="/" className='font-bold text-xl'>Get the app</Link></li>
                <li><Link href="/">Wex.com for Android</Link></li>
                <li><Link href="/">Karcis.com for İOS</Link></li>
                <li><Link href="/">Mobile site</Link></li>
                <li><Link href="/">Press</Link></li>
              </ul>
            {/* <img src="../img/footer/app-store.svg" alt='App Store' /> */}
          </div>
        </div>
        <div className='font-["Rajdhani"] p-10 text-right mr-40 '>
          <p>© 2023 WeX - All Rigth Reserved</p>
        </div>
    </div>
  )
}
export default Footer
