"use client";
import React, { useState } from "react";
import styles from "./CallSheet.module.css";
import DateBlock from "./components/DateBlock";
import LogoBlock from "./components/LogoBlock";
import CompanyBlock from "./components/CompanyBlock";
import JobBlock from "./components/JobBlock";
import WeatherBlock from "./components/WeatherBlock";
import GridBlock from "./components/GridBlock";
import DetailBlock from "./components/DetailBlock";

const CallSheet = () => {
  const [jobName, setJobName] = useState("");
  return (
    <div className="m-auto mt-8 bg-white">
      <LogoBlock />
      <DateBlock />
      <CompanyBlock />
      <JobBlock setJobName={setJobName} />
      <WeatherBlock />
      <GridBlock />
      <DetailBlock jobName={jobName} />

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
