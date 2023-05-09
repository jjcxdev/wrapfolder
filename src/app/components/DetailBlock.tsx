"use client";

import React, { useState, useEffect } from "react";

type DetailBlockProps = {
  jobName: string;
};

const DetailBlock: React.FC<DetailBlockProps> = ({ jobName }) => {
  return (
    <>
      <div className="m-2">
        <div className="flex w-full flex-col p-2 ">
          <div className="border border-black">
            <div className="flex w-full  bg-black">
              <div className="flex w-full justify-center text-lg font-bold text-white">
                <span className=""> INVOICE DETAILS </span>
              </div>
            </div>

            <div className="flex">
              <div className="flex w-full items-center justify-center">
                <div className="flex flex-col gap-1 p-1 text-xs">
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold">
                      Job Name
                    </span>
                    <span className="text-xl">{jobName}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold">
                      Docket Number
                    </span>
                    <input
                      type="text"
                      className="rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Docket Number"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold">
                      Bill to:
                    </span>
                    <input
                      type="text"
                      className="rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Docket Number"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold">
                      Please send your invoice to
                    </span>
                    <input
                      type="text"
                      className="rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Docket Number"
                    />
                  </div>
                  <span>Thanks!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBlock;
