//Write a program to shift an element in left direction and return a new array

let arr = [10, 20, 30, 40];

let swap = (arr) => {
  let newArr = [...arr];
  let value = newArr[0];
  newArr.splice(0, 1);
  newArr.push(value);
  return newArr;
}

console.log(swap(arr));