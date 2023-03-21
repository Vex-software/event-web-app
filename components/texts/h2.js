import React from 'react'

function h2({size, color, fontWeight, children}) {
  return (
    <h2  className='font-["Rajdhani"] text-5xl text-[#4F4CEE] font-bold' style={{fontSize:size, color:color, fontWeight:fontWeight}}>{children}</h2>
  )
}

export default h2