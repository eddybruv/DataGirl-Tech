import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';

function App() {
  return (
    <>
      <Navbar/>
      <SectionOne columns={4}/>
      <SectionTwo columns={2}/>
    </>
  );
}

export default App;
