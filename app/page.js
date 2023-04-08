import React from 'react'
import Link from 'next/link'
import { SlArrowDown } from 'react-icons/sl';
import Image from 'next/image'
import { Button, Filter, Alert, Carousel, Banner, Input, Date, Title, Community, Card, Information, Headinfo, AnimateNumber, Swiper } from '@/components'
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
    id: 2,
    image: '/card/soonCard/card2.svg',
    title: 'Evrende Sanal Gezi',
    date: '2023-04-19T10:00:00.000Z',
  },
  {
    id: 3,
    image: '/card/soonCard/card3.svg',
    title: 'Uluslararası Danslar',
    date: '2023-04-28T10:00:00.000Z',
  },
  {
    id: 4,
    image: '/card/soonCard/card1.svg',
    title: 'Hamilton Müzik',
    date: '2023-04-15T10:00:00.000Z',
  },
  {
    id: 5,
    image: '/card/soonCard/card2.svg',
    title: 'Evrende Sanal Gezi',
    date: '2023-04-19T10:00:00.000Z',
  },
  {
    id: 6,
    image: '/card/soonCard/card3.svg',
    title: 'Uluslararası Danslar',
    date: '2023-04-28T10:00:00.000Z',
  },
  {
    id: 4,
    image: '/card/soonCard/card1.svg',
    title: 'Hamilton Müzik',
    date: '2023-04-15T10:00:00.000Z',
  },
  {
    id: 5,
    image: '/card/soonCard/card2.svg',
    title: 'Evrende Sanal Gezi',
    date: '2023-04-19T10:00:00.000Z',
  },
  {
    id: 6,
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
    id: 2,
    image: '/card/eventCard/card-2.svg',
    title: 'Sefiller Tiyatrosu',
    date: '2023-05-09T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Bursa / Turkey',
  },
  {
    id: 3,
    image: '/card/eventCard/card-3.svg',
    title: 'Karakalem Sergisi',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 4,
    image: '/card/eventCard/card-4.svg',
    title: "Picasso'nun Dünyası",
    date: '2023-04-30T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Eskisehir / Turkey',
  },
  {
    id: 1,
    image: '/card/eventCard/card-1.svg',
    title: 'Sıla Akustik',
    date: '2023-04-11T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 2,
    image: '/card/eventCard/card-2.svg',
    title: 'Sefiller Tiyatrosu',
    date: '2023-05-09T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Bursa / Turkey',
  },
  {
    id: 3,
    image: '/card/eventCard/card-3.svg',
    title: 'Karakalem Sergisi',
    date: '2023-04-15T10:00:00.000Z',
    description: 'lorem ipsum dolor ipsum dolor sit amet. sit amet. lorem',
    location: 'Kutahya / Turkey',
  },
  {
    id: 4,
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
      <div className='relative mb-10'>
        <div className='w-full h-60 lg:h-full'>
          <img src="/home/hero/hero.svg" className='w-full h-full object-cover' />
        </div>
        <p className='lg:w-[1000px] md:w-[650px] lg:text-7xl md:text-5xl text-4xl w-[300px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-black font-[Jost] text-[#4f4cee]'>Deneyimlerin Sınırını Zorla!</p>
      </div>


      <div className='md:w-[90%] mx-auto'>
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
          <div className='flex flex-col items-center'>
            <p className='text-4xl text-[#4F4CEE] font-[Jost] font-bold'> Şu Ana Kadar </p>
            <SlArrowDown className='text-4xl animate-bounce inline-flex' />
          </div>
          <div className='md:flex-row md:w-full md:justify-between md:mt-5 flex flex-col text-center w-60 mx-auto'>
            <div className='mb-10 text-center mx-auto'>
              <AnimateNumber number={1852} delay={.5} />
              <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Üye</p>
            </div>
            <div className='mb-10 text-center mx-auto'>
              <AnimateNumber number={51} delay={20} />
              <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Kulüp</p>
            </div>
            <div className=' text-center mx-auto'>
              <AnimateNumber number={173} delay={20} />
              <p className='text-5xl text-[#000000a4] font-[Jost] font-bold'>Etkinlik</p>
            </div>
          </div>
        </div>



        <div>
          <div>
            <Swiper title="Öne Çıkan Etkinlikler" cardData={cardData} soon={false} />
          </div>
        </div>


        <div className='px-4 mt-16 mb-20 text-center'>
          <p className='mb-4 text-4xl text-[#4f4cee] font-[Jost] font-medium'>Subscribe To Our Newsletter</p>
          <p className='mb-5 text-lg font-[Jost] text-[#5C5C5F]'>Yayınlanan etkinliklerden ilk senin haberin olsun! <br /> Bültenimize abone olarak tüm etkinliklerden anında haberdar olabilirsin.</p>
          <form>
            <div className='lg:w-2/6 w-4/6 mx-auto'>
              <Input placeholder="Enter Your Email" className="text-center" type="email" />
            </div>
            <div className='lg:w-1/6 w-1/3 mx-auto mt-3'>
              <Button>Abone Ol</Button>
            </div>
          </form>

        </div>

      </div>
    </main >
  )
}



{/* Animate Number */ }




