import React from 'react'

function Input({ ...otherProps }) {


    return (
        <input {...otherProps} className={`py-1 px-3 border-2 border-[#0000006c] rounded-lg font-bold text-xl focus:border-[#7B61FF] outline-none`} />


    )
}

export default Input


// Kullanımı:
//    <Input name="name" type="text" id="name" placeholder="name" />
