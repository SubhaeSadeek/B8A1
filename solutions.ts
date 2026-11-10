// * Problem 01 ✈

function multiplyValue(value: number, multiplier: number = 2) {
  return value * multiplier;
}

// console.log(multiplyValue(10, 0));

// * Problem 02 🛫 🛬

type Value = number | string | boolean;

function processInput(value: Value): string | number {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else return value ? "Active" : "Inactive";
}
// console.log("lets check value", processInput("  TRUE    "), "lets check value");

// * Problem 03
type Position = readonly [lattitude: number, longitude: number, place: string];
function formatCoordinate(location: Position): string {
  const [lattitude, longitude, place] = location;

  return `Location: ${place} (${lattitude}, ${longitude})`;
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

// *  Problem 04

function concatenateArrays<T>(...arrayes: T[][]): T[] {
  return ([] as T[]).concat(...arrayes);
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// concatenateArrays([1, 2], [3, 4], [5]);

// * problem 05

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const result = courses.filter(
    (c) => c.isPublished === true && c.students >= minStudents,
  );
  return result;
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

// console.log(getPopularCourses(courses, 80));

// * problem 06
function pluckValues<T, K extends keyof T>(items: T[], key: K) {
  const plucked = [];
  for (let item of items) {
    plucked.push(item[key]);
  }
  return plucked;
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// console.log(pluckValues(users, "id"));

// * problem 07
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// Sample Input:
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());

// Sample Output:
// "Employee: Alice, Base Salary: 50000"
// "Manager of Engineering: Alice"
