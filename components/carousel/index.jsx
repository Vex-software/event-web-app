"use client"
import { useState } from "react";
import { Photos } from '@/mocks'
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';

const Carousel = ({ items }) =>
{

    const [activeIndex, setActiveIndex] = useState(0);

    const previousSlide = () =>
    {
        const index = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(index);
    };

    const nextSlide = () =>
    {
        const index = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(index);
    };

    return (
        <div className="relative w-full h-[500px]">
            {
                Photos.map((i, index) =>
                    <div
                        key={index}
                        className={`absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 ease-in-out ${activeIndex === index ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {
                            i.url.map((url, index) => <img src={url.src} alt={i.alt} key={index} className="w-full h-full object-cover" />)
                        }
                    </div>
                )
            }
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none text-4xl ml-2 text-[#ffffff]"
                onClick={previousSlide}
            >
                <MdArrowCircleLeft />
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none text-4xl mr-2 text-[#ffffff]"
                onClick={nextSlide}
            >
                <MdArrowCircleRight />

            </button>
        </div>
    );
};


export default Carousel;
