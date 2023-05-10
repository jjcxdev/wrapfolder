"use client";

import React, { useState, useEffect } from "react";

const WeatherBlock = () => {
  return (
    <>
      <div className="mx-4">
        <div className="flex w-full flex-col border border-black ">
          <div className="flex w-full ">
            <div className="flex w-1/3 justify-center bg-black text-sm font-bold text-white">
              <span className=""> PRODUCTION NUMBERS </span>
            </div>
            <div className="flex w-1/3 justify-center bg-black text-sm font-bold text-white">
              <span className=""> HOSPITAL </span>
            </div>
            <div className="flex w-1/3 justify-center bg-black text-sm font-bold text-white">
              <span className=""> WEATHER </span>
            </div>
          </div>

          <div className="flex">
            <div className="flex w-1/3 flex-col items-center justify-start px-1">
              <div className="flex flex-col gap-1 p-1 text-[10px]">
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded px-2 font-bold placeholder:bg-red-300 placeholder:text-black"
                    placeholder="Name"
                  />
                </div>{" "}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded px-2 placeholder:bg-red-300 placeholder:text-black"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="flex flex-col px-1 text-[10px]">
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                    placeholder="Set Cell"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded px-2  placeholder:bg-red-300 placeholder:text-black"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-1/3">
              <div className="flex w-full flex-col justify-start gap-1 border-x border-black p-1 px-2 text-[10px]">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full rounded px-2 font-bold placeholder:bg-red-300 placeholder:text-black"
                    placeholder="Hospital Name"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full rounded px-2  placeholder:bg-red-300 placeholder:text-black"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full rounded px-2  placeholder:bg-red-300 placeholder:text-black"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-1/3 items-center justify-center rounded-md bg-white">
              <div className=" flex flex-col gap-1 text-[10px]">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-between px-2">
                    <div>
                      <img
                        src="80x80.png"
                        alt="Image 2"
                        className="h-[60px] w-[60px]"
                      />
                    </div>
                    <div className="flex w-1/3 flex-col">
                      <div className="flex flex-col text-center">
                        <div>CONDITIONS</div>
                        <input
                          type="text"
                          className="w-full items-center justify-center text-center  text-black"
                          placeholder="Partly Cloudy"
                        />
                        <div className="flex justify-around">
                          <div className="flex ">
                            <div className="flex font-black">H</div>
                            <div className="flex">
                              <input
                                type="text"
                                className="w-[15px] text-end text-black"
                                placeholder="35"
                              />
                              &deg;C
                            </div>
                          </div>

                          <div className="flex">
                            <div>L</div>
                            <div className="flex items-center justify-center gap-[1px]">
                              <input
                                type="text"
                                className="w-[15px] text-end text-black"
                                placeholder="-35"
                              />
                              &deg;C
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end px-1">
                      <div className="flex items-center justify-end gap-1">
                        <div>POP</div>
                        <input
                          type="text"
                          className="w-[25px] text-black"
                          placeholder="100%"
                        />
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div>SUNRISE</div>
                        <input
                          type="text"
                          className="w-[25px] text-black"
                          placeholder="05:45"
                        />
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div>SUNSET</div>
                        <input
                          type="text"
                          className="w-[25px] text-black"
                          placeholder="21:00"
                        />
                      </div>
                    </div>
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

export default WeatherBlock;
