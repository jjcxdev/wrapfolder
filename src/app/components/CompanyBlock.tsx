"use client";

import React, { useState, useEffect } from "react";

type CompanyBlockProps = {
  setCompanyName: React.Dispatch<React.SetStateAction<string>>;
  setCompanyAddress: React.Dispatch<React.SetStateAction<string>>;
};

const CompanyBlock: React.FC<CompanyBlockProps> = ({
  setCompanyName,
  setCompanyAddress,
}) => {
  const [companyName, setCompanyNameLocal] = useState("");
  const [companyAddress, setCompanyAddressLocal] = useState("");

  const handleCompanyNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyNameLocal(event.target.value);
    setCompanyName(event.target.value);
  };
  const handleCompanyAddressInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyAddressLocal(event.target.value);
    setCompanyAddress(event.target.value);
  };

  return (
    <>
      <div className="mx-2">
        <div className="flex w-full flex-col p-2 ">
          <div className="border border-black">
            <div className="flex w-full  bg-black">
              <div className="flex w-1/3 justify-center text-sm font-bold text-white">
                <span className=""> CLIENT </span>
              </div>
              <div className="flex w-1/3 justify-center text-sm font-bold text-white">
                <span className=""> AGENCY </span>
              </div>
              <div className="flex w-1/3 justify-center text-sm font-bold text-white">
                <span className=""> PRODUCTION COMPANY </span>
              </div>
            </div>

            <div className="flex">
              <div className="flex w-1/3 items-center justify-center">
                <div className="flex flex-col gap-1 p-1 text-[10px]">
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold"></span>
                    <input
                      type="text"
                      className="w-full  px-2 font-bold placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Company Name"
                    />
                  </div>{" "}
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold"></span>
                    <input
                      type="text"
                      className="w-full  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Address"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12  px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12  px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12 px-2 font-bold  uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-1/3 items-center justify-center">
                <div className="flex flex-col gap-1 p-1 text-[10px]">
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold"></span>
                    <input
                      type="text"
                      className="w-full  px-2 font-bold placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold"></span>
                    <input
                      type="text"
                      className="w-full  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Address"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12  px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12  px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12  px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-1/3 items-center justify-center">
                <div className="flex flex-col gap-1 p-1 text-[10px]">
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold"></span>
                    <input
                      type="text"
                      className="w-full  px-2 font-bold placeholder:bg-red-300 placeholder:text-black"
                      value={companyName}
                      onChange={handleCompanyNameInputChange}
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="flex align-baseline font-bold"></span>
                    <input
                      type="text"
                      className="w-full  px-2 placeholder:bg-red-300 placeholder:text-black"
                      value={companyAddress}
                      onChange={handleCompanyAddressInputChange}
                      placeholder="Address"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12  px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12  px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-5/12  px-2 font-bold uppercase placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      className="w-7/12  px-2 placeholder:bg-red-300 placeholder:text-black"
                      placeholder="Name"
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

export default CompanyBlock;
