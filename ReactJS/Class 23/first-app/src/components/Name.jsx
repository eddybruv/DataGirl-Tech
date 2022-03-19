import React from "react";
import "../App.module.css";

function Name() {
  const redText = {
    fontSize: '2rem',
    color: 'red'
  }
  let people = [
    { firstName: "Eddy", color: "Chocolate", age: 20 },
    { firstName: "Sonia", color: "Light skin", age: 18 },
    { firstName: "Kyle", color: "Light skin", age: "unborn" },
  ];

  const listPeople = people.map((person) => {
    return (
      <div>
        <span style={redText}>First Name: {person.firstName}</span>
        {" "}
        Complexion: {person.color} Age: {person.age}
      </div>
    );
  });

  return <div>{listPeople}</div>;
}

export default Name;
