//Write a program to create a new array taking the elements before the element value 5 from a given array of integers

let arr = [1, 2, 3, 5, 7];

let newArr = arr.splice(0, arr.indexOf(5));

console.log(newArr)