import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Filter, Alert, Carousel, Banner, Date, Title, Community, Card, Information, Headinfo, AnimateNumber, Swiper } from '@/components'
import { Photos } from '@/mocks'
import { blue } from 'tailwindcss/colors';
const soonCardData = [
  {
    id: 1,
    image: '/card/soonCard/card1.svg',
    title: 'Hamilton Müzik',
    date: '2023-04-15T10:00:00.000Z',
  },
  {
    id: 1,
    image: '/card/soonCard/card2.svg',
    title: 'Evrende Sanal Gezi',
    date: '2023-04-19T10:00:00.000Z',
  },
  {
    id: 1,
    image: '/card/soonCard/card3.svg',
    title: 'Uluslararası Danslar',
    date: '2023-04-28T10:00:00.000Z',
  },
  {
    id: 1,
    image: '/card/soonCard/card1.svg',
    title: 'Hamilton Müzik',
    date: '2023-04-15T10:00:00.000Z',
  },
  {
    id: 1,
    image: '/card/soonCard/card2.svg',
    title: 'Evrende Sanal Gezi',
    date: '2023-04-19T10:00:00.000Z',
  },
  {
    id: 1,
    image: '/card/soonCard/card3.svg',
    title: 'Uluslararası Danslar',
    date: '2023-04-28T10:00:00.000Z',
  },
]




const cardData = [
  {
    id: 1,
    image: '/card/eventCard/card-1.svg',
    title: 'Sıla Akustik',
    date: '2023-04-11T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: '/card/eventCard/card-2.svg',
    title: 'Sefiller Tiyatrosu',
    date: '2023-05-09T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Bursa / Turkey',
  },
  {
    id: 1,
    image: '/card/eventCard/card-3.svg',
    title: 'Karakalem Sergisi',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 1,
    image: '/card/eventCard/card-4.svg',
    title: "Picasso'nun Dünyası",
    date: '2023-04-30T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Eskisehir / Turkey',
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
            <Link href="/" className='bg-[#4f4cee] py-2 px-6 text-lg text-white rounded'>Bize Katıl!</Link>
          </div>
        </div>
      </div>


      <div className="my-10">
        <div>
          <Swiper title="Yaklaşan Etkinlikler" soonCardData={soonCardData} soon={true} />
        </div>
      </div>

      <div className='mx-auto my-10'>
        <div className='flex flex-col text-center w-60 mx-auto'>
          <div className='mb-10 text-center mx-auto'>
            <AnimateNumber number={1852} delay={.5} />
            <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Üye</p>
          </div>
          <div className='mb-10 text-center mx-auto'>
            <AnimateNumber number={51} delay={20} />
            <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Kulüp</p>
          </div>
          <div className=' text-center mx-auto'>
            <AnimateNumber number={170} delay={20} />
            <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Etkinlik</p>
          </div>
        </div>
      </div>



      <div>
        <div>
          <Swiper title="Öne Çıkan Etkinlikler" cardData={cardData} soon={false} />
        </div>
      </div>





    </main >
  )
}



{/* Animate Number */ }




