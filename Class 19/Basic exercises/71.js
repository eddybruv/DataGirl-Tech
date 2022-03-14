//Write a program to create a new array from a given array of integers shifting all zeros to left direction

let arr = [1, 2, 0, 3, 5, 7, 0, 9, 11];
let count = 0;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    newArr.push(arr[i]);
  } else count++;
}

while (count > 0) {
  newArr.unshift(0);
  count--;
}

console.log(newArr);