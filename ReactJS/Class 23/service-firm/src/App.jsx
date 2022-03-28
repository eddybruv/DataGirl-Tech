/* eslint-disable import/no-duplicates */
import React from 'react';
import UpperSection from './Components/UpperSection';
import LowerSection from './Components/LowerSection';
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
    <div className="main">
      <UpperSection />
      <LowerSection />
      <Footer />
    </div>
  );
}

export default App;
