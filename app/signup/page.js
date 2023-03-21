import Image from 'next/image'
import { Inter } from 'next/font/google'
import Checkbox from '@/components/form/checkbox'
import Button from '@/components/form/button'
import FullInput from '@/components/form/full_input'
import H2 from '@/components/texts/h2'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main>
      <div className='mt-20 w-full mb-24'>
          <div className='w-3/5 text-left mx-auto mb-16 '>
            <H2>Sign Up |</H2>
          </div>
          <div className='w-3/6 text-center mx-auto mb-10 leading-10'>
            <form method='' action='/' className='text-center relative font-["Rajdhani"] '>
              <div className='flex justify-evenly px-20'>
                {/* left */}
                <div className='mr-10'>
                <FullInput label="First Name" type="text" name="first_name" id="first_name" placeholder="First Name" />
                <FullInput label="Last Name" type="text" name="last_name" id="last_name" placeholder="Last Name" />
                <FullInput label="Email Adress" type="email" name="email" id="email" placeholder="Email Adress" />
                </div>
                {/* right */}
                <div>
                <FullInput label="Phone Number" type="text" name="number" id="number" placeholder="Phone Number" />
                <FullInput label="Password" type="password" name="password" id="password" placeholder="Password" />
                <FullInput label="Password" type="password" name="password-r" id="password-r" placeholder="Password" />
                </div>
              </div>
              <div className='text-left ml-14'>
                  <Checkbox id="myCheckbox" name="myCheckbox">
                    Kişisel verilerimin işlenmesine yönelik <span className=' border-b-2 border-[#0000005b]'>aydınlatma metnini</span> okudum ve kabul ediyorum.
                  </Checkbox>
                  <Checkbox id="myCheckbox" name="myCheckbox">
                    Kampanyalardan haberdar olabilmem için kişisel verilerimin işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul ediyorum.
                  </Checkbox>
              </div>
              <Button size='2.25rem'>Sign Up</Button>
            </form>
          </div>
        </div>
    </main>
  )
}
