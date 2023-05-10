"use client";

import React, { useState, useEffect } from "react";

const TalentBlock = () => {
  return (
    <>
      <div className="my-1 flex w-full border border-black bg-white text-[8px]">
        <div className="flex w-1/5 justify-center border-r border-black">
          <input
            type="text"
            className="flex w-full text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="ROLE"
          />
        </div>
        <div className="flex w-2/5 justify-center border-r border-black">
          <input
            type="text"
            className="flex w-full  text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="NAME"
          />
        </div>
        <div className="flex w-1/5 justify-center border-r border-black">
          <input
            type="text"
            className="flex w-full  text-center placeholder:bg-red-300 placeholder:text-black"
            placeholder="CONTACT"
          />
        </div>
        <div className="flex w-1/5 justify-center">
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

export default TalentBlock;
