export default function Job({ company, jobTitle, hourlyWage }: any) {
  //can destructure props object in parameter
  return (
    <div>
      <h3>Company: {company}</h3>
      <p>Job Title: {jobTitle}</p>
      <p>Hourly Wage: {hourlyWage} </p>
      <p>
        Wage Rating:{" "}
        <span style={{ color: hourlyWage > 50 ? "green" : "red" }}>
          {hourlyWage > 50 ? "High" : "Low"}
        </span>
      </p>
      {/* ternary operator */}
    </div>
  );
}
