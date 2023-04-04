import React from 'react'
import { Filter, Alert, Carousel } from '@/components'
import { Photos } from '@/mocks'

export default function Home()
{
  return (
    <main>
      <div className='w-5/6 mx-auto '>
        <Carousel items={Photos} />
      </div>
    </main>
  )
}
