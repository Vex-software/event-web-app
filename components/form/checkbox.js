import React from 'react'

function checkbox({id, name, children}) {
  return (
    <div>
        <input type="checkbox" id={id} name={name}  className='mr-2 '/>
        <label htmlFor="myCheckbox" className='font-bold'>{children}</label>
    </div>
  )
}

export default checkbox