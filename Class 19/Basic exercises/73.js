let arr = [1, 2, 5, 3, 5, 4, 6, 9, 11];

let check = (values) => {
  let newArr = [];
  for(let i = 0; i < values.length; i++){
    if(values[i] % 2 === 0) newArr.push(values[i]);
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) newArr.push(values[i]);
  }

  return newArr;
}

console.log(check(arr));