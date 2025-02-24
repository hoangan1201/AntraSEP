const employees = [
  {
    name: "Alice Johnson",
    age: 25,
    email: "alice@example.com",
    hourlySalary: 35.5,
  },
  {
    name: "Bob Smith",
    age: 30,
    email: "bob@example.com",
    hourlySalary: 28.75,
  },
  {
    name: "Charlie Davis",
    age: 22,
    email: "charlie@example.com",
    hourlySalary: 20.0,
  },
  {
    name: "David Lee",
    age: 28,
    email: "david@example.com",
    hourlySalary: 32.4,
  },
  {
    name: "Emma Brown",
    age: 35,
    email: "emma@example.com",
    hourlySalary: 40.25,
  },
  {
    name: "Frank Harris",
    age: 27,
    email: "frank@example.com",
    hourlySalary: 26.3,
  },
  {
    name: "Grace Wilson",
    age: 31,
    email: "grace@example.com",
    hourlySalary: 37.8,
  },
  {
    name: "Henry Martinez",
    age: 29,
    email: "henry@example.com",
    hourlySalary: 29.5,
  },
];

//Filter Method
const filtered = employees.filter((emp) => emp.age > 27);
console.log("List of employees who are older than 27 and their info: ", filtered);

//Map Method
const mapped = employees.map((emp) => emp.email);
console.log("Emails: ", mapped);


//Find Method: find employee whose name is Emma
const foundEmp = employees.find((emp) => emp.name.includes("Emma"))
if (foundEmp) console.log("Employee found: ", foundEmp);
else console.log("Employee not found");

//forEach Method: Print out name and hourly wage
console.log("Employee name and hourly wage:");
employees.forEach((emp) => console.log(emp.name,": $",emp.hourlySalary));

//some Method:
const olderThan30 = employees.some((emp) => emp.age > 30);
console.log("Are there anyone older than 30:", olderThan30);

//every Method: 
const youngerThan35 = employees.every((emp) => emp.age <35);
console.log("Is everyone less than 35 years old?", youngerThan35);

//reduce Method
const totalHourly = employees.reduce((total, emp) => {
    return total + emp.hourlySalary
}, 0);
console.log("Total hourly wage:", totalHourly);


//include Method
const arr = [1,2,3,5,8,13,21];
console.log("Includes 4?", arr.includes(4));


