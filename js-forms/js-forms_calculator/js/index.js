console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const rawFormData = new FormData(event.target);
  const formDataObject = Object.fromEntries(rawFormData);

  const numberA = Number(formDataObject.numberA);
  const numberB = Number(formDataObject.numberB);
  const operator = formDataObject.operator;

  if (operator === "addition") {
    result = add(numberA, numberB);
  }

  if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  }

  if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  }

  if (operator === "division") {
    result = divide(numberA, numberB);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
