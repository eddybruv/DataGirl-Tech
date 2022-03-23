import React, {useState} from 'react';

export default function CorTodo() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]); //array of all todolist

  const handleText = (e) => {
    setTodo(e.target.value);
  };
  
  const submitTodo = () => {
    let newList = [todo, ...todoList];
    setTodoList(newList);
    setTodo('');
  }

  return (
    <div>
      <form>
        <div>
          <input value={todo} type="text" onChange={handleText}/>
          <button type='button' onClick={submitTodo}>Add</button>
        </div>

        <h2>List goes here</h2>
        <div>
          {
            todoList.map((item) => {
              return (
                <h4>{item}</h4>
              )
            })
          }
        </div>
      </form>
    </div>
  );
}
