import React from 'react'

import { Button, Title, Card, CardSoon, Input, Checkbox, InputPass, Toggle, Dropdown, Filter } from '@/components'

function index()
{
    return (
        <main>
            <div className='w-full flex flex-col px-1 md:flex-row md:justify-end mb-10'>
                <div className='md:h-screen md:fixed md:top-[4.5rem] md:left-0 md:w-[30%]'>
                    <div className='my-5 mx-2 w-full '>
                        <Filter />
                    </div>
                </div>
                <div className='md:w-[63%]'>
                    <div className='w-full flex flex-col  '>
                        <div className=' w-full flex flex-row justify-between'>
                            <div className='w-3/5 p-1'>
                                <Card url="/" image="/card/eventCard/card-1.svg" title="Örnek Başlık" date="2023-04-12T10:30:00.000Z" description="Bu bir örnek açıklamadır." location="İstanbul, Türkiye" />
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
                        <div className=' w-full flex flex-row justify-between'>
                            <div className='w-3/5 p-1'>
                                <Card url="/" image="/card/eventCard/card-1.svg" title="Örnek Başlık" date="2023-04-12T10:30:00.000Z" description="Bu bir örnek açıklamadır." location="İstanbul, Türkiye" />
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
                        <div className=' w-full flex flex-row justify-between'>
                            <div className='w-3/5 p-1'>
                                <Card url="/" image="/card/eventCard/card-1.svg" title="Örnek Başlık" date="2023-04-12T10:30:00.000Z" description="Bu bir örnek açıklamadır." location="İstanbul, Türkiye" />
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
                        <div className=' w-full flex flex-row justify-between'>
                            <div className='w-3/5 p-1'>
                                <Card url="/" image="/card/eventCard/card-1.svg" title="Örnek Başlık" date="2023-04-12T10:30:00.000Z" description="Bu bir örnek açıklamadır." location="İstanbul, Türkiye" />
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