"use client";

import React, { useState, useEffect } from "react";
import DepartmentBlock from "./DepartmentBlock";
import CrewBlock from "./CrewBlock";

const GridBlock = () => {
  return (
    <>
      <div className="m-2">
        <div className="flex w-full flex-col pb-1 ">
          <div className="flex w-full ">
            <div className="flex w-1/2 justify-center bg-black text-lg font-bold text-white">
              <span className=""> PRODUCTION </span>
            </div>
            <div className="flex w-1/2 justify-center bg-black text-lg font-bold text-white">
              <span className=""> TALENT / CLIENT / AGENCY / VENDORS </span>
            </div>
          </div>
          <div className="flex text-xs">
            <div className="flex w-1/2 bg-white pt-1">
              <div className="flex w-1/6 justify-center">ROLE</div>
              <div className="flex w-1/4 justify-center">NAME</div>
              <div className="flex w-1/6 justify-center">CONTACT</div>
              <div className="flex w-1/3 justify-center">EMAIL</div>
              <div className="flex w-1/12 justify-center">LOC</div>
              <div className="flex w-1/12 justify-center">CALL</div>
            </div>
            <div className="mx-2 w-[1px] bg-black"></div>
            <div className="flex w-1/2 bg-white pt-1">
              <div className="flex w-1/5 justify-center">ROLE</div>
              <div className="flex w-2/5 justify-center">NAME</div>
              <div className="flex w-1/5 justify-center">CONTACT</div>
              <div className="flex w-1/5 justify-center">CALL</div>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col">
          <DepartmentBlock />
          <CrewBlock />
        </div>
      </div>
    </>
  );
};

export default GridBlock;
