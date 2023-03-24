"use client"
import {useState} from 'react'

function pass({label, name, id, placeholder, width, margin}) {

    const [type, setType] = useState(false)

    if (!name || !id || !width) {
        throw new Error('name, id, label and width are required parameters.');   
      }
  return (
    <div className='flex flex-col relative' style={{margin: margin, width:width}}>
        <p className='p-0 px-2 text-left absolute top-[-28px] left-[0px] rounded font-bold font-["Rajdhani"] text-[#000] text-lg'>{label}</p>
        <div className={`relative`}>
                <input 
                type={type ? 'text' : 'password'}
                className={`py-1 px-3 border-2 border-[#0000006c] rounded-lg font-bold  font-["Rajdhani"] text-xl focus:border-[3px] focus:border-[#7B61FF] outline-none`}
                style={{width: width}}
                name={name}
                id={id}
                placeholder={placeholder}/> 
          
                <button onClick={()=> setType(!type)} className='p-0 px-2 text-left absolute top-[10px] right-[0px] rounded font-bold font-["Rajdhani"] text-[#000] text-sm'>{type ? 'Hide' : 'Show'}</button>
          </div>
    </div>
  )
}

export default pass

// Kullanımı:
//    <PassInput label="Password" width="400px" name="name" id="name" placeholder="Password" ></PassInput>
