"use client"
import React, { useState } from "react";
import { Button, Input } from '@/components'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from 'react-icons/ai';

function SearchBar() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div>
      {/* SEARCH BAR */}
      <div>
        <Input name="name" width="100%" type="text" id="name" placeholder="Search by events, name, location, and more" />
      </div>

      <div className="w-full font-bold relative">
        <DatePicker
          className="border-2 border-[#0000006c] rounded-lg px-8 py-1 text-xl w-full"
          placeholderText="Select Date"
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
        />
        <AiOutlineCalendar className="absolute top-[8px] left-[8px] text-[1.3rem]"></AiOutlineCalendar>
      </div>

    </div>
  )

}

export default SearchBar