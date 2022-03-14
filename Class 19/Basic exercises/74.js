//Write a program to check whether the value of each element is equal or greater than the value of previous element of a given array of integers

let arr = [3, 5, 5, 2, 6, 3, 7, 8, 9, 2, 1];

let check = (values, index1, index2) => {
  if(values[index1] > values[index2]) return "greater";
  else if (values[index1] === values[index2]) return "equal";
  else return "less";
}

console.log(check(arr, 6, 4));