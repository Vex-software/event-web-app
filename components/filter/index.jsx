"use client"
import { useState } from "react";
import { BiDownArrow } from 'react-icons/bi';
import { BiUpArrow } from 'react-icons/bi';
import Toggle from '@/components/toggle'
<<<<<<< Updated upstream
import Checkbox from '@/components/form/checkbox/'
=======
import Checkbox from '@/components/form/checkbox/index.jsx'
>>>>>>> Stashed changes

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-60">
      <div className="mb-5 pb-5 border-b-2 border-[#0000000e]">
        <h3 className="text-3xl font-[Jost] ">Filters</h3>
      </div>
      <div className="mb-5 pb-5 border-b-2 border-[#0000000e]">
        <Toggle>Online</Toggle>
      </div>
    <div className="w-full">
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    className="text-black hover:bg-[#4f4cee41] w-full px-4 py-2.5 text-lg rounded-lg text-center flex items-center justify-between"
    type="button"
    onClick={toggleDropdown}
  >
    Kategoriler
    <div className="relative">
      <BiDownArrow className={`${isOpen ? 'hidden' : ''}`} />
      <BiUpArrow className={`${isOpen ? '' : 'hidden'}`} />
    </div>
  </button>
    <div
      id="dropdown"
      className={`${isOpen?'h-auto':'h-0 overflow-hidden'} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
    >
    <ul className="py-2 text-sm text-gray-700 max-h-60 overflow-y-auto" aria-labelledby="dropdownDefaultButton">
        <li><Checkbox message="Konser" /></li>
        <li><Checkbox message="Sanat" /></li>
        <li><Checkbox message="Söyleşi" /></li>
        <li><Checkbox message="Bilim" /></li>
        <li><Checkbox message="Gezi / Seyehat" /></li>
        <li><Checkbox message="Sağlık" /></li>
        <li><Checkbox message="Spor" /></li>
        <li><Checkbox message="Sinema" /></li>
        <li><Checkbox message="Tiyatro" /></li>
        <li><Checkbox message="Teknoloji" /></li>
        <li><Checkbox message="Yazılım" /></li>
        <li><Checkbox message="Turnuva" /></li>
        <li><Checkbox message="Tasarım" /></li>
        <li><Checkbox message="Yiyecek / İçecek" /></li>
      </ul>
    </div>

</div>

    </div>

  );
}

export default Dropdown