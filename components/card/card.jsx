import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function card({img, alt, mounth, day, head, desc, location}) {
    if (!mounth || !day || !location || !alt || !head) {
    throw new Error('img, mounth, day, location, alt and head are required parameters.');
  }
  else if(!img){
    img="/img/card/default.jpg"
}
  return (
    <div className='w-[18rem] hover:shadow-lg shadow-[#7B61FF] cursor-pointer font-["Raleway"] border-2 hover:border-[#7B61FF] border-[#bdbdbd85] rounded-md'>
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
                    <FontAwesomeIcon icon={faLocationDot} className="fab" style={{ width: '15px', height: '15px' }} />
                    <p>{location}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card


// Kullanımı;
// <Card img="/img/card/card.svg" alt="Konser Resmi" mounth="Mayıs" day="22" head="Eypio Konseri!" desc="Lorem ipsum dolor sit amet." location="Kutahya / Turkey"></Card>
 