console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 == 0) {
  console.log("even");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs > 999999) {
  console.log(numberOfHotdogs * 0.1);
} else if (numberOfHotdogs > 99) {
  console.log(numberOfHotdogs * 1);
} else if (numberOfHotdogs > 4) {
  console.log(numberOfHotdogs * 1.5);
} else {
  console.log(numberOfHotdogs * 2);
}

// Part 4: Daytime
const currentHour = 17;
const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Heino";
// const greeting = "Hello " + "//enter your code here" + "!";
const greeting = userName !== "Coach" ? userName : "Coach";

console.log("Hello " + greeting);
