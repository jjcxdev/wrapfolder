"use client";

import React, { useState, useEffect } from "react";

const NotesBlock = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex justify-center bg-black text-sm font-bold text-white">
          <span className=""> NOTES </span>
        </div>
        <input
          type="text"
          className="flex w-full border-b border-black px-2 text-[10px] placeholder:bg-red-300 placeholder:text-black"
          placeholder="..."
        />
      </div>
    </>
  );
};

export default NotesBlock;
