// import { useState } from "react";
import Job from "./Components/Job";
import "./App.css";

function App() {
  type JobType = {
    company: string;
    jobTitle: string;
    hourlyWage: number;
  };

  const jobList: JobType[] = [
    { company: "Google", jobTitle: "Software Engineer", hourlyWage: 60 },
    { company: "Amazon", jobTitle: "Data Analyst", hourlyWage: 50 },
    { company: "Microsoft", jobTitle: "Cloud Engineer", hourlyWage: 55 },
    { company: "Tesla", jobTitle: "Mechanical Engineer", hourlyWage: 45 },
    { company: "Meta", jobTitle: "Frontend Developer", hourlyWage: 58 },
  ];

  return <div>
    {jobList.map((job: JobType, index: number) => {
      const {company, jobTitle, hourlyWage}:any = job;
      return (
        <ul>
          <Job company={company} jobTitle={jobTitle} hourlyWage={hourlyWage} key={index}/>
          {/* Pass data to child component */}
        </ul>
      )
    })}
  </div>;
}

export default App;
