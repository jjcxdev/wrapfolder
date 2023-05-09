"use client";
import React from "react";
import styles from "./CallSheet.module.css";
import DateBlock from "./components/DateBlock";
import LogoBlock from "./components/LogoBlock";
import CompanyBlock from "./components/CompanyBlock";
import JobBlock from "./components/JobBlock";
import WeatherBlock from "./components/WeatherBlock";

const CallSheet = () => {
  return (
    <div className="m-auto mt-8 bg-white">
      <LogoBlock />
      <DateBlock />
      <CompanyBlock />
      <JobBlock />
      <WeatherBlock />

      <div className="flex w-full ">
        <div className="flex w-1/2 flex-col justify-center bg-black py-1 text-[12px] font-bold text-white">
          <span className="flex justify-center text-center"> PRODUCTION </span>
          <div className="flex justify-around bg-zinc-700 text-[8px]">
            <div>ROLE</div>
            <div>NAME</div>
            <div>CONTACT</div>
            <div>EMAIL</div>
            <div>LOC</div>
            <div>CALL</div>
          </div>
          <div className="flex max-w-fit text-[7px]">
            <input
              type="text"
              className="border border-gray-300 px-1 py-1 text-center text-black"
              placeholder="Camera Operator"
            />
            <input
              type="text"
              className=" border border-gray-300 px-1 py-1 text-center text-black"
              placeholder="John Doe"
            />
            <input
              type="text"
              className="border border-gray-300 px-1 py-1 text-center text-black"
              placeholder="555.555.5555"
            />
            <input
              type="text"
              className="border border-gray-300 px-1 py-1 text-center text-black"
              placeholder="email@email.com"
            />
            <input
              type="text"
              className="border border-gray-300 px-1 py-1 text-center text-black"
              placeholder="1"
            />
            <input
              type="text"
              className="border border-gray-300 px-1 py-1 text-center text-black"
              placeholder="07:00"
            />
          </div>
        </div>
        <div className="flex w-1/2 justify-center bg-black py-1 text-[12px] font-bold text-white">
          <span className=""> TALENT / CLIENT / AGENCY / VENDORS </span>
        </div>
      </div>

      <div className="h-3 w-full bg-neutral-400 ">
        <hr />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2>Product</h2>
        </div>
        <div className={styles.column}>
          <h2>Call Time</h2>
        </div>
        <div className={styles.column}>
          <h2>Location</h2>
        </div>
      </div>
      <div className="h-3 w-full bg-neutral-400 ">
        <hr />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <p>Product details</p>
        </div>
        <div className={styles.column}>
          <p>Call time details</p>
        </div>
        <div className={styles.column}>
          <p>Location details</p>
        </div>
      </div>
      <div className="h-3 w-full bg-neutral-400 ">
        <hr />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2>Production Numbers</h2>
        </div>
        <div className={styles.column}>
          <h2>Hospital</h2>
        </div>
        <div className={styles.column}>
          <h2>Weather</h2>
        </div>
      </div>
      <div className="h-3 w-full bg-neutral-400 ">
        <hr />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <p>Production numbers details</p>
        </div>
        <div className={styles.column}>
          <p>Hospital details</p>
        </div>
        <div className={styles.column}>
          <p>Weather details</p>
        </div>
      </div>
      <div className="h-3 w-full bg-neutral-400 ">
        <hr />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2>Production</h2>
        </div>
        <div className={styles.column}>
          <h2>Agency</h2>
        </div>
      </div>
      <div className="h-3 w-full bg-neutral-400 ">
        <hr />
      </div>
      <div className={styles.emptyRow} />
      <div className={styles.emptyRow} />
      <div className="h-3 w-full bg-neutral-400 ">
        <hr />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2>Payment Info</h2>
          <p>Payment details go here</p>
        </div>
      </div>
    </div>
  );
};

export default CallSheet;
