let day = 1;
let remainder = day % 10;
let date = "";

switch (remainder) {
  case 1: 
    date = day + "st";
    break;
  case 2: 
    date = day + "nd";
    break;
  case 3:
    date = day + "rd";
    break;
  default: 
    date = day +"th";
}

console.log(`Today is the ${date}`);