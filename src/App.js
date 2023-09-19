import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import People from "./People";
import Person from "./Person";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/people' element={<People />} />
          <Route path='/person/:id' element={<Person />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
