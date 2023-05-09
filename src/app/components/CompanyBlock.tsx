"use client";

import React, { useState, useEffect } from "react";

const CompanyBlock = () => {
  return (
    <>
      <div className="m-2">
        <div className="flex w-full flex-col rounded-md border bg-black p-2 ">
          <div className="flex w-full ">
            <div className="flex w-1/3 justify-center pb-1 text-lg font-bold text-white">
              <span className=""> CLIENT </span>
            </div>
            <div className="flex w-1/3 justify-center pb-1 text-lg font-bold text-white">
              <span className=""> AGENCY </span>
            </div>
            <div className="flex w-1/3 justify-center pb-1 text-lg font-bold text-white">
              <span className=""> PRODUCTION COMPANY </span>
            </div>
          </div>

          <div className="flex">
            <div className="flex w-1/3 items-center justify-center">
              <div className="flex flex-col gap-1 p-1 text-xs">
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1 font-bold"
                    placeholder="Company Name"
                  />
                </div>{" "}
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-1/3 items-center justify-center">
              <div className="flex flex-col gap-1 p-1 text-xs">
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1 font-bold"
                    placeholder="Company Name"
                  />
                </div>
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-1/3 items-center justify-center">
              <div className="flex flex-col gap-1 p-1 text-xs">
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1 font-bold"
                    placeholder="Company Name"
                  />
                </div>
                <div className="flex items-center">
                  <span className="flex align-baseline font-bold"></span>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-2 py-1"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-5/12 rounded border border-gray-300 px-2 py-1 font-bold uppercase"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="w-7/12 rounded border border-gray-300 px-2 py-1"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyBlock;
