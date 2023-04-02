import React from 'react'

function Title({ children, size, color })
{
    const classes = `font-[Jost] ${size === 'large' ? 'text-5xl' : size === 'small' ? 'text-xl' : 'text-2xl'} ${color === 'default' ? 'text-[#4f4cee]' : color === 'black' ? 'text-[#000]' : color === 'white' ? 'text-white' : 'text-gray-600'}`;

    return (
        <div>
            <h1 className={classes}>
                {children}
            </h1>
        </div>
    )
}

export default Title
