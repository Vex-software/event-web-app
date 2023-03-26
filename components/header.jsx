"use client"
import Image from 'next/image';
import { useState } from 'react'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';
function Header ({scrolled}) {
    const padd = scrolled ? 'lg:px-4 py-1.5' : 'lg:px-8 py-2.5'   
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleDropdown() {
      setIsDropdownOpen(!isDropdownOpen);
    }
    function toggleMenu() {
      setIsMenuOpen(!isMenuOpen);
    }
    return (
    <nav className={` bg-white border-gray-200 sm:px-4 ${padd}   rounded border-b-2  relative`}>
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <div className='ml-3 text-center'>
            <h2  className={`font-["Rajdhani"] text-2xl text-[#4F4CEE] font-bold text-[3rem]`}>WeX</h2>
    </div>
    <div className={`w-full z-30 text-center items-center justify-between md:flex md:w-auto md:order-1 ${isMenuOpen ? "absolute top-[2.8rem] left-0" : "hidden"} `}>
          <ul className="font-[Rajdhani]  flex flex-col p-4 mt-4 border border-gray-100 rounded-b-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <Link href="#" className="block font-extrabold text-xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="#" className="block font-extrabold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</Link>
            </li>
            <li>
              <Link href="#" className="block font-extrabold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</Link>
            </li>
            <li>
              <Link href="#" className="block font-extrabold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Pricing</Link>
            </li>
            <li>
              <Link href="#" className="block font-extrabold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</Link>
            </li>
          </ul>
      </div>
  <div className="z-30 text-center flex items-center md:mr-[3rem] mr-[1rem]  md:order-2 relative">
      <button type="button" className="flex mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "  aria-expanded={isDropdownOpen} onClick={toggleDropdown} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <CgProfile className='text-4xl text-[#4f4cee]'></CgProfile>
      </button>
      <div className={` ${isDropdownOpen ? "" : "hidden"} w-[11.75rem] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-[2.25rem] left-[-95px]`}
            id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-600 font-bold" >Erdem Arslan</span>
          <span className="block text-sm  text-gray-500 truncate ">erdem.arslan0@ogr.dpu.edu.tr</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Events</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-3 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded={isMenuOpen} onClick={toggleMenu} >
        <AiOutlineMenu className='text-2xl'></AiOutlineMenu>
    </button>
  </div>
  </div>
</nav>
  )
}
export default Header
