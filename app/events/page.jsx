"use client"
import React, { useRef, useEffect } from 'react'
import { Button, Title, Card, CardSoon, Input, Checkbox, InputPass, Toggle, Dropdown, Filter } from '@/components'
import { Events } from '@/mocks'

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
                filterRef.current.classList.add('md:fixed', 'md:top-0', 'md:left-0', 'lg:static',);
            } else
            {
                filterRef.current.classList.remove('md:fixed', 'md:top-[4.5rem]', 'md:left-0', 'lg:static');
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
            <div className='lg:w-4/5 lg:mx-auto w-full flex flex-col px-1 md:flex-row md:justify-end md:mt-16 mb-20'>
                <div className='md:h-screen md:w-[30%] lg:w-1/5' ref={filterRef}>
                    <div className='my-5 px-2 w-full'>
                        <Filter />
                    </div>
                </div>
                <div className='md:w-[70%] lg:w-4/5'>
                    <div className='w-full flex flex-row flex-wrap  '>
                        {
                            Events.map((i, index) =>
                                <div key={index} className='w-1/2 lg:w-1/3 p-1'>
                                    <Card
                                        url={i.url}
                                        image={i.image}
                                        title={i.title}
                                        date={i.date}
                                        description={i.description}
                                        location={i.location}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </main >
    )
}

export default index
