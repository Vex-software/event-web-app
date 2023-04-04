"use client"
import { useState } from "react";
import { Photos } from '@/mocks'

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
        <div className="relative">
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
                className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-l-md focus:outline-none"
                onClick={previousSlide}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-r-md focus:outline-none"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </div>
    );
};


export default Carousel;
