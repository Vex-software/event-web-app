import React from 'react'
import Image from 'next/image';

import { DateTime } from 'luxon';


function soonCard({ data }) {
    const { image, title, date } = data


    return (
        <div className={`border-2 border-[rgba(0,34,186,0.3)] rounded-lg cursor-pointer active:shadow-[-5px_-5px_0px_1px_rgba(0,34,186,1)] hover:shadow-[6px_6px_0px_1px_rgba(0,34,186,1)] relative`}>

            <div className="rounded-md object-cover h-full w-full absolute top-0 left-0">
                <Image className='rounded-md'
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                />
            </div>
            <div className='rounded-md absolute top-[6rem] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent'></div>
            <h2 className='text-white absolute text-[1.4rem] font-bold bottom-16 left-6 '>{title}</h2>
            <p className='text-[#ee4c4c] absolute font-semibold text-[1.2rem] bottom-8 left-6'>Son {DateTime.fromISO(date).setLocale('tr').toFormat('d')} Gün!</p>
        </div>
    )
}

export default soonCard

