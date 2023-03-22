import React from 'react'
import Image from 'next/image';


function soonCard({image, title, day}) {
  return (
    <div className='w-72 h-78 border-2 border-[#292929] rounded-lg cursor-pointer relative'>
        <Image src={image} width="380" height="380" alt='dsf' className='rounded-md object-cover' />
        <div className='rounded-md absolute top-[6rem] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent'></div>
        <h2 className= 'text-white absolute text-[1.4rem] font-bold bottom-16 left-6 '>{title}</h2>
        <p className='text-[#ee4c4c] absolute font-semibold text-[1.2rem] bottom-8 left-6'>Son {day} Gün!</p>
    </div>
  )
}

export default soonCard

// Kullanımı;
// <SoonCard image="/img/card/soon-card.svg" title="Halk Oyunları" day="5"></SoonCard>
