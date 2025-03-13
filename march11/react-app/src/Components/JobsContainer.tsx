import Job from "./Job";

export default function JobsContainer(props: any) {
  console.log(props);
  return (
    <ol>
      {props.jobs.map((job: any, index: number) => {
        const { company, jobTitle, hourlyWage }: any = job;
        {
          /* Pass data to child component */
        }
        {
          /* To pass object as props, use {{}} */
        }
        return (
          <li key={index}>
            <Job
              company={company}
              jobTitle={jobTitle}
              hourlyWage={hourlyWage}
            />
          </li>
        );
      })}
    </ol>
  );
}
