import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardSoon, Input, Checkbox, InputPass, Toggle, Dropdown } from '@/components'



export default function Home() {
  return (
    <main >
      <div className='font-[Raleway] w-8/12 mx-auto  lg:w-4/12  mt-12 mb-12'>


        <div className='mb-8'>
          <h4 className='font-bold text-[2rem] text-[#7F7DF3]'>Log In</h4>
        </div>
        <form>
          <div>
            <div className='mb-6'>
              <Input type="email" label="Email" name="email" placeholder="Email"/>
            </div>

            <div className=''>
              <InputPass label="Password" name="password" placeholder="Password" />
            </div>
          </div>

          <div className='mb-6 text-right text-sm text-[#4f4cee]'>
            <Link href="/">Forgot Password?</Link>
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
