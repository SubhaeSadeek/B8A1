function multiplyValue(value: number, multiplier: number = 2) {
  return value * multiplier;
}

type Value = number | string | boolean;

function processInput(value: Value): string | number {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else return value ? "Active" : "Inactive";
}

type Position = readonly [lattitude: number, longitude: number, place: string];
function formatCoordinate(location: Position): string {
  const [lattitude, longitude, place] = location;

  return `Location: ${place} (${lattitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrayes: T[][]): T[] {
  return ([] as T[]).concat(...arrayes);
}

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

function pluckValues<T, K extends keyof T>(items: T[], key: K) {
  const plucked = [];
  for (let item of items) {
    plucked.push(item[key]);
  }
  return plucked;
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}
