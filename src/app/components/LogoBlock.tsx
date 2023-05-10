"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DateBlock from "./DateBlock";

const LogoBlock = () => {
  return (
    <>
      <div className="mx-4 mt-4 flex items-center">
        <div className="flex w-3/5 justify-between">
          <div className="flex w-full items-center justify-center">
            <Image
              src="/client.png"
              width={150}
              height={60}
              alt="client logo"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <Image
              src="/agency.png"
              width={150}
              height={60}
              alt="client logo"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <Image
              src="/prodco.png"
              width={150}
              height={60}
              alt="client logo"
            />
          </div>
        </div>
        <div className="flex w-2/5">
          <DateBlock />
        </div>
      </div>
    </>
  );
};

export default LogoBlock;
