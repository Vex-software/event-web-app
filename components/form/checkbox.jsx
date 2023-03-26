import React from 'react'

function checkbox({id, name, message}) {
  if (!id || !name || !message) {
    throw new Error('id, name and message are required parameters.');   
  }
  return (
      <label htmlFor={id} className="flex items-start">
        <input id={id} name={name} type="checkbox" className="w-4 h-4 border-gray-300 accent-[#4f4cee]" />
        <span className="ml-2 text-gray-700 font-bold leading-relaxed font-['Rajdhani']">{message}</span>
      </label> 
  )
}

export default checkbox

// Kullanımı:
//   <Checkbox id="asd" name="asda" message="aydınlatma metni"></Checkbox>
