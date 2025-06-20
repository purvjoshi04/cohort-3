let firstName = "John";
const age = 30;
var isStudent = true;

console.log(firstName);
console.log(age);
console.log(isStudent);

// Assignment : Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let color = "black";
const height = 162;
var likedPizza = true;

console.log(color);
console.log(height);
console.log(likedPizza);

let number = 42; // Number
let string = "Hello World"; // String
let isActive = false; // Boolean
let numbers = [1, 2, 3]; // Array

let sum = 10 + 5; // Arithmetic operator
let isEqual = 10 === 10; // Comparison operator
let isTrue = true && false; // Logical operator

// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"
console.log(message);

// Assignment #1
// Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?

function sumNum(num1, num2) {
  return num1 + num2;
}

let sumOfNum = sumNum(10, 10);
let sumOfNumstr = sumNum(10, "10");

console.log(sumOfNum);
console.log(sumOfNumstr);

// Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  if (age >= 18) {
    return "You are eligible to vote!";
  } else {
    return "You are not eligible to vote!";
  }
}

let canVoteDec = canVote(17);
console.log(canVoteDec);

// Assignment
// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function numCheck(num) {
  if (num % 2 == 0) {
    return "Number is even!";
  } else {
    return "Number is odd!";
  }
}

let numCheckDec = numCheck(10);
console.log(numCheckDec);

// Assignment
// Write a function called sum that finds the sum from 1 to a number

function sumFind(num) {
  let finalSum = 0;
  for (let i = 1; i <= num; i++) {
    finalSum += i;
  }
  return finalSum;
}

console.log(sumFind(10));