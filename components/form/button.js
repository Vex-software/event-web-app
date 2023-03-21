import React from 'react'

function button({size, children}) {
  return (
        <button style={{ fontSize: size }} className='font-bold py-2 px-10 text-white rounded-md bg-[#4F4CEE]' >{children}</button>
        )
}

export default button