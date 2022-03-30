import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    if(e.target.className === 'decrement')
      setCount(count - 1);
    else if(e.target.className === 'increment')
      setCount(count + 1);
    else if(e.target.className === 'reset')
      setCount(0);
  }

  let color = document.getElementById('count');
  if (count > 0) {
    color.classList.add('green-text');
    color.classList.remove('red-text')
  } else if (count < 0){
    color.classList.add('red-text');
    color.classList.remove("green-text");
  }

  return (
    <div className="main">
      <div className="header">
        {" "}
        <p>The counter is set to</p>
      </div>
      <div id="count">
        <p>{count}</p>
      </div>
      <button onClick={handleClick} className="increment">
        Increment
        <FontAwesomeIcon className="icon" icon={faPlusCircle} />
      </button>
      <button onClick={handleClick} className="reset">
        Reset
        <FontAwesomeIcon className="icon" icon={faArrowRotateRight} />
      </button>
      <button onClick={handleClick} className="decrement">
        Decrement
        <FontAwesomeIcon className="icon" icon={faMinusCircle} />
      </button>
    </div>
  );
}

export default App;
