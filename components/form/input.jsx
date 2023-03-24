import React from 'react'

function Input({type, name, id, placeholder, width}) {
  if (!type || !name || !id || !width) {
    throw new Error('type, name, id and width are required parameters.');   
  }

  return (
<input 
  className={`py-1 px-3 border-2 border-[#0000006c] rounded-lg font-bold font-["Rajdhani"] text-xl focus:border-[3px] focus:border-[#7B61FF] outline-none`}
  style={{width: width}}
  type={type}
  name={name}
  id={id}
  placeholder={placeholder} 
/>
  )
}

export default Input


// Kullanımı:
//    <Input name="name" width="200px" type="text" id="name" placeholder="name" />
