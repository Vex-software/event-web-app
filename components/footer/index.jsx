import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { Blocks } from '@/mocks'


function Footer() {

  return (

<footer className="bg-[#4f4cee] w-full  md:px-10 font-['Jost']">
    <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                  <span className=" text-white text-[2.5rem] ">WeX.com</span>
              </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          {
          Blocks.map((i, index) =>
              <div key={index}>
                  <ul className=" font-medium">
                  <li className=' w-full mb-6'><Link href="/" className='mb-6 text-sm font-bold text-white '>{i.title}</Link></li>
                    {
                    i.items.map((i, index) => <li className='md:w-full w-1/3 mb-3 text-white ' key={index}><Link href={i.url}> {i.title} </Link></li>)
                    }
                  </ul>
              </div>
               )
            }
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white  sm:text-center">© 2023 <Link href="/" className="hover:underline">WeX™</Link>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link href="#" className="text-white">             
                    <BsFacebook></BsFacebook>          
                  <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="#" className="text-white">
                    <BsInstagram></BsInstagram>          
                  <span className="sr-only">Instagram page</span>
              </Link>
                <Link href="#" className="text-white"> 
                    <BsTwitter></BsTwitter>           
                  <span className="sr-only">Twitter page</span>
              </Link>
          </div>
      </div>
    </div>
</footer>

)
}
export default Footer

