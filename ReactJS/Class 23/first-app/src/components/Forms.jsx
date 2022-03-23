import React, {useState} from "react";

export default function Form() {

  const [name, setName] = useState('');
  const handleName = (e) => {
    setName(e.target.value);
    // console.log(name); 
  }
  // number state
  const [number, setNumber] = useState('');
  const handleNumber = (e) => {
    setNumber(e.target.value);
    // console.log(number);
  }

  // select state 
  const [select, setSelect] = useState('');
  const handleSelect = (e) => {
    setSelect(e.target.value);
    // console.log(select);
  }

  const submit = () => {
    console.log(name, number, select);
  }

  // style
  const inputStyle = {
    padding: '1rem',
    marginBottom: '1rem',
    border: '1px solid purple',
    borderRadius: '25px',
  };
  return (
    <>
      <form style={{textAlign: 'center', margin:'5rem 0'}}>
        <h1>Heyu, feel free <br /> to register</h1>
        <input onChange={handleName} style={inputStyle} type="text" placeholder="Enter name" /> <br />
        <input onChange={handleNumber}
          style={inputStyle}
          type="number"
          placeholder="Enter number"
        />{" "}
        <br />
        <select value={select} style={inputStyle} onChange={handleSelect} name="" id="">
          <option value='heyo'> 
            What do you know about love
          </option>
          <option value="love">I love you</option>
          <option value="you">You love me</option>
        </select> <br />
        <button type="button" style={inputStyle} onClick={submit}>Submit</button>
      </form>
    </>
  );
}
