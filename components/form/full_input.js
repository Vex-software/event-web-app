import React from 'react'

function full_input({label, type, name, id, placeholder}) {
  return (
    <div className='flex flex-col relative mb-10'>
        <p className='p-0 px-2 text-left absolute top-[-35px] left-[0px] rounded text-[#000] font-bold text-md'>{label}</p>
        <input className='py-1 px-3 w-80 border-2 border-[#00000060] rounded-lg font-bold text-xl' type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  )
}

export default full_input