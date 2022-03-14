//Write a program to check a given array (length will be atleast 2) of integers and return true if there are two values 15, 15 next to each other.

let arr = [2, 4, 5, 1, 6, 6];

let check = (values) => {
  let i = 0, j = 0;

  for(i = 1, j = 0; i < values.length; i++, j++){
    if(values[j] === values[i])
      return true;
  }

  return false;
}

console.log(check(arr));