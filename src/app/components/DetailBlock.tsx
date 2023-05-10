"use client";

import React, { useState, useEffect } from "react";

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
      <div className="m-2">
        <div className="border border-black">
          <div className="flex w-full  bg-black">
            <div className="flex w-full justify-center text-lg font-bold text-white">
              <span className=""> INVOICE DETAILS </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 p-1 text-center text-base">
            <div className="flex items-center">
              <span className="flex align-baseline font-bold">JOB NAME:</span>
              <span className="">&nbsp;{jobName}</span>
            </div>

            <div className="flex items-center">
              <span className="flex align-baseline font-bold">
                DOCKET NUMBER:
              </span>
              <span className="">&nbsp;{docketName}</span>
            </div>

            <div className="flex flex-col items-center py-4 text-center">
              <span className="flex align-baseline font-bold">BILL TO:</span>
              <span className="flex justify-center">&nbsp;{companyName}</span>
              <span className="flex justify-center">
                &nbsp;{companyAddress}
              </span>
            </div>

            <div className="flex w-full items-center justify-center align-middle">
              <span className="flex w-full justify-end align-baseline font-bold">
                Please send your invoice to
              </span>
              <input
                type="text"
                className=" w-full px-2 py-1 placeholder:bg-red-300 placeholder:text-black"
                placeholder="email address"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBlock;
