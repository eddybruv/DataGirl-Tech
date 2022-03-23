import React, {useState, useEffect} from 'react'
import Todo from './components/Todo'

function App () {

  // let [counter, setCounter] = useState(0);
  // let [first, setFirst] = useState(5)

  // useEffect(() => {
  //   counter > 0 && setFirst(first + 1);
  // }, [counter])

  // const changeCounter = (option) => {
  //   option == 'decrement' && setCounter(counter - 1);
  //   option == "increment" && setCounter(counter + 1);
  // }

  // return (
  //   <div style={{ margin: "3rem", textAlign: "center" }}>
  //     <h1>First = {first}</h1>
  //     {/* <h3>{counter}</h3> */}
  //     <button onClick={() => changeCounter("increment")}>Increment</button>

  //     <Age age={counter} changeCounter={changeCounter}/>
  //   </div>
  // );

  return (
    <div>
      <Todo />
    </div>
  )
}

export default App;