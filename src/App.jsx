import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Home/>
        <About/>  
        <Projects/>
        <Contact/>
      </main> 
    </>
  );
}

export default App;
