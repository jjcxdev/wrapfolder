"use client";

import React, { useState, useEffect } from "react";

type JobBlockProps = {
  setJobName: React.Dispatch<React.SetStateAction<string>>;
  setDocketName: React.Dispatch<React.SetStateAction<string>>;
};

const JobBlock: React.FC<JobBlockProps> = ({ setJobName, setDocketName }) => {
  const [jobName, setJobNameLocal] = useState("");
  const [docketName, setDocketNameLocal] = useState("");

  const handleJobNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJobNameLocal(event.target.value);
    setJobName(event.target.value);
  };
  const handleDocketNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDocketNameLocal(event.target.value);
    setDocketName(event.target.value);
  };

  return (
    <>
      <div className="mx-2">
        <div className="flex w-full flex-col">
          <div className="flex ">
            <div className="flex w-1/3 flex-col justify-start px-2 text-[10px]">
              <div className="flex h-full flex-col justify-center gap-1 ">
                <div className="flex items-center justify-end gap-4 bg-black">
                  <span className="flex whitespace-nowrap align-baseline font-bold text-white ">
                    JOB NAME
                  </span>
                  <input
                    type="text"
                    className="w-40 border border-black  px-2 placeholder:bg-red-300 placeholder:text-black"
                    value={jobName}
                    onChange={handleJobNameInputChange}
                    placeholder="..."
                  />
                </div>
                <div className="flex items-center justify-end gap-4 bg-black">
                  <span className="flex whitespace-nowrap align-baseline font-bold text-white ">
                    DOCKET
                  </span>
                  <input
                    type="text"
                    className="w-40 border border-black  px-2 placeholder:bg-red-300 placeholder:text-black"
                    value={docketName}
                    onChange={handleDocketNameInputChange}
                    placeholder="..."
                  />
                </div>
                <div className="flex items-center justify-end gap-4 bg-black">
                  <span className="flex whitespace-nowrap align-baseline font-bold text-white ">
                    CAMERA
                  </span>
                  <input
                    type="text"
                    className="w-40 border border-black  px-2 placeholder:bg-red-300 placeholder:text-black"
                    placeholder="..."
                  />
                </div>
                <div className="flex items-center justify-end gap-4 bg-black">
                  <span className="flex whitespace-nowrap align-baseline font-bold text-white ">
                    SYNC / MOS
                  </span>
                  <input
                    type="text"
                    className="w-40 border border-black  px-2 placeholder:bg-red-300 placeholder:text-black"
                    placeholder="..."
                  />
                </div>
              </div>
            </div>

            <div className="flex w-1/3 flex-col  justify-center  px-2 text-sm">
              <div className="border border-black">
                <div className="flex flex-col items-center bg-black">
                  <span className="flex whitespace-nowrap align-baseline font-bold text-white">
                    PRODUCTION CALL TIME
                  </span>
                  <input
                    type="text"
                    className="flex w-full px-2 text-center font-bold text-black placeholder:bg-red-300 placeholder:text-black"
                    placeholder="07:00"
                  />
                </div>
                <div className="flex flex-col items-center bg-black">
                  <span className="flex whitespace-nowrap align-baseline font-bold text-white">
                    CREW CALL TIME
                  </span>
                  <input
                    type="text"
                    className="flex w-full px-2 text-center font-bold text-black placeholder:bg-red-300 placeholder:text-black"
                    placeholder="08:00"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-1/3 flex-col justify-start px-2 text-[10px]">
              <div className="flex flex-col items-center border border-black">
                <span className="flex w-full justify-center bg-black align-baseline text-xs font-bold text-white ">
                  LOCATIONS
                </span>
                <div className="flex flex-col items-center justify-end gap-1 py-2">
                  <div className="flex items-center justify-end gap-2">
                    <span className="flex whitespace-nowrap  align-baseline font-bold ">
                      LOC 1
                    </span>
                    <input
                      type="text"
                      className="w-48  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="..."
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="flex whitespace-nowrap align-baseline font-bold ">
                      LOC 2
                    </span>
                    <input
                      type="text"
                      className="w-48  px-2 placeholder:bg-red-300 placeholder:text-black "
                      placeholder="..."
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="flex whitespace-nowrap align-baseline font-bold ">
                      LOC 3
                    </span>
                    <input
                      type="text"
                      className="w-48  px-2 placeholder:bg-red-300 placeholder:text-black "
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
