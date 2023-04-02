import React from 'react'
import Image from 'next/image';

import { DateTime } from 'luxon';


function soonCard({ data, large  }) {
    const { image, title, date } = data
    const widthHeight = large ? 'w-96 h-96' : 'w-72 h-72';


    const verilenTarih = '2023-04-10T00:00:00.000Z';
    const today = DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const diff = today.diff(DateTime.fromISO(verilenTarih), 'days').days;
    const result = `Son ${Math.floor(Math.abs(diff))} Gün!`;
    return (
        <div className={` ${widthHeight} border-2 border-[rgba(0,34,186,0.3)] rounded-lg cursor-pointer active:shadow-[-5px_-5px_0px_1px_rgba(0,34,186,1)] hover:shadow-[6px_6px_0px_1px_rgba(0,34,186,1)] relative`}>

            <div className="rounded-md object-cover h-full w-full absolute top-0 left-0">
                <Image className='rounded-md'
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className='rounded-md absolute top-[6rem] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent'></div>
            <h2 className='text-white absolute text-[1.4rem] font-bold bottom-16 left-6 '>{title}</h2>
            <p className='text-[#ee4c4c] absolute font-semibold text-[1.2rem] bottom-8 left-6'>{result}</p>
        </div>
    )
}

export default soonCard

