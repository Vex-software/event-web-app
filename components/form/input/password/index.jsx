"use client"
import { useState } from 'react'

function Pass({ label, name, ...otherProps }) {

  const [type, setType] = useState(false)
  const pad = label ? 'pt-7' : 'pt-0'

  return (

    <div className={`relative ${pad}`}>
            <label htmlFor={name} className="absolute top-0 left-1 font-[Raleway] font-bold">{label}</label>
            <input  type={type ? 'text' : 'password'} name={name} {...otherProps} className={`py-1 px-3 border-2 border-[#0000006c] rounded-lg font-bold font-["Raleway"] text-xl focus:border-[3px] focus:border-[#7B61FF] outline-none`} />
            <button onClick={() => setType(!type)} className='p-0 px-2 text-left absolute top-[2.3rem] left-[12rem] rounded font-bold font-["Jost"] text-[#000] text-sm'>{type ? 'Hide' : 'Show'}</button>
    </div>

  )
}

export default Pass