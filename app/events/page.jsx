"use client"
// import React from 'react'
import React, { useRef, useEffect } from 'react'
import { Button, Title, Card, CardSoon, Input, Checkbox, InputPass, Toggle, Dropdown, Filter } from '@/components'

function index()
{
    const filterRef = useRef(null); // create a ref for the filter component

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            const scrollY = window.scrollY;
            if (scrollY >= 100)
            {
                filterRef.current.classList.add('md:fixed', 'md:top-0', 'md:left-0');
            } else
            {
                filterRef.current.classList.remove('md:fixed', 'md:top-[4.5rem]', 'md:left-0');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () =>
        {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <main>
            <div className='w-full flex flex-col px-1 md:flex-row md:justify-end md:mt-16 mb-20'>
                <div className='md:h-screen md:w-[30%]' ref={filterRef}>
                    <div className='my-5 px-2 w-full'>
                        <Filter />
                    </div>
                </div>
                <div className='md:w-[70%]'>
                    <div className='w-full flex flex-col  '>
                        <div className=' w-full flex flex-row justify-between'>
                            <div className='w-3/5 p-1'>
                                {/* <Card url="/" image="/card/eventCard/card-1.svg" title="Örnek Başlık" date="2023-04-12T10:30:00.000Z" description="Bu bir örnek açıklamadır." location="İstanbul, Türkiye" /> */}
                            </div>
                            <div className='w-3/5 p-1'>
                                <Card url="/" image="/card/eventCard/card-2.svg" title="Örnek Başlık" date="2023-04-12T10:30:00.000Z" description="Bu bir örnek açıklamadır." location="İstanbul, Türkiye" />
                            </div>
                        </div>
                        <div className=' w-full flex flex-row justify-between'>
                            <div className='w-3/5 p-1'>
                                <Card url="/" image="/card/eventCard/card-3.svg" title="Örnek Başlık" date="2023-04-12T10:30:00.000Z" description="Bu bir örnek açıklamadır." location="İstanbul, Türkiye" />
                            </div>
                            <div className='w-3/5 p-1'>
                                <Card url="/" image="/card/eventCard/card-4.svg" title="Örnek Başlık" date="2023-04-12T10:30:00.000Z" description="Bu bir örnek açıklamadır." location="İstanbul, Türkiye" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default index
