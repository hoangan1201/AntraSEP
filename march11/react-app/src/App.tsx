// import { useState } from "react";

import Header from "./Components/Header";
import JobsContainer from "./Components/JobsContainer";
import "./App.css";

function App() {
  type JobType = {
    company: string;
    jobTitle: string;
    hourlyWage: number;
  };

  const jobsList: JobType[] = [
    { company: "Google", jobTitle: "Software Engineer", hourlyWage: 60 },
    { company: "Amazon", jobTitle: "Data Analyst", hourlyWage: 50 },
    { company: "Microsoft", jobTitle: "Cloud Engineer", hourlyWage: 55 },
    { company: "Tesla", jobTitle: "Mechanical Engineer", hourlyWage: 45 },
    { company: "Meta", jobTitle: "Frontend Developer", hourlyWage: 58 },
  ];

  return (
    <div>
      <Header/>
      <JobsContainer jobs={jobsList}/>
    </div>
  );
}

export default App;
