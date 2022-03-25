import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const handleTask = (e) => {
    setTask(e.target.value);
  };

  let colors = [
    "#E6D36C",
    "#77E2E6",
    "#E6B860",
    "#5749E6",
    "#E68D55",
    "#E65350",
    "#E6E65C",
    "#E646DA",
    "#2EE669",
    "#8E39E6",
  ];

  const [todoList, setTodoList] = useState([]);
  const createTask = () => {
    let newList = [{text:task, color:colors[Math.floor(Math.random() * 10)]}, ...todoList];
    setTodoList(newList);
    setTask("");
  };

  const mainStyle = {
    width: "70vw",
    height: "70vh",
    padding: "2rem 10rem",
    background: "white",
    border: "1px solid gray",
    borderRadius: "10px",
    textAlign: "center",
  };

  const taskStyle = {
    display: "flex",
    justifyContent: "space between",
    padding: ".3rem 1rem",
    
    fontSize: "1.4rem",
    fontFamily: "monospace",
    margin: ".2rem",
    width: "100%",
  };

  const formInput = {
    border: "none",
    borderBottom: "1px solid gray",
    padding: ".5rem 1rem",
    outline: "none",
  };

  const formButton = {
    padding: ".5rem 1rem",
    color: "white",
    background: "green",
  };

  const formStyle = {
    marginBottom: "2rem",
  };

  return (
    <div className="main" style={mainStyle}>
      <h1>Task List</h1>
      <form style={formStyle} action="">
        <input
          value={task}
          style={formInput}
          onChange={handleTask}
          type="text"
          placeholder="add task"
        />
        <button type="button" onClick={createTask} style={formButton}>
          Add
        </button>
        <input type="text" placeholder="filter task" style={formInput} />
      </form>
      <div>
        {todoList.map((item,index) => {
          return (
            <div key={index} style={{ background: item.color }}>
              <p style={taskStyle}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
