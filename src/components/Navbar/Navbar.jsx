import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar-fixed w-100">
        <div className="container h-100">
            <div className="h-100 d-flex justify-content-end align-items-center g-2">
                <a href="index.html" className="text-decoration-none">Home</a>
                <a href="#about" className="text-decoration-none">About</a>
                <a href="#projects" className="text-decoration-none">Projects</a>
                <a href="contact.html" className="text-decoration-none">Contact</a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
