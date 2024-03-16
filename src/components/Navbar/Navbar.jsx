import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar-fixed w-100">
        <div className="container h-100">
          <ul className='d-flex h-100 justify-content-end g-2 align-items-center'>
            <li>              
              <a href="#about" className="text-decoration-none">About</a>
            </li>
            <li>
              <a href="#projects" className="text-decoration-none">Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-decoration-none">Contact</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
