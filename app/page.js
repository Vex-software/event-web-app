import Image from 'next/image'

import { Button, Card, CardSoon, Input, Checkbox, InputPass, Toggle, Dropdown } from '@/components'

// import Checkbox from '@/components/form/checkbox.jsx'
// import PassInput from '@/components/form/pass.jsx'




export default function Home() {

  return (
    <main>
      <div className='p-2'>
        <div className='mb-4'>
            <Button>Deneme</Button>
        </div>

        <div className='mb-4'>
          <Card></Card>
        </div>

        <div className='mb-4'>
          <CardSoon title='Eypio Konseri!' day='3'></CardSoon>
        </div>

        <div className='mb-4'>
         <Input label="First Name" placeholder="First Name"></Input>
        </div>

        <div className='mb-4'>
         <Checkbox id="checkbox" name="message" message="Lorem ipsum dolor sit amet."></Checkbox>
        </div>

        <div className='mb-4'>
         <InputPass label="Password" placeholder="Password"></InputPass>
        </div>

        <div className='mb-4'>
         <Toggle>Online</Toggle>
        </div>

        <div className='mb-4'>
         <Dropdown></Dropdown>
        </div>
     
      
      </div>
    </main>
  )
}
