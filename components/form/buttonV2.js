import React from 'react'

function buttonV2({size,margin, padding, children}) {
  return (
    <button style={{ fontSize: size, margin:margin, padding:padding }} className='font-bold py-2 px-10 rounded-md text-[#4F4CEE] border-2 border-[#4F4CEE]' >{children}</button>
    )
}

export default buttonV2