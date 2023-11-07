/*
FileName: SophisticatedCode.js
Content: A complex JavaScript program that implements a sophisticated data processing algorithm using advanced concepts like recursion, closures, and asynchronous functions.
*/

// Function to generate an array of random numbers
function generateRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

// Function to sort an array using merge sort algorithm
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

// Function to calculate the factorial of a number using recursion
function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Function to perform asynchronous calculations
async function performAsyncCalculations() {
  console.log("Starting async calculations...");
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const factorialResult = await calculateFactorialAsync(randomNumber);
  console.log(`Factorial of ${randomNumber} is: ${factorialResult}`);
}

function calculateFactorialAsync(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(factorial(num));
    }, 1000);
  });
}

// Example usage of the functions
const randomArray = generateRandomArray(10);
console.log("Random Array:", randomArray);

const sortedArray = mergeSort(randomArray);
console.log("Sorted Array:", sortedArray);

performAsyncCalculations();