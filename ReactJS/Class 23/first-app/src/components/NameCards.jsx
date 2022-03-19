import React from "react";

function NameCard() {
  let people = [
    { firstName: "Eddy", color: "Chocolate", age: 20 },
    { firstName: "Sonia", color: "Light skin", age: 18 },
    { firstName: "Kyle", color: "Light skin", age: "unborn" },
  ];

  let parentStyle = {
    width: "fit-content",
    margin: "0px",
    border: '1px solid black',
    float: 'left',
    margin: '2rem'
  };

  let buttonStyle = {
    width: "fit-content",
    backgroundColor: "black",
    padding: "5rem 6rem",
    color: "white",
    fontSize: "2rem",
  };

  let nameStyle = {
    width: 'fit-content',
    fontSize: "1.2rem",
    padding: "3rem",
  };

  let createCard = people.map((person) => {
    return (
      <div style={parentStyle}>
        <button style={buttonStyle}> Click Me</button>
        <div style={nameStyle}>
          Name: {person.firstName} <br />
          Age: {person.age} <br />
          Color: {person.color}
        </div>
      </div>
    );
  });

  return createCard;
}

export default NameCard