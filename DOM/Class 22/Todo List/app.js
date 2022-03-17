let form = document.forms['todo'];
let todoParent = document.getElementById('todos');


function addTodo(e) {
  e.preventDefault();
  let text = form['text'].value;
  let div = document.createElement('div');

  div.addEventListener('dblclick', deleteTodo())

  div.innerText = text;
  todoParent.appendChild(div);
}

function deleteTodo(e){
  e.delete();
}