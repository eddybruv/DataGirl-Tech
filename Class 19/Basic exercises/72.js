// Write a program to create a new array after replacing  all the values 5 with 0 shifting all zeros to right direction.

let arr = [1, 2, 0, 3, 5, 7, 0, 9, 11, 5];
let count = 0;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if(arr[i] !== 5){
    newArr.push(arr[i]);
  } else count++;
}

while (count > 0){
  newArr.push(0);
  count--;
}

console.log(newArr);