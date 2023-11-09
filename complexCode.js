// filename: complexCode.js

/*
  Complex JavaScript Code
  This script demonstrates a complex implementation using various concepts and techniques.
  Description: This code manipulates an array of objects representing employees, filters them based on certain criteria,
  and performs various calculations and operations on the filtered employees' data.
  Enjoy!
*/

// Employee Class Definition
class Employee {
  constructor(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }
}

// Array of Employee objects
const employees = [
  new Employee("John Doe", 30, "Manager", 50000),
  new Employee("Jane Smith", 25, "Developer", 40000),
  new Employee("Michael Johnson", 35, "Analyst", 45000),
  new Employee("Sarah Davis", 28, "Developer", 42000),
  new Employee("Thomas Wilson", 32, "Designer", 38000),
  new Employee("Emily Brown", 27, "Developer", 41000),
  // ... more employees can be added here
];

// Filter employees by position (e.g., Developer)
const filteredEmployees = employees.filter(employee => employee.position === "Developer");

// Calculate total salary of filtered employees
const totalSalary = filteredEmployees.reduce((sum, employee) => sum + employee.salary, 0);

// Obtain average age of filtered employees
const averageAge =
  filteredEmployees.reduce((sum, employee) => sum + employee.age, 0) / filteredEmployees.length;

// Sort filtered employees by name (ascending)
const sortedEmployees = filteredEmployees.sort((a, b) => a.name.localeCompare(b.name));

// Display the results
console.log("Filtered Employees: ");
filteredEmployees.forEach(employee => {
  console.log(`Name: ${employee.name}, Age: ${employee.age}, Position: ${employee.position}, Salary: ${employee.salary}`);
});

console.log("Total Salary: $", totalSalary);
console.log("Average Age: ", averageAge);
console.log("Sorted Employees: ");
sortedEmployees.forEach(employee => console.log(employee.name));

// ... additional complex code can follow to further manipulate and analyze the employee data

// End of complexCode.js