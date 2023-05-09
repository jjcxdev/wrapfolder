"use client";

import React, { useState, useEffect } from "react";

const CrewBlock = () => {
  return (
    <>
      <div className="flex w-full bg-white pt-1 text-[8px]">
        <div className="flex w-1/6 justify-center border-[0.5px] border-black">
          <input
            type="text"
            className="flex w-full text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="ROLE"
          />
        </div>
        <div className="flex w-1/4 justify-center border-[0.5px] border-black">
          <input
            type="text"
            className="flex w-full  text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="NAME"
          />
        </div>
        <div className="flex w-1/6 justify-center border-[0.5px] border-black">
          <input
            type="text"
            className="flex w-full  text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="CONTACT"
          />
        </div>
        <div className="flex w-1/3 justify-center border-[0.5px] border-black">
          <input
            type="text"
            className="flex w-full  text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="EMAIL"
          />
        </div>
        <div className="flex w-1/12 justify-center border-[0.5px] border-black">
          <input
            type="text"
            className="flex w-full  text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="LOC"
          />
        </div>
        <div className="flex w-1/12 justify-center border-[0.5px] border-black">
          <input
            type="text"
            className="flex w-full text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="CALL"
          />
        </div>
      </div>
    </>
  );
};

export default CrewBlock;
