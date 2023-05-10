"use client";

import React, { useState, useEffect } from "react";
import DepartmentBlock from "./DepartmentBlock";
import CrewBlock from "./CrewBlock";
import TalentBlock from "./TalentBlock";

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
          <div className="flex border border-black text-xs">
            <div className="flex w-1/2 bg-white ">
              <div className="flex w-1/6 justify-center border-r border-gray-400">
                ROLE
              </div>
              <div className="flex w-1/4 justify-center border-r border-gray-400">
                NAME
              </div>
              <div className="flex w-1/6 justify-center border-r border-gray-400">
                CONTACT
              </div>
              <div className="flex w-1/3 justify-center border-r border-gray-400">
                EMAIL
              </div>
              <div className="flex w-1/12 justify-center border-r border-gray-400">
                LOC
              </div>
              <div className="flex w-1/12 justify-center border-r border-black">
                CALL
              </div>
            </div>

            <div className="flex w-1/2  bg-white">
              <div className="flex w-1/5 justify-center border-r border-gray-400">
                ROLE
              </div>
              <div className="flex w-2/5 justify-center border-r border-gray-400">
                NAME
              </div>
              <div className="flex w-1/5 justify-center border-r border-gray-400">
                CONTACT
              </div>
              <div className="flex w-1/5 justify-center">CALL</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-1/2 flex-col">
            <DepartmentBlock />
            <CrewBlock />
          </div>
          <div className="flex w-1/2 flex-col">
            <DepartmentBlock />
            <TalentBlock />
          </div>
        </div>
      </div>
    </>
  );
};

export default GridBlock;
