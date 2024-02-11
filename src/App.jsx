import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <>
      <main className="container">
        <Navbar />
        <h1>Welcome to my website</h1>
      </main> 
    </>
  );
}

export default App;
