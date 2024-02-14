import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Home/>
        <div className='content'>
          <About/>  
          <Projects/>
          <Contact/>
        </div>
        <Footer/>
      </main> 
    </>
  );
}

export default App;
