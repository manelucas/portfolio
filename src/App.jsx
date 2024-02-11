import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';


const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Home/>
        <About/>  
        <Projects/>
      </main> 
    </>
  );
}

export default App;
