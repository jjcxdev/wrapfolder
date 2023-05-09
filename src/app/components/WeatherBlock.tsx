"use client";

import React, { useState, useEffect } from "react";

const WeatherBlock = () => {
  return (
    <>
      <div className="m-2">
        <div className="flex w-full flex-col rounded-md border bg-black p-2 ">
          <div className="flex w-full ">
            <div className="flex w-1/3 justify-center pb-1 text-lg font-bold text-white">
              <span className=""> PRODUCTION NUMBERS </span>
            </div>
            <div className="flex w-1/3 justify-center pb-1 text-lg font-bold text-white">
              <span className=""> HOSPITAL </span>
            </div>
            <div className="flex w-1/3 justify-center pb-1 text-lg font-bold text-white">
              <span className=""> WEATHER </span>
            </div>
          </div>

          <div className="flex">
            <div className="flex w-1/3 flex-col items-center justify-center gap-6">
              <div className="flex flex-col gap-1 p-1 text-xs">
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1 font-bold"
                    placeholder="Name"
                  />
                </div>{" "}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 p-1 text-xs">
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1 font-bold"
                    placeholder="Name"
                  />
                </div>{" "}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-1/3 justify-center">
              <div className="flex w-full flex-col gap-1 p-1 text-xs">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1 font-bold"
                    placeholder="Hospital Name"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            <div className="mx-1 flex w-1/3 items-center justify-center rounded-md bg-white">
              <div className=" flex flex-col gap-1 p-1 text-xs">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-between px-2">
                    <div>
                      <img
                        src="80x80.png"
                        alt="Image 2"
                        className="h-[80px] w-[80px]"
                      />
                    </div>
                    <div className="my-2 flex w-1/3 flex-col">
                      <div className="flex flex-col px-2 text-center">
                        <div>CONDITIONS</div>
                        <input
                          type="text"
                          className="w-full items-center justify-center rounded border border-gray-300 px-2 py-1 text-center  text-black"
                          placeholder="Partly Cloudy"
                        />
                        <div>POP</div>
                        <input
                          type="text"
                          className="w-full rounded border border-gray-300 px-2 py-1 text-center text-black"
                          placeholder="100%"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-between px-1 text-center">
                      <div>HIGH</div>
                      <input
                        type="text"
                        className="w-8 items-center justify-center rounded border border-gray-300 px-1 py-1 text-center  text-black"
                        placeholder="35"
                      />
                      <div>LOW</div>
                      <input
                        type="text"
                        className="w-8 rounded border border-gray-300 px-1 py-1 text-center text-black"
                        placeholder="-35"
                      />
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-1 px-2 py-1 text-center">
                    <div>SUNRISE</div>
                    <input
                      type="text"
                      className="w-1/2 items-center justify-center rounded border border-gray-300 px-1 py-1 text-center  text-black"
                      placeholder="05:45"
                    />
                    <div>SUNSET</div>
                    <input
                      type="text"
                      className="w-1/2 rounded border border-gray-300 px-1 py-1 text-center text-black"
                      placeholder="21:00"
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

export default WeatherBlock;
