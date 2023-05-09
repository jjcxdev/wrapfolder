"use client";

import React, { useState, useEffect } from "react";

const LogoBlock = () => {
  return (
    <>
      <div className="m-2 flex rounded-md border py-2">
        <div className="flex w-1/3 items-center justify-center">
          <img src="client.png" alt="Client Logo" className="" />
        </div>
        <div className="flex w-1/3 items-center justify-center">
          <img src="agency.png" alt="Agency Logo" className="" />
        </div>
        <div className="flex w-1/3 items-center justify-center">
          <img src="prodco.png" alt="Production Company Logo" className="" />
        </div>
      </div>
    </>
  );
};

export default LogoBlock;
