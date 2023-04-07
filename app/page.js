import React from 'react'
import Image from 'next/image'
import { Filter, Alert, Carousel, Banner, Date, Community, Card, Information, Headinfo, AnimateNumber, Swiper } from '@/components'
import { Photos } from '@/mocks'

const cardData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Eypio Konseri!',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },



];

export default function Home()
{
  return (
    <main>
      <div className='relative'>
        <img src="/home/hero/hero.svg" className='w-full ' />
        <p className='w-[1000px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-center font-black font-[Jost] text-[#4f4cee]'>Deneyimlerin Sınırını Zorla!</p>
      </div>
      <div>
        <AnimateNumber />
      </div>







      {/* <div>
        <Swiper title="deneme baslik" cardData={cardData} />
      </div> */}


    </main>
  )
}
