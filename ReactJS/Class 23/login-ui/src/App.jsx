import React from 'react'
import './App.css';
import Header from './Components/Header'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'

function App() {
  return (
    <div className="main">
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;