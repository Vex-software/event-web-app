import Image from 'next/image'
import { Inter } from 'next/font/google'
import Checkbox from '@/components/form/checkbox.jsx'
import Button from '@/components/button/index.jsx'
import FullInput from '@/components/form/full_input.jsx'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main>
      <div className='mt-20 w-full mb-24'>
        <div className='w-3/5 text-left mx-auto mb-16 '>
          <h2 className='font-["Rajdhani"] text-5xl text-[#4F4CEE] font-bold text-[3rem] '>Sign Up</h2>

        </div>
        <div className='w-3/6 text-center mx-auto mb-10 leading-10'>
          <form method='' action='/' className='text-center relative font-["Rajdhani"] '>
            <div className='flex justify-evenly px-20'>
              {/* left */}
              <div className='mr-10'>
                <FullInput width="300px" label="First Name" margin="2rem" type="text" name="first_name" id="first_name" placeholder="First Name" />
                <FullInput width="300px" label="Last Name" margin="2rem" type="text" name="last_name" id="last_name" placeholder="Last Name" />
                <FullInput width="300px" label="Email Adress" margin="2rem" type="email" name="email" id="email" placeholder="Email Adress" />
              </div>
              {/* right */}
              <div>
                <FullInput width="300px" label="Phone Number" type="text" margin="2rem" name="number" id="number" placeholder="Phone Number" />
                <FullInput width="300px" label="Password" type="password" margin="2rem" name="password" id="password" placeholder="Password" />
                <FullInput width="300px" label="Password" type="password" margin="2rem" name="password-r" id="password-r" placeholder="Password" />
              </div>
            </div>
            <div className='text-left ml-14'>
              <Checkbox id="asd" name="asda" message=" Kişisel verilerimin işlenmesine yönelik aydınlatma metnini okudum ve kabul ediyorum."></Checkbox>
              <Checkbox id="asd" name="asda" message="Kampanyalardan haberdar olabilmem için kişisel verilerimin işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul ediyorum."></Checkbox>


            </div>
            <Button size='2.25rem'>Sign Up</Button>
          </form>
        </div>
      </div>
    </main>
  )
}
