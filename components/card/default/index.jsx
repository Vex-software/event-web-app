import Image from 'next/image';
import React from 'react'
import { GoLocation } from 'react-icons/go';
import { DateTime } from 'luxon'


function Card({ data }) {

    const { image, title, date, description, location } = data

    return (
        <div className='w-[18rem] active:shadow-[-5px_-5px_0px_1px_rgba(0,34,186,1)] hover:shadow-[6px_6px_0px_1px_rgba(0,34,186,1)] cursor-pointer font-["Raleway"] border-2  border-[rgba(0,34,186,0.3)] rounded-md'>
            <div>
                <Image className='w-full rounded-tl-md rounded-tr-md object-cover' src={image} width="285" height="184" alt={title}></Image>
            </div>
            <div className='w-full p-4 flex items-center'>
                <div className='mr-5'>
                    <p className='text-center text-[1.2rem] font-bold'>{DateTime.fromISO(date).setLocale('tr').toFormat('d')}</p>
                    <p className='text-center text-[1.2rem]  font-bold'>{DateTime.fromISO(date).setLocale('tr').toFormat('MMM')}</p>
                </div>
                <div className='leading-7'>
                    <h4 className='font-bold '>{title}</h4>
                    <p className='text-[14px]'>{description}</p>
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