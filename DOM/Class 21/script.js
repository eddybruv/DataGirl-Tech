// let h1 = document.getElementsByTagName('h1');
// h1[0].setAttribute('class', 'make-red');


let div = document.getElementsByClassName('div');

function changeColor() {
  div[0].setAttribute("style", "color:blue");
}

let h1 = document.getElementsByTagName('h1');
function changeText() {
  h1[0].innerText = 'Hello, Edwin';
}

let add = document.getElementsByClassName('add5');
let count2 = parseInt(add[0].innerText);

let p = document.getElementsByTagName('p');
let count = 0;

function increment() {
  p[0].innerHTML = ++count;
}

function decrement() {
  p[0].innerText = --count;
}

function reset() {
  count = 0
  p[0].innerHTML = count;
}

function add5 () {
  add[0].innerText = parseInt(add[0].innerText) + 5;
}