"use client";

import React, { useState, useEffect } from "react";

const DepartmentBlock = () => {
  return (
    <>
      <div className="flex w-full justify-center bg-black text-xs text-white ">
        <input
          type="text"
          className="flex bg-black text-center placeholder:bg-red-300 placeholder:text-black"
          placeholder="DEPARTMENT TITLE"
        />
      </div>
    </>
  );
};

export default DepartmentBlock;
