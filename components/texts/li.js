import Link from 'next/link'
import React from 'react'

function li({size, margin, padding, href, color, cursor, listStyle, fontWeight, children}) {
  return (
    <li>
        <Link className={`text-${size}xl m-${margin} p-${padding} text-${color} cursor-${cursor} list-${listStyle} font-${fontWeight}`} href={href} >{children}</Link>
    </li>
    // <Link style={{fontSize:size, margin:margin, padding,padding, color:color, cursor:cursor, listStyleType:listStyle, fontWeight:fontWeight}} className='  text-xl font-bold ' href={href}>{children}</Link>
    )
}

export default li