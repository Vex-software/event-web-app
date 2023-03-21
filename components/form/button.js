import React from 'react'

function button({size,margin, padding, children}) {
  return (
    <button style={{ fontSize: size, margin:margin, padding:padding }} className='font-bold py-2 px-10 text-white rounded-md bg-[#4F4CEE] border-2 border-[#4F4CEE]' >{children}</button>

        // <button style={{ fontSize: size }} className='font-bold py-2 px-10 text-white rounded-md bg-[#4F4CEE]' >{children}</button>
        )
}

export default button