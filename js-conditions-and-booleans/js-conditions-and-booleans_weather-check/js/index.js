// Change this value to test different "weather" conditions.
const weather = "snowy";

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = -19;

switch (weather) {
  case "sunny":
    if (temperature > 20) {
      console.log("It´s sunny and warm!");
    } else {
      console.log("It´s sunny, but a bit chilly!");
    }
    break;
  case "rainy":
    console.log("It´s raining, don´t forget your umbrella!");
    break;
  case "snowy":
    if (temperature < 0) {
      console.log("Freezing snow!");
    } else {
      console.log("It´s snowing, stay warm!");
    }
    break;
  default:
    console.log("I´m not sure what the weather is like.");
}

/*
- Write a `switch` statement that checks the value of `weather` and logs a message for each weather condition.
  - Example:
  - If the weather is "sunny" → "It's sunny!"
  - If the weather is "rainy" → "It's raining, don't forget your umbrella!"
  - If the weather is "snowy" → "It's snowing, stay warm!"
  - For any other input → "I'm not sure what the weather is like."
> 💡 Tip: Use the `break` statement to avoid the "fall-through" effect.

*/
