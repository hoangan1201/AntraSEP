export default function Job({ company, jobTitle, hourlyWage }:any) {
    //can destructure props object in parameter
  return (
    <div>
      <h3>Company: {company}</h3>
      <p>Job Title: {jobTitle}</p>
      <p>Hourly Wage: {hourlyWage} </p>
      <p>Wage Rating: {hourlyWage > 50 ? "High" : "Low"}</p> 
      {/* ternary operator */}
    </div>
  );
}
