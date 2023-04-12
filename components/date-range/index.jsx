"use client"
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function index()
{
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div className='border-2 border-[#f0f0f0] w-full py-2 px-2 rounded-lg'>

            <DatePicker
                className='border-none text-base active:outline-none active:border-none focus:outline-none'
                placeholderText='Select a date range'
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) =>
                {
                    setDateRange(update);
                }}
                isClearable={true}
            />
        </div>
    );
}

export default index;
