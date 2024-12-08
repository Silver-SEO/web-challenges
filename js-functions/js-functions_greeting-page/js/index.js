console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  hours = new Date().getHours();

  if (hours < 6) {
    return "Good Night";
  } else if (hours < 13) {
    return "Good Morning";
  } else if (hours < 19) {
    return "Good Afternoon";
  } else if (hours < 23) {
    return "Good Evening";
  } else if (hours < 25) {
    return "Good Night";
  } else {
    return "fail";
  }
  // Code here
}

function getDayColor() {
  day = new Date().getDay();

  if (day === "Saturday") {
    return "lightblue";
  } else if (day === "Sunday") {
    return "hotpink";
  }

  // Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
