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
function formatCoordinate(location: Position[]): string {
  return ``;
}
