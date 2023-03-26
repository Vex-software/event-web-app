import Link from 'next/link'
import React from 'react'

function button({ children, isWhite, disabled, small, tag = 'button' }) {
  const bgColor = isWhite ? 'bg-white' : 'bg-[#4f4cee]';
  const borderColor = isWhite ? 'border-[#4f4cee]' : 'border-[#4f4cee]';
  const textColor = isWhite ? 'text-[#4f4cee]' : 'text-[#fff]';
  const bG = disabled ? 'bg-[#4f4cee4a] text-[#fff] border-[#4f4cee4a] hover:shadow-[0_0_0_0_rgba(0_0_0_0)] active:shadow-[0_0_0_0_rgba(0_0_0_0)] cursor-no-drop' : '';
  const sm = small ? 'text-[.8rem]' : 'text-[1rem]'
  return (
    tag == 'button' ?
      <button href="/" className={`${bgColor} px-4 py-2.5 ${borderColor} border-2 font-semibold ${sm} ${textColor} ${bG} font-sans active:shadow-[-5px_-5px_0px_1px_rgba(0,34,186,1)] hover:shadow-[6px_6px_0px_1px_rgba(0,34,186,1)] rounded`}>
        {children}
      </button>
      :
      <Link href="/" className={`${bgColor} px-4 py-2.5 ${borderColor} border-2 font-semibold ${sm} ${textColor} ${bG} font-sans active:shadow-[-5px_-5px_0px_1px_rgba(0,34,186,1)] hover:shadow-[6px_6px_0px_1px_rgba(0,34,186,1)] rounded`}>
        {children}
      </Link>

  );
}

export default button;