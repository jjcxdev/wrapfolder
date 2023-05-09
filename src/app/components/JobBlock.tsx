"use client";

import React, { useState, useEffect } from "react";

type JobBlockProps = {
  setJobName: React.Dispatch<React.SetStateAction<string>>;
};

const JobBlock: React.FC<JobBlockProps> = ({ setJobName }) => {
  const [jobName, setJobNameLocal] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobNameLocal(event.target.value);
    setJobName(event.target.value);
  };

  return (
    <>
      <div className="m-2">
        <div className="flex w-full flex-col">
          <div className="flex">
            <div className="flex w-1/3 flex-col justify-center gap-2  px-2 text-xs">
              <div className="border border-black p-2">
                <div className="flex items-center justify-end gap-2">
                  <span className="flex whitespace-nowrap align-baseline font-bold ">
                    PRODUCT
                  </span>
                  <input
                    type="text"
                    className="w-40 rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black"
                    value={jobName}
                    onChange={handleInputChange}
                    placeholder="..."
                  />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="flex whitespace-nowrap align-baseline font-bold ">
                    JOB NAME
                  </span>
                  <input
                    type="text"
                    className="w-40 rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black "
                    placeholder="..."
                  />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="flex whitespace-nowrap align-baseline font-bold ">
                    CAMERA
                  </span>
                  <input
                    type="text"
                    className="w-40 rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black "
                    placeholder="..."
                  />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="flex whitespace-nowrap align-baseline font-bold ">
                    SYNC / MOS
                  </span>
                  <input
                    type="text"
                    className="w-40 rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black "
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div className="flex w-1/3 flex-col justify-center  bg-black px-2 text-lg">
              <div className="flex flex-col items-center pb-2">
                <span className="flex whitespace-nowrap pb-2 align-baseline font-bold text-white">
                  PRODUCTION CALL TIME
                </span>
                <input
                  type="text"
                  className="flex w-full rounded px-2 py-1 text-center font-bold text-black placeholder:bg-red-300 placeholder:text-black"
                  placeholder="07:00"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="flex whitespace-nowrap pb-2 align-baseline font-bold text-white">
                  CREW CALL TIME
                </span>
                <input
                  type="text"
                  className="flex w-full rounded px-2 py-1 text-center font-bold text-black placeholder:bg-red-300 placeholder:text-black"
                  placeholder="08:00"
                />
              </div>
            </div>

            <div className="flex w-1/3 flex-col p-2 text-xs">
              <div className="flex flex-col items-center border border-black">
                <span className="flex w-full justify-center bg-black py-1 align-baseline text-xs font-bold text-white ">
                  LOCATIONS
                </span>
                <div className="flex flex-col items-center justify-end gap-2 py-1">
                  <div className="flex items-center justify-end gap-2">
                    <span className="flex whitespace-nowrap  align-baseline font-bold ">
                      LOC 1
                    </span>
                    <input
                      type="text"
                      className="w-48 rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="..."
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="flex whitespace-nowrap align-baseline font-bold ">
                      LOC 2
                    </span>
                    <input
                      type="text"
                      className="w-48 rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black "
                      placeholder="..."
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="flex whitespace-nowrap align-baseline font-bold ">
                      LOC 3
                    </span>
                    <input
                      type="text"
                      className="w-48 rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black "
                      placeholder="..."
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="flex whitespace-nowrap align-baseline font-bold ">
                      LOC 4
                    </span>
                    <input
                      type="text"
                      className="w-48 rounded border border-gray-300 px-2 py-1 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobBlock;
