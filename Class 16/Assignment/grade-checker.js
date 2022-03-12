let score = 100;
let grade = "";

function gradeChecker(n){
  if (n >= 80){
    return "A";
  } else if(n >= 60) {
    return "B";
  } else if (n >= 50){
    return "C";
  } else if (n >= 45){
    return "D";
  } else return "F";
}

grade = gradeChecker(score);
console.log(`Your grade: ${grade}`);