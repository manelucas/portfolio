import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar-fixed w-100">
        <div className="container h-100">
            <div className="h-100 d-flex justify-content-end g-2 align-items-center">              
              <a href="#about" className="text-decoration-none">About</a>
              <a href="#projects" className="text-decoration-none">Projects</a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
