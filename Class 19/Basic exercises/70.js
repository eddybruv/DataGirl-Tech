//Write a C program to create a new array taking the elements after the element value 5 from a given array of integers.

let arr = [1, 2, 3, 5, 7, 9, 11];
let newArr = [];
let indexOfFive = arr.indexOf(5);

newArr = arr.splice(indexOfFive + 1);
console.log(newArr);