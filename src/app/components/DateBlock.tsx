"use client";
import React, { useState, useEffect } from "react";
import DatepickerComponent from "./DatepickerComponent";

const DateBlock = () => {
  const [isClient, setIsClient] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex w-full flex-col items-center border border-black">
      <div className="flex items-center justify-center">
        <span className="text-xl"> Day </span>
        <input
          type="text"
          className="w-10 text-center text-2xl font-bold placeholder:bg-red-300 placeholder:text-black"
          placeholder="..."
        />
        <span className="mx-1 text-xl"> of </span>
        <input
          type="text"
          className="w-10 text-center text-2xl font-bold placeholder:bg-red-300 placeholder:text-black"
          placeholder="..."
        />
      </div>

      <div className="flex w-full rounded-md bg-black text-lg">
        {isClient && <DatepickerComponent />}
      </div>
    </div>
  );
};

export default DateBlock;
