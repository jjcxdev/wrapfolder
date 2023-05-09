// 'use client';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatepickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="flex w-full cursor-pointer bg-black text-center text-white"
      selected={startDate}
      onChange={(date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      }}
      dateFormat="eeee MMMM d, yyyy"
    />
  );
};

export default DatepickerComponent;
