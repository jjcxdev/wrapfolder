"use client";
import React, { useState } from "react";
import LogoBlock from "./components/LogoBlock";
import CompanyBlock from "./components/CompanyBlock";
import JobBlock from "./components/JobBlock";
import WeatherBlock from "./components/WeatherBlock";
import GridBlock from "./components/GridBlock";
import DetailBlock from "./components/DetailBlock";

const CallSheet = () => {
  const [jobName, setJobName] = useState("");
  const [docketName, setDocketName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  return (
    <div className="m-auto mt-8 rounded-lg bg-white">
      <LogoBlock />
      <CompanyBlock
        setCompanyName={setCompanyName}
        setCompanyAddress={setCompanyAddress}
      />
      <JobBlock setJobName={setJobName} setDocketName={setDocketName} />
      <WeatherBlock />
      <GridBlock />
      <DetailBlock
        jobName={jobName}
        docketName={docketName}
        companyName={companyName}
        companyAddress={companyAddress}
      />
    </div>
  );
};

export default CallSheet;
