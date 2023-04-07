import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Filter, Alert, Carousel, Banner, Date, Title, Community, Card, Information, Headinfo, AnimateNumber, Swiper } from '@/components'
import { Photos } from '@/mocks'
import { blue } from 'tailwindcss/colors';

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
];

export default function Home()
{
  return (
    <main>
      <div className='relative'>
        <img src="/home/hero/hero.svg" className='w-full ' />
        <p className='lg:w-[1000px] md:w-[650px] lg:text-7xl md:text-5xl text-2xl w-[300px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-black font-[Jost] text-[#4f4cee]'>Deneyimlerin Sınırını Zorla!</p>
      </div>



      <div className=''>
        <div className='w-full my-5 px-4 font-[Jost]'>
          <div className='w-full text-center'>
            <Title color='secondary' size="large">WeX.com</Title>
            <p className=' my-3 text-md text-[#7F7DF3]'>Üniversite hayatın aktivitesiz mi geçiyor?</p>
            <p className='text-sm text-[#00000096] mb-1'>Üniversite hayatı, öğrencilerin sadece ders çalışmakla sınırlı kalmaması gereken, aynı zamanda sosyal ve kişisel gelişimlerini de destekleyen etkinliklerle renklendirilmelidir. Aktivite yapmanın önemi, öğrencilerin sosyal becerilerini geliştirmelerine, yeni arkadaşlıklar kurmalarına, farklı kültürler ve ilgi alanlarıyla tanışmalarına ve üniversite hayatından tam olarak keyif almalarına olanak tanır.</p>
            <p className='text-sm text-[#00000096] mb-8'>
              Bu noktada Üniversite'de ki tüm kulüplerin yaptığı etkinlikleri sizlerle buluşturuyoruz.
            </p>
            <Link href="/" className='bg-[#4f4cee] py-2 px-4 text-lg text-white rounded'>Bize Katıl!</Link>
          </div>
        </div>
      </div>


      <div className='px-3'>
        <div>
          <Swiper title="deneme baslik" cardData={cardData} />
        </div>
      </div>






    </main >
  )
}



{/* Animate Number */ }
{/* <div>
            <AnimateNumber number={1852} delay={.5} />
            <p>Üye</p>
          </div>
          <div>
            <AnimateNumber number={51} delay={20} />
            <p>Kulüp</p>
          </div>
          <div>
            <AnimateNumber number={170} delay={20} />
            <p>Etkinlik</p>
          </div> */}



