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
    <div className="flex w-full items-center">
      <div className="flex w-1/3 justify-center text-3xl">
        <h2>CALL SHEET</h2>
      </div>

      <div className="flex w-1/3 items-center justify-center">
        <span className="mx-1 text-3xl"> Day </span>
        <input
          type="text"
          className="w-20  px-2 py-1 text-center text-6xl font-bold placeholder:bg-red-300 placeholder:text-black"
          placeholder="..."
        />
        <span className="mx-1 text-3xl"> of </span>
        <input
          type="text"
          className="w-20  px-2 py-1 text-center text-6xl font-bold placeholder:bg-red-300 placeholder:text-black"
          placeholder="..."
        />
      </div>

      <div className="m-2 flex w-1/3 rounded-md border bg-black px-2 text-lg">
        {isClient && <DatepickerComponent />}
      </div>
    </div>
  );
};

export default DateBlock;
