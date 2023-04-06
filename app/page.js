import React from 'react'
import { Filter, Alert, Carousel, Banner, Date, Community, Information } from '@/components'
import { Photos } from '@/mocks'

export default function Home()
{
  return (
    <main className='w-4/5 mx-auto'>
      <div className='w-full'>
        <Banner />
        <Community>Dance Community</Community>
        <Date>Eylül 22, 2023 · 20.00</Date>
      </div>
      <div className='w-full'>
        <Information
          duration="20.00 - 21.56 1 hour 56 minutes"
          audience="This movie is suitable for
          audience aged 12  and above"
          attention="Face mask and social distancing
          are mandatory outside the car."
          location="Any Street, Any Neighborhood Merkez / Kutahya (6:45 Pub)"
        />
      </div>
    </main>
  )
}
