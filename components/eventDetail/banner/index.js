import React from 'react'
import Image from 'next/image'
function Banner()
{
    return (
        <div className="flex items-center justify-center h-[21.5rem] p-4 overflow-hidden  rounded bg-[#DADAFB]">
            <img src="/card/default2.png" className="w-full h-full object-cover border-2 rounded border-[#0000005b] " />
        </div>
    )
}

export default Banner