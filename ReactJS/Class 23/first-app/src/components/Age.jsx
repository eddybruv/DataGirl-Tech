import React from 'react'

export const Age = ({age, changeCounter}) => {
  
  return (
    <div>
      <h1>My age is {age}</h1>
      <button onClick={() => changeCounter('decrement')}>Decrement</button>
    </div>
  )
}