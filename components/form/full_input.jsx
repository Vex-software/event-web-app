import React from 'react'

function full_input({label, type, name, id, placeholder, width, margin}) {
  if (!type || !name || !id || !width) {
    throw new Error('type, name, id, label and width are required parameters.');   
  }
  return (
    <div className='flex flex-col relative' style={{margin: margin}}>
        <p className='p-0 px-2 text-left absolute top-[-28px] left-[0px] rounded font-bold font-["Rajdhani"] text-[#000] text-lg'>{label}</p>
        <input 
          className={`py-1 px-3 border-2 border-[#0000006c] rounded-lg font-bold font-["Rajdhani"] text-xl focus:border-[3px] focus:border-[#7B61FF] outline-none`}
          style={{width: width}}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}/>   
    </div>
  )
}

export default full_input

// Kullanımı : 
//     <FullInput label="First Name" width="200px"  margin="2rem" type="text" name="name" id="name" placeholder="name" ></FullInput>
