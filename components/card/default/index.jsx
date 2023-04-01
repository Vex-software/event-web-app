import Image from 'next/image';
import React from 'react'
import { GoLocation } from 'react-icons/go';

function Card({ img = "/card/default.jpg", alt, mounth="April", day="08", head="Default Title", desc="Lorem ipsum dolor sit amet.", location="Default / Location" }) {
    return (
        <div className='w-[18rem] active:shadow-[-5px_-5px_0px_1px_rgba(0,34,186,1)] hover:shadow-[6px_6px_0px_1px_rgba(0,34,186,1)] cursor-pointer font-["Raleway"] border-2  border-[rgba(0,34,186,0.3)] rounded-md'>
            <div>
                <Image className='w-full rounded-tl-md rounded-tr-md object-cover' src={img} width="285" height="184" alt={alt}></Image>
            </div>
            <div className='w-full p-4 flex items-center'>
                <div className='mr-5'>
                    <p className='text-center text-[1.2rem] font-bold'>{mounth}</p>
                    <p className='text-center text-[1.2rem]  font-bold'>{day}</p>
                </div>
                <div className='leading-7'>
                    <h4 className='font-bold '>{head}</h4>
                    <p className='text-[14px]'>{desc}</p>
                    <div className='flex items-center'>
                        <GoLocation className='mr-2 font-bold' />
                        <p className='font-medium'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card


// Kullanımı;
// <Card img="/img/card/card.svg" alt="Konser Resmi" mounth="Mayıs" day="22" head="Eypio Konseri!" desc="Lorem ipsum dolor sit amet." location="Kutahya / Turkey"></Card>
