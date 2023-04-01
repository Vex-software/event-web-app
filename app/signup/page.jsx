import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardSoon, Input, Checkbox, InputPass, Toggle, Dropdown } from '@/components'



export default function Home() {
  return (
    <main >
        <div className='font-[Raleway] w-8/12 mx-auto  lg:w-6/12  mt-12 mb-12'>


          <div className='mb-8'>
            <h4 className='font-bold text-[2rem] text-[#7F7DF3]'>Sign Up</h4>
          </div>
          <form>
          <div className='flex'>
                <div className='w-1/2 px-5'>
                  <div className='mb-6'>
                    <Input type="text" label="First Name" name="name" placeholder="First Name"/>
                  </div>

                  <div className='mb-6'>
                    <Input type="text" label="Last Name" name="surname" placeholder="Last Name"/>
                  </div>

                  <div className='mb-6'>
                    <Input type="email" label="Email" name="email" placeholder="Email"/>
                  </div>
                </div>



                <div className='w-1/2 px-5'>
                  <div className='mb-6'>
                    <Input type="text" label="First Name" name="name" placeholder="First Name"/>
                  </div>

                  <div className='mb-6'>
                    <Input type="text" label="Last Name" name="surname" placeholder="Last Name"/>
                  </div>

                  <div className='mb-6'>
                    <Input type="email" label="Email" name="email" placeholder="Email"/>
                  </div>

          
                </div>           

            </div>
           


              <Button >Log In</Button>
          </form>
          <div className='mt-6 text-center text-[#4f4cee] text-md'>
              <Link href="/">Don&apos;t You Have an Account?</Link>
          </div>

          </div>


    </main>
  )
}        