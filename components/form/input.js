import React from 'react'

function input({type, name, id, children}) {
  return (
    <input className='py-1 px-3 w-80 border-2 border-[#00000060] rounded-lg font-bold text-xl' type={type} name={name} id={id} placeholder={children} />
  )
}

export default input