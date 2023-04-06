import React from 'react'
import { Filter, Alert, Carousel, Banner, Date, Community, Information, Headinfo } from '@/components'
import { Photos } from '@/mocks'

export default function Home()
{
  return (
    <main className='px-2'>
      <div className='w-full my-5'>
        <Banner />
      </div>
      <div>
        <Headinfo
          title="Drive In Senja: Back to The Future"
          clubUrl="www.google.com"
          community="ultraAslan Uni"
          date="September 22, 2021 · 20.00 "
          location="Any Street, Any Neighborhood, Merkez / Kütahya - (6:45 Pub)"
          desc="Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present."
        />
      </div>
      <div className='w-full'>
        <Information
          duration="20.00 - 21.56 1 hour 56 minutes"
          audience="This movie is suitable for
          audience aged 12  and above"
          attention="Face mask and social distancing
          are mandatory outside the car."

        />
      </div>

    </main>
  )
}
