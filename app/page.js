import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/card/card.jsx'
import SoonCard from '@/components/card/soon_card.jsx'
import Button from '@/components/buttons/button.jsx'
import Input from '@/components/form/input.jsx'
import FullInput from '@/components/form/full_input.jsx'
import Checkbox from '@/components/form/checkbox.jsx'
import PassInput from '@/components/form/pass.jsx'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <main>
      <div className='p-10'>
          <div className='m-10'>
            <Input name="name" width="200px" type="text" id="name" placeholder="name" />
          </div>
        <div className='m-10'>
            <FullInput label="First Name" width="200px"  type="text" name="name" id="name" placeholder="name" ></FullInput>
        </div>
        <div className='m-10'>
            <Checkbox id="asd" name="asda" message="Aydınlatma Metnini okudum onaylıyorum."></Checkbox>
        </div>
        <div className='m-10'>
            <PassInput label="Password" width="200px" name="name" id="name" placeholder="Password" ></PassInput>
        </div>
        <div className='m-10'>
            <Button >merhaba</Button>
        </div>

      </div>
    </main>
  )
}
