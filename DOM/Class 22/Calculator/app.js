let form = document.forms['calculator'];

function check(e) {
  e.preventDefault();

  let number1 = parseInt(form['number-1'].value);
  let number2 = parseInt(form['number-2'].value);

  let operation = form['operation'].value;

  document.querySelector(".result .moi").innerText = calculate(
    number1,
    number2,
    operation
  );
  // console.log(calculate(number1, number2, operation));
}

function calculate(a, b, operation){
  document.querySelector(".result .moi").innerText = ""; 
  return eval(a + operation + b);
}