import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='w-full bg-red-500 flex'>
        <div >
            <h2>
                WeX
            </h2>
        </div>
        <div>
            <ul>
                <li><Link href="/">Concerts</Link></li>
                <li><Link href="/">Arts</Link></li>
                <li><Link href="/">Conference</Link></li>
                <li><Link href="/">Movies</Link></li>
                <li><Link href="/">International</Link></li>
            </ul>
        </div>
        <div>
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}
export default Header
