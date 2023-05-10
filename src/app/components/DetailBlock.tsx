"use client";

import React, { useState, useEffect } from "react";
import NotesBlock from "./NotesBlock";

type DetailBlockProps = {
  jobName: string;
  docketName: string;
  companyName: string;
  companyAddress: string;
};

const DetailBlock: React.FC<DetailBlockProps> = ({
  jobName,
  docketName,
  companyName,
  companyAddress,
}) => {
  return (
    <>
      <div className="mx-4 mb-4">
        <div className="flex border border-black">
          <div className="flex w-1/3 flex-col border-r border-black">
            <div className="flex justify-center bg-black text-sm font-bold text-white">
              <span className=""> INVOICE DETAILS </span>
            </div>

            <div className="flex w-full flex-col gap-1 p-1 text-[10px]">
              <div className="flex items-start">
                <span className="flex align-baseline font-bold">JOB NAME:</span>
                <span className="">&nbsp;{jobName}</span>
              </div>

              <div className="flex items-center">
                <span className="flex align-baseline font-bold">
                  DOCKET NUMBER:
                </span>
                <span className="">&nbsp;{docketName}</span>
              </div>

              <div className="flex flex-col">
                <span className="flex align-baseline font-bold">BILL TO:</span>
                <span className="flex">&nbsp;{companyName}</span>
                <span className="flex">&nbsp;{companyAddress}</span>
              </div>

              <div className="flex w-full items-center">
                <span className="flex whitespace-nowrap align-baseline font-bold">
                  Please send your invoice to
                </span>
                <input
                  type="text"
                  className="ml-[2px] w-full font-bold placeholder:bg-red-300 placeholder:text-black"
                  placeholder="email address"
                />
              </div>
            </div>
          </div>
          <div className="flex w-2/3">
            <NotesBlock />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBlock;
