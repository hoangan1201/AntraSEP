export default function Job({ company, jobTitle, hourlyWage }: any) {
  //can destructure props object in parameter
  return (
    <div>
      <h3>Company: {company}</h3>
      <ul>
        <li>Job Title: {jobTitle}</li>
        <li>Hourly Wage: {hourlyWage} </li>
        <li>
          Wage Rating:{" "}
          <span style={{ color: hourlyWage > 50 ? "green" : "red" }}>
            {hourlyWage > 50 ? "High" : "Low"}
          </span>
        </li>
      </ul>
      {/* ternary operator */}
    </div>
  );
}
